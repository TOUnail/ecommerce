const fs = require("fs");
const matter = require("gray-matter");

const getProducts = () => {
  const directory = `${process.cwd()}/content`;
  const filenames = fs.readdirSync(directory);
  const products = filenames.map((filename) => {
    const content = fs.readFileSync(`${directory}/${filename}`).toString();
    const { data } = matter(content);

    return data;
  });
  return products;
};
exports.handler = async (event, context) => {
  const { cart } = JSON.parse(event.body);
  const products = getProducts();
  const cartWithProducts = cart.map(({ id, qty }) => {
    const product = products.find((p) => p.id === id);
    return {
      ...product,
      qty,
    };
  });
  const lineItems = cartWithProducts.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.name,
      },
      unit_amount: product.price,
    },
    quantity: product.qty,
  }));
  const session = {
    payment_method: ["card"],
    line_items: lineItems,
    mode: "payment",
  };
  return {
    statusCode: 200,
    body: JSON.stringify({ session }),
  };
};
