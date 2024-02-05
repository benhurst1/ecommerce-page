import { useContext, useEffect, useState } from "react";
import { AppContext } from "../lib/AppContext";
import ImagePreview from "./ImagePreview";


const ItemPreview = () => {
    const {isPreview, togglePreview} = useContext(AppContext);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      setIsMobile(window.innerWidth <= 640);
    }, [isMobile]);

  return (
    <div className={` ${isPreview && !isMobile ? "absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex flex-col items-center justify-center" : "hidden"}`}>
          <button 
            onClick={() => togglePreview(false)}
            className=" text-white hover:text-orange-500 text-3xl absolute left-[65%] top-0"
          >
            x
          </button>
          <ImagePreview />
        </div>
  )
}

export default ItemPreview