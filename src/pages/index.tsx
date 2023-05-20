import Navbar from "@/components/header";
import Featured from "@/components/featured";
import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/product";
import NewestProducts from "@/components/newestProducts";

export default function Home({ featuredProduct, newestProducts }) {
  return (
    <>
      <Featured product={featuredProduct} />
      <NewestProducts newest={newestProducts} />
    </>
  );
}

export async function getServerSideProps() {
  const featuredId = "64693d34b835def14fb663d2";
  await mongooseConnect();

  const featuredProduct = await Product.findById(featuredId);
  const newestProducts = await Product.find(
    {},
    {},
    { sort: "_id -1", limit: 10 }
  );

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newestProducts: JSON.parse(JSON.stringify(newestProducts)),
    },
  };
}
