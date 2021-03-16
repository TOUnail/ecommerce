import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import styled from "styled-components";
import useCart from "../hooks/useCart";
// const Header = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   @media (min-width: 1280px) {
//     width: 1200px;
//   }
// `;
const Container = styled.div`
  padding: 0 1rem;
  @media (min-width: 1280px) {
    margin: 0 auto;
    width: 1200px;
  }
`;
const Banner = styled.div`
  padding: 3rem 1rem;
  background-color: #eee;
  border-radius: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Listings = styled.div`
  --min: 30ch;
  --gap: 1rem;
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: repeat(auto-fit, minmax(var(--min), 1fr));
  margin-top: -3rem;
  @media (min-width: 1280px) {
    padding: 0 3rem;
  }
`;
// const Card = styled.div`
//   padding: 1rem;
//   border: 1px solid #000;
//   border-radius: 35px;
//   position: relative;
//   display: flex;
//   flex-direction: column;
// `;
const Card = styled.div`
  display: grid;
  padding: 1rem;
  border-radius: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;
const Products = (props) => {
  const { addToCart } = useCart();
  return (
    <Container>
      <Banner>
        <div>Home / Products</div>
        <h2>Products</h2>
        <div>Showing results</div>
      </Banner>
      <Listings>
        {props.products.map((product) => (
          <Card key={product.slug}>
            <div style={{ position: "relative", paddingTop: "100%" }}>
              {product.image && (
                <Link href={product.slug}>
                  <a>
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </a>
                </Link>
              )}
            </div>
            <div>
              <Link href={product.slug}>
                <a>{product.name}</a>
              </Link>
              <div>{product.description}</div>
              <div>${product.price / 100}</div>
              <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
          </Card>
        ))}
      </Listings>
    </Container>
  );
};
export const getStaticProps = async () => {
  const directory = `${process.cwd()}/content`;
  const filenames = fs.readdirSync(directory);
  const products = filenames.map((filename) => {
    const content = fs.readFileSync(`${directory}/${filename}`).toString();
    const { data } = matter(content);
    const slug = `/products/${filename.replace(".md", "")}`;
    const product = {
      ...data,
      slug,
    };
    return product;
  });
  return {
    props: {
      products,
    },
  };
};
export default Products;
