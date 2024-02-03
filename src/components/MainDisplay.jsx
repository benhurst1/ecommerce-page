
import ImagePreview from "./ImagePreview";
import ItemDescription from "./ItemDescription";

export default function MainDisplay({ setIsOpen }) {
  
  return (
    <div className="w-[80%] flex mt-10 justify-around ">
      <ImagePreview setIsOpen={setIsOpen} />
      <ItemDescription />
    </div>
  );
}
