import { useState } from "react";

const imagePaths = [
  "./images/image-product-1",
  "./images/image-product-2",
  "./images/image-product-3",
  "./images/image-product-4",
];

export default function ImagePreview({ setIsOpen }) {
  const [image, setImage] = useState(`${imagePaths[0]}.jpg`);

  function handleClick(path) {
    setImage(path);
  }

  return (
    <div className="w-[50%] flex flex-col gap-10 ">
      <img
        className="rounded-3xl"
        src={image}
        alt=""
        width={450}
        onClick={() => setIsOpen(true)}
      />
      <div className="flex gap-9">
        {imagePaths.map((path) => (
          <img
            className="rounded-xl bg-white hover:outline outline-orange-500 outline-2 hover:opacity-50"
            onClick={() => handleClick(`${path}.jpg`)}
            height={20}
            width={85}
            src={`${path}-thumbnail.jpg`}
            key={path}
          />
        ))}
      </div>
    </div>
  );
}
