import fs from "fs";
import matter from "gray-matter";
import styled from "styled-components";
const Listings = styled.div`
  --min: 15ch;
  --gap: 1rem;
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: repeat(auto-fit, minmax(var(--min), 1fr));
`;
const Homepage = (props) => {
  return (
    <div>
      {/* Start Hero */}
      <img
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        src="https://temp.media/?height=1246&width=1944&text=&category=technology&color="
      />
      {/* End Hero */}
      <div>
        <h2>Why use Paracord?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget
          euismod sem. Nam mollis ligula ac feugiat sodales. Pellentesque risus
          sapien, facilisis eu molestie eu, molestie ac dolor. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Cras a arcu id mauris dictum
          fermentum a vel ex.
        </p>
      </div>
      {/* Start Featured */}
      <h2>Popular Products</h2>
      <Listings>
        {props.products.map((product) => (
          <div key={product.slug}>{product.name}</div>
        ))}
      </Listings>
      {/* End Featured */}
      {/* Start Collection */}
      <h2>Striped Collection</h2>
      <Listings>
        {props.products.map((product) => (
          <div key={product.slug}>{product.name}</div>
        ))}
      </Listings>
      {/* End Collection */}
    </div>
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
