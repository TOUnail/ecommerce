import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
const Product = ({ product: { data, content } }) => {
  const html = marked(content);
  return (
    <div>
      <h1>{data.name}</h1>
      <p>${data.price / 100}</p>
      <p>{data.description}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
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
