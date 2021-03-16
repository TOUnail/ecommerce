import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import styled from "styled-components";
// import Image from "next/image";
import useCart from "../../hooks/useCart";
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
const Card = styled.div`
  display: grid;
  padding: 1rem;
  border-radius: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin: -3rem 5rem 0;
`;
const ImageContainer = styled.div`
  position: relative;
`;
const ProductImg = styled.svg`
  position: relative;
  z-index: 2;
  mix-blend-mode: multiply;
`;
const ProductPath = styled.path`
  fill: #00ff00;
`;
const Product = ({ product: { data, content } }) => {
  const { addToCart } = useCart();
  const html = marked(content);
  return (
    <Container>
      <Banner>
        <div>Home / Products / {data.name}</div>
        <h1>{data.name}</h1>
        <div>Support</div>
      </Banner>
      <Card>
        <p>${data.price / 100}</p>
        {/* <Image
          src={data.image}
          alt={data.name}
          objectFit="cover"
          width={350}
          height={350}
        /> */}
        <ImageContainer>
          <ProductImg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
          >
            <ProductPath d="M330.63 527s-12.5 13.25 7.75 20.38c0 0 34.75 29.37 33.12 46 0 0 8.25 13.62-5.25 32 0 0-18.5 19.62-55.12 47 0 0-14.38 12.37-68.13 19.37 0 0-47.25 12-76.5 13.5h-32.65a35.76 35.76 0 01-5.17-.38L88 698.5 35.81 693 0 689.5l-6.5 186 4.92 1.33H27.5l117 5.34 70.5-5.5L318.17 864l68.33-14.83 24.17-7.67 73.5-13.83 129.5-41.84 23.5-11.33 54-27 36.16-22.5s2-5 48.84-44c0 0 25.16-24.33 33.5-50.5 0 0 16.16-13.5 18.66-47.67a204.4 204.4 0 00-1.33-49s-9.33-27.5-27.67-67.83c0 0-28.66-41-44-53 0 0-.33-13 14-16.33 0 0-142.08-79.42-317.33-115.67l78.33 89s110.34 59 128.34 124c1.14 1.15 10.8 37.58-.67 60-.62 1.21-1.75 20-28.67 36L612 609.33l-67 37.34-27.67 12-24 4.33L434 686.67l-32 8.66-46.33 7.34-31 13.33L351 698s63.25-31.75 63.67-102c0 0 11.83-53-47.67-77 0 0-19.75-15.67-36.37 8z" />
          </ProductImg>
          <img
            src="/stripe-model.jpg"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "auto",
            }}
          />
        </ImageContainer>
        <p>{data.description}</p>
        <button onClick={() => addToCart(data)}>Add to cart</button>
      </Card>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
};
export const getStaticPaths = () => {
  const directory = `${process.cwd()}/content`;
  const filenames = fs.readdirSync(directory);
  const paths = filenames.map((filename) => {
    return {
      params: {
        product: filename.replace(".md", ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const name = context.params.product;
  const path = `${process.cwd()}/content/${name}.md`;
  const fileContent = fs.readFileSync(path).toString();
  const { data, content } = matter(fileContent);
  return {
    props: {
      product: {
        data,
        content,
      },
    },
  };
};
export default Product;
