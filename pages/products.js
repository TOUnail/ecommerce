import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
const Column = styled.div`
  width: 25%;
  border: 1px solid #000;
`;
const Products = (props) => {
  return (
    <Container>
      {props.products.map((product) => (
        <Column key={product.slug}>
          <Link href={product.slug}>
            <a>{product.name}</a>
          </Link>
          <div>{product.description}</div>
          <div>${product.price / 100}</div>
        </Column>
      ))}
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
