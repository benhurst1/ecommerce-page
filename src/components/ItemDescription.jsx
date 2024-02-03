import { useContext, useEffect, useState } from "react";
import { Busket } from "../lib/AppContext.jsx";

function ItemDescription() {
    const {cart, modifyCart} = useContext(Busket);
    const [qty, setQty] = useState(0);

  const handleAddToCart = () => {
    modifyCart({
      id: "1234",
      qty: 1,
      image: "",
      price: 0
    })
  }

  useEffect(() => {
    console.log(cart);
  }, [cart])

  return (
    <div className="w-[35%] mt-20 flex flex-col gap-6">
        <span className="text-orange-500 text-md font-bold">SNEAKER COMPANY</span>

        <h1 className=" text-4xl font-bold text-black">Fall Limited Edition Sneakers</h1>

        <p className="text-md text-gray-400">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer. </p>

        {/* price */}
        <div >
            <div className="flex gap-5 font-bold">
                <span className="text-xl text-black">$125.00</span>
                <span className="text-sm text-orange-500 bg-orange-300 bg-opacity-50 rounded-md flex items-center justify-center px-1">50%</span>
            </div>
            <span className="text-sm text-gray-400 line-through">$250.00</span>
        </div>

        {/* buttons */}
        <div className="flex gap-2">
            <div className="w-[30%] flex justify-between p-3 bg-gray-100 rounded-md font-bold">
                <button className="text-orange-500">-</button>
                {qty}
                <button className="text-orange-500">+</button>
            </div>
        <button onClick={handleAddToCart}
        className="w-[70%] h-[50px] bg-orange-400 p-2 text-sm rounded-md text-white flex font-semibold justify-center items-center gap-2"
        >
          <img src="./images/icon-cart.svg" alt="" className=" brightness-200 contrast-80 w-5"/>
          <span>
            Add to cart 
            </span>
          </button>
        </div>
    </div>
  )
}

export default ItemDescription