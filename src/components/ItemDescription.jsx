import { useContext } from "react";
import { AppContext } from "../lib/AppContext.jsx";
import { item } from "../lib/constants.jsx";

function ItemDescription() {
    const {cart, addItemToCart, modifyCart} = useContext(AppContext);

  return (
    <div className="lg:w-[35%] max-md:w-[50%] lg:mt-20 flex flex-col sm:gap-6 w-full max-sm:p-5 max-sm:gap-4">
        <span className="text-orange-500 text-md font-bold">{item.company.toUpperCase()}</span>

        <h1 className=" sm:text-4xl max-sm:text-3xl font-bold text-black">{item.name}</h1>

        <p className="sm:text-md max-sm:text-sm text-gray-400">{item.description}</p>

        {/* price */}
        <div className="flex sm:flex-col max-sm:flex-row max-sm:justify-between max-sm:items-center">
            <div className="flex sm:gap-5 max-sm:gap-3 font-bold">
                <span className="text-2xl text-black">${item.price}</span>
                <span className="text-sm text-orange-500 bg-orange-300 bg-opacity-50 rounded-md flex items-center justify-center px-1">{100 / (item.originalPrice / item.price)}%</span>
            </div>
            <span className="text-sm text-gray-400 line-through">${item.originalPrice}</span>
        </div>

        {/* buttons */}
        <div className="flex gap-2 sm:flex-row max-sm:flex-col">
            <div className="sm:w-[30%] max-sm:w-full flex justify-between p-3 bg-gray-100 rounded-md font-bold">
                <button 
                  onClick={() => {
                    modifyCart(item, false, true);
                  }}
                 className="text-orange-500"
                >
                  <img src="/images/icon-minus.svg" alt="deduct product quantity by one" />
                </button>
                <span>
                 {cart.length ? cart.map(product => {
                  if (product.id === item.id) {
                    return product.qty;
                  }
                 }) : 0}
                </span>
                <button 
                onClick={() => {
                  modifyCart(item, true, false);
                }}
                className="text-orange-500"
                >
                  <img src="/images/icon-plus.svg" alt="increment product quantity by one" />
                </button>
            </div>
        <button onClick={() => {
          addItemToCart(item);
        }}
        className="sm:w-[70%] max-sm:w-full h-[50px] bg-orange-500 hover:bg-orange-400 p-2 text-sm rounded-md text-white flex font-semibold justify-center items-center gap-2"
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