import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import styled from "styled-components";
import Image from "next/image";
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
  margin-top: -3rem;
`;
const Product = ({ product: { data, content } }) => {
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
        <Image
          src={data.image}
          alt={data.name}
          objectFit="cover"
          width={350}
          height={350}
        />
        <p>{data.description}</p>
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
