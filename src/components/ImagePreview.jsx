import { useContext, useState, useEffect } from "react";
import { AppContext } from "../lib/AppContext";
import { imagePaths } from "../lib/constants";

export default function ImagePreview() {
  const {isPreview, togglePreview} = useContext(AppContext)
  const [image, setImage] = useState(`${imagePaths[0]}.jpg`);
  const [activeImage, setActiveImage] = useState(1);
  const [isMobileView, setIsMobileView] = useState(false);

  function handleClick(path) {
    setImage(`${path}.jpg`);
    setActiveImage(imagePaths.indexOf(path) + 1)
  }

  function handleTogglePrevious() {
    if (activeImage > 0) {
      
      setImage(`${imagePaths[activeImage - 1]}.jpg`);
      setActiveImage(Number(`${ 1 < activeImage ? activeImage - 1 : activeImage}`));
    }
  }

  function handleToggleNext() {
    if (activeImage <= imagePaths.length) {
      setImage(`${imagePaths[activeImage - 1]}.jpg`);
      setActiveImage(Number(`${ imagePaths.length > activeImage ? activeImage + 1 : imagePaths.length}`));
    }
  }

  useEffect(() => {
    setIsMobileView(window.innerWidth <= 640);
  }, [isMobileView]);

  return (
    <div className={`flex flex-col  ${isPreview ? "w-full items-center justify-center gap-4" : "sm:w-[50%] sm:gap-10"}  `}>
      <div
        className=" flex flex-row relative justify-center"
      >
        <button
        onClick={handleTogglePrevious}
        className={` ${isPreview || isMobileView ? "w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full absolute top-[48%] sm:-left-3 sm:hover:scale-125" : "hidden"} ${isMobileView ? "left-4" : ""}`}
        > 
          <img src="/images/icon-previous.svg" alt=""  width={10} height={10} />
        </button>
        <button 
        onClick={() => togglePreview(true)}
        className={` ${isPreview ? " pointer-events-none" : "cursor-zoom-in"}`}
        >
        <img
          className="sm:rounded-3xl"
          src={image}
          alt=""
          width={450}

        />
        </button>
        <button
        onClick={handleToggleNext}
        className={` ${isPreview || isMobileView ? "w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full absolute top-[48%] -right-3 sm:hover:scale-125" : "hidden"} ${isMobileView ? "right-4" : ""}`}
        > 
            <img src="/images/icon-next.svg" alt=""  width={10} height={10} />
        </button>
      </div>
      <div className="flex gap-9 max-sm:hidden">
        {imagePaths.map((path) => (
          <button 
          onClick={() => handleClick(path)}
          key={path}
            className="w-[80px] h-[80px]"
          >
          <img
            className={`rounded-xl ${image === path + '.jpg' ? "outline outline-orange-500 outline-2 brightness-125 contrast-50 " : " hover:contrast-50 hover:brightness-125"}`}
            height={20}
            width={85}
            src={`${path}-thumbnail.jpg`}
            alt=""
          />
          </button>
          
        ))}
      </div>
    </div>
  );
}
