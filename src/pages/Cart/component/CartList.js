import { Button } from "bootstrap"
import { useState } from "react"
import { useCart } from "../../../context";
import { CartCard } from "./CartCard"
import { Checkout } from "./Checkout"

export const CartList = () => {
  const [checkout, setCheckout] = useState(false);
  const { cartList, total } = useCart();

  return (
    <>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Cart ({cartList.length})
        </p>
      </section>
      
      <section>
       { cartList.map((product) => (
        <CartCard key={product.id} product={product} />
       )) }
      </section>

      <section className="max-w-4xl m-auto">
        <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
          <p className="flex justify-between my-2">
            <span className="font-semibold">Total Amount:</span>
            <span>${total}</span>
          </p>
        </div>
        <div className="text-right my-5">
          <button onClick={() => setCheckout(true)} type="button" className= "bg-blue-600 inline-flex items-center justify-center w-25 h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-red hover:bg-black-400 focus:shadow-outline focus:outline-none">
          
            PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
          </button>
        </div>
      </section>
      { checkout && <Checkout setCheckout={setCheckout} />}
    </>
  )
}