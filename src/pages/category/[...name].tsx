import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ProductsByCategory from "@/components/productsByCategory";

export default function Category() {
  const router = useRouter();
  const { name } = router.query;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (name) {
      const fetchProductsByCategory = async () => {
        const resp = await axios.get(`/api/produtos?category=${name}`);
        setProducts(resp.data);
      };
      fetchProductsByCategory();
    }
  }, [name]);

  return <ProductsByCategory products={products} name={name} />;
}
