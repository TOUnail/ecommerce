import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import styled from "styled-components";
const Header = styled.div`
  width: 100vw;
  margin: 0 auto;
  @media (min-width: 1280px) {
    width: 1300px;
  }
`;
const Banner = styled.div`
  padding: 3rem;
  background-color: #eee;
  border-radius: 35px;
`;
const Container = styled.div`
  width: 100vw;
  margin: -3rem auto 0;
  @media (min-width: 1280px) {
    width: 1200px;
  }
`;
const Listings = styled.div`
  --min: 15ch;
  --gap: 1rem;
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: repeat(auto-fit, minmax(var(--min), 1fr));
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
  place-content: center;
  padding: 1rem;
  border-radius: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;
const Products = (props) => {
  return (
    <>
      <Header>
        <Banner>
          <Listings>
            <div>breadcrumbs</div>
            <div>Title</div>
            <div>Showing results</div>
          </Listings>
        </Banner>
      </Header>
      <Container>
        <Listings>
          {props.products.map((product) => (
            <Card key={product.slug}>
              {product.image && (
                <Link href={product.slug}>
                  <a>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={350}
                      height={350}
                    />
                  </a>
                </Link>
              )}
              <Link href={product.slug}>
                <a>{product.name}</a>
              </Link>
              <div>{product.description}</div>
              <div>${product.price / 100}</div>
            </Card>
          ))}
        </Listings>
      </Container>
    </>
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
