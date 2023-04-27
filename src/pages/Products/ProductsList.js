import React, { useState, useEffect } from "react";
import {  useLocation } from "react-router-dom";
import { ProductCard } from "../../components/";
import { ProductFilter } from "./components/ProductFilter";
import { useTitle } from "../../hooks/useTitle";
import { useFilter } from "../../context";
import { getProductList } from "../../services";
import { toast } from "react-toastify";

export const ProductsList = () => {
  const { products, initialProductList } = useFilter();

  const [show, setShow] = useState(false);

  // const [products , setProducts] = useState([])
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");
  useTitle("Your Online Retro Games");
  console.log(search);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductList(searchTerm);
        initialProductList(data);
      } catch (error) {
        toast.error(error.message, { closeButton: true, autoClose: 4500 });
      }
    }
    fetchProduct();
  }, [searchTerm]); //esLint-disable-line

  return (
    <main>
      <section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">The</span>
              </span>{" "}
              quick, brown fox jumps over a lazy dog
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <span>
            <button
              onClick={() => setShow(!show)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
          {/* <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
            {products.map((product)=>(
                <ProductCard  key={product.id} product ={product} />
            ))}
          

           
          </div> */}
          <section className="my-20">
            <h1 className="text-2xl text-center font-semibold dark: text-slate-100 mb-5">
              All Games ({products.length})
            </h1>
            <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </section>
      {show && <ProductFilter setShow={setShow} />}
    </main>
  );
};
