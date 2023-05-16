import Navbar from "@/components/header";
import Featured from "@/components/featured";
import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/product";

export default function Home({ product }) {
  return (
    <>
      <Navbar />
      <Featured product={product} />
    </>
  );
}

export async function getServerSideProps() {
  const featuredId = "6463e8aa3786309229dfc8f1";
  await mongooseConnect();

  const product = await Product.findById(featuredId);

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
