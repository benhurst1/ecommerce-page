import { useContext } from "react";
import { AppContext } from "../lib/AppContext";

function CartPreview() {
  
  const { cart, removeItemFromCart } = useContext(AppContext);
  return (
    <div className="absolute top-[4.5rem] right-2 z-50 w-[300px] min-h-[200px] shadow-lg shadow-black flex flex-col bg-white p-4 gap-3 rounded-md">
        <span className="text-sm text-black font-bold">Cart</span>
        <hr />
        <div className="w-full h-full flex flex-col items-center justify-center">
          {cart.length === 0 ? (
            <span className="mt-10 text-center text-gray-600 font-semibold">Your cart is empty.</span>
          ) : (
            <div className="w-full h-full flex flex-col gap-6">
              <div className="w-full">
                {cart.map((product) => (
                  <div key={product.id} className="flex flex-row gap-3 items-center ">
                    <img src={`${product.imagePaths[0]}.jpg`} alt="" width={50} height={50} className="rounded-md" />
                      <div className="flex flex-col gap-1 text-sm">
                        <span className=" text-gray-400 flex text-nowrap whitespace-nowrap overflow-ellipsis">{product.name}</span>
                        <div className="flex flex-row gap-1">
                          <span className=" text-gray-400">${product.price} x {product.qty}</span>
                          <span className="text-black font-bold">${product.price * product.qty}{".00"}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          removeItemFromCart(product);
                        }}
                      >
                        <img src={"/images/icon-delete.svg"} alt="" width={10} height={10} className="h-5 w-4"/>
                      </button>
                  </div>
                ))}
              </div>
              
              <button className=" bg-orange-500 rounded-lg w-full h-10 text-white font-bold">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
  )
}

export default CartPreview