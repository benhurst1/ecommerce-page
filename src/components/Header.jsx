import { useContext } from "react";
import NavButton from "./NavButton";
import { AppContext } from "../lib/AppContext";
import CartPreview from "./CartPreview";

export default function Header() {
  const { cart, isCartOpen, toggleCartOpen, toggleNavOpen } = useContext(AppContext);

  return (
    <div className="w-full relative">
      <header className="flex sm:h-[100px] max-sm:h-[60px] items-center w-full justify-between">
        <div className="max-sm:w-full flex justify-between sm:gap-10">
          <div className="flex flex-row gap-2 justify-between items-center ml-3">
            <button 
            onClick={toggleNavOpen}
            className=" sm:hidden">
              <img src="/images/icon-menu.svg" alt="" className="w-[1.3rem]"/>
            </button>
            <img
              className="object-contain max-sm:w-[8.5rem]"
              src="./images/logo.svg"
              alt=""
              height={10}
              width={120}
            />
          </div>

          <nav className="flex max-sm:hidden">
            <NavButton text={"Collections"} />
            <NavButton text={"Men"} />
            <NavButton text={"Women"} />
            <NavButton text={"About"} />
            <NavButton text={"Contact"} />
          </nav>
        </div>
        <div className="flex sm:items-center sm:gap-8 sm:mr-9 max-sm:w-[40%] max-sm:justify-between max-sm:pr-3">
          <button
          onClick={toggleCartOpen}
           className="relative hover:cursor-pointer ">
            <span className={`${ cart.length ? "w-5 h-3 absolute -top-1 -right-2 bg-orange-500 text-white px-2 text-sm font-semibold rounded-full flex items-center justify-center" : "hidden" }`}>{cart.length}</span>
          <img className="h-5 w-5" src="./images/icon-cart.svg" alt="click to open cart" />
          </button>

          <img src="./images/image-avatar.png" alt="" height={40} width={40} className=" cursor-pointer rounded-full hover:border-2  hover:border-orange-500"/>
        </div>
      </header>

      {isCartOpen && <CartPreview />}
      
      <hr className="shadow w-full" />
    </div>
  );
}
