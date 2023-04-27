import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "../components/";
import { useTitle } from "../hooks/useTitle";
import { useCart } from "../context";
import { getProduct } from "../services";
import { toast } from "react-toastify";

export const ProductDetail = () => {
  const { addToCart, removeFromCart, cartList } = useCart();
  const [inCart, setInCart] = useState(false);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useTitle(product.name);
  useEffect(() => {
    async function fetchProducts() {
      try {
      } catch (error) {
        toast.error(error.message, { closeButton: true, autoClose: 4500 });
      }
      const data = await getProduct(id);
      setProduct(data);
    }
    fetchProducts();
  }, [id]);

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);
    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);


  return (
    <main>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={product.name}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
              src={product.image_local}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                MOCKBOOK
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <Rating rating={product.rating} />
                </span>
              </div>
              <p className="leading-relaxed">{product.overview}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  {product.best_seller && (
                    <span className="relative border bg-slate-100 top-4 left-2 px-2 bg-orange-500 bg-capacity-90 text-white-rounded">
                      {" "}
                      Hot Product
                    </span>
                  )}
                  {!product.in_stock && (
                    <span className="relative top-4 left-2 px-2 bg-red-500 bg-capacity-90 text-white-rounded">
                      {" "}
                      Out of Stock{" "}
                    </span>
                  )}
                  {product.in_stock && (
                    <span className="relative top-4 left-2 px-2 bg-orange-300 bg-capacity-90 text-white-rounded">
                      {" "}
                      In Stock{" "}
                    </span>
                  )}
                </div>
                <div className="flex ml-6 items-center">
                  <div className="relative"></div>
                </div>
              </div>
              <div className="flex">
                <span
                  className={`mt-1 mb-4 mr-1 text-4xl font-bold sm:text-4xl }`}
                >
                  ${product.price}
                </span>
                {inCart && (
                  <button
                    onClick={() => removeFromCart(product)}
                    className={`inline-flex items-center  ml-3 justify-center w-3/6 h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-red-700 hover:bg-black-400 focus:shadow-outline focus:outline-none  ${
                      product.in_stock ? "" : "cursor-not-allowed"
                    } `}
                    disabled={product.in_stock ? "" : "disabled"}
                  >
                    Remove from Cart
                  </button>
                )}
                {!inCart && (
                  <button
                    onClick={() => addToCart(product)}
                    className={` inline-flex items-center  ml-3 justify-center w-3/6 h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-black hover:bg-black-400 focus:shadow-outline focus:outline-none ${
                      product.in_stock ? "" : "cursor-not-allowed"
                    }`}
                    disabled={product.in_stock ? "" : "disabled"}
                  >
                    {" "}
                    Add to Cart
                  </button>
                )}

                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
