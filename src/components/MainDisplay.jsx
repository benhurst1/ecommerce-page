
import ImagePreview from "./ImagePreview";
import ItemDescription from "./ItemDescription";

export default function MainDisplay() {
  
  return (
    <div className="w-full sm:w-[80%] flex sm:mt-10 sm:justify-around sm:mb-10 max-sm:flex-col max-lg:gap-10  max-sm:gap-0">
      <ImagePreview />
      <ItemDescription />
    </div>
  );
}
