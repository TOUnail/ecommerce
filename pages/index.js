import Link from "next/link";
const Homepage = () => {
  return (
    <div>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <h1>Homepage</h1>
    </div>
  );
};
export default Homepage;
