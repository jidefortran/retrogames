import { useState, useEffect } from "react";

import { ProductCard } from "../../../components/";
import { getFeaturedList } from "../../../services";
import { toast } from "react-toastify";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedList();
        setProducts(data);
      } catch (error) {
        toast.error(error.message, { closeButton: true, autoClose: 4500 });
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark: text-slate-100 mb-5">
        Featured Games
      </h1>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
