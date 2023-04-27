
import {Link} from "react-router-dom";
import { Rating } from "../Elements/Rating";
import { useCart } from "../../context";
import { useState, useEffect } from "react";

export const ProductCard = ({product}) => {
  const [inCart , setInCart]= useState(false)
const {cartList , addToCart, removeFromCart} =useCart()
  const  {id, name ,rating, price, overview, image_local, best_seller }=product
  useEffect(() => {
   const productInCart = cartList.find(item => item.id === product.id)
   if(productInCart){
    setInCart(true)
   }else{
    setInCart(false)
   }
  
  
  }, [cartList , product.id])
  
  
  function handleClick(product){
    addToCart(product)
    console.log(product)
    
  }
  return (


    <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
    <div className="relative w-full h-48">
  {best_seller && <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-capacity-90 text-white-rounded"> Hot Product</span> }  
<Link to ={`/product/${id}`}>
      <img
        src={image_local}
        className="object-contain w-full h-full rounded-t"
        alt={name}
      /></Link>
    </div>
    <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
      <div>
        <div className="text-lg font-semibold">{name}</div>
        <p className="text-sm text-gray-900">
          {overview}
        </p>
        <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
          ${price}
        </div>
      </div>
      {inCart &&  <Link  onClick={()=>removeFromCart(product)} 
        className= {`bg-red-700 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-red hover:bg-black-400 focus:shadow-outline focus:outline-none  ${product.in_stock ? " " : "cursor-not-allowed"}`}
      >
        Remove from Cart
    </Link>  }
    {!inCart &&
      <button  onClick={()=>handleClick(product)} disabled={product.in_stock ? "" : "disabled"}
        className={`inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-black hover:bg-black-400 focus:shadow-outline focus:outline-none  ${product.in_stock ? " " : "cursor-not-allowed"}`}
      >
        Add to Cart
    </button>}
      <div className="flex items-center my-2">
          {/* <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star text-yellow-500 mr-1"></i> */}
          <Rating  rating={rating}/>
        </div>
    </div>
  </div>

  );
};

