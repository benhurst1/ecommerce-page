import { useContext } from "react"
import NavButton from "./NavButton"
import { AppContext } from "../lib/AppContext"

function MobileNavigation() {
    const { isNavOpen,toggleNavOpen } = useContext(AppContext);

  return (
    <>
    {isNavOpen && (<div onClick={toggleNavOpen} className="absolute top-0 left-0 sm:hidden bg-black bg-opacity-80 w-full h-full">
        <button onClick={toggleNavOpen} className="absolute top-3 left-4  text-3xl">
            x
        </button>
        <nav className=" bg-white w-[60%] h-full px-4 flex flex-col gap-3 pt-20">
            <NavButton text={"Collections"} />
            <NavButton text={"Men"} />
            <NavButton text={"Women"} />
            <NavButton text={"About"} />
            <NavButton text={"Contact"} />
        </nav>
    </div>)
    }
    </>
  )
}

export default MobileNavigation