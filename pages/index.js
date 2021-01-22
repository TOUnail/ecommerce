import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
const Homepage = (props) => {
  console.log(props);
  return props.products.map((product) => (
    <div>
      <Link href={product.slug}>
        <a>{product.name}</a>
      </Link>
      <div>{product.description}</div>
      <div>${product.price / 100}</div>
    </div>
  ));
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
