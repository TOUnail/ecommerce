import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import styled from "styled-components";
const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 1280px) {
    width: 1200px;
  }
`;
const Section = styled.div`
  @media (min-width: 1280px) {
    padding 5rem;
  }
`;
const Listings = styled.div`
  --min: 30ch;
  --gap: 1rem;
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: repeat(auto-fit, minmax(var(--min), 1fr));
`;
const Card = styled.div`
  display: grid;
  place-content: center;
  padding: 1rem;
  border-radius: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;
const Homepage = (props) => {
  return (
    <>
      {/* Start Hero */}
      <img
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        src="https://temp.media/?height=1246&width=1944&text=&category=technology&color="
      />
      {/* End Hero */}
      <Container>
        <Section>
          <h2>Why change to a paracord cable?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget
            euismod sem. Nam mollis ligula ac feugiat sodales. Pellentesque
            risus sapien, facilisis eu molestie eu, molestie ac dolor. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Cras a arcu id
            mauris dictum fermentum a vel ex.
          </p>
        </Section>
        {/* Start Featured */}
        <h2>Popular Products</h2>
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
              {/* <button onClick={() => addToCart(product)}>Add to cart</button> */}
            </Card>
          ))}
        </Listings>
        {/* End Featured */}
        {/* Start Collection */}
        <h2>Striped Collection</h2>
        <Listings>
          {props.products
            .filter((p) => {
              return p.category === "striped";
            })
            .map((product) => (
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
                {/* <button onClick={() => addToCart(product)}>Add to cart</button> */}
              </Card>
            ))}
        </Listings>
        {/* End Collection */}
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
export default Homepage;
