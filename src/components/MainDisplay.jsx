import { useState } from "react";
import ImagePreview from "./ImagePreview";

export default function MainDisplay({ setIsOpen }) {
  return (
    <div className="flex mt-28">
      <ImagePreview setIsOpen={setIsOpen} />
      <div></div>
    </div>
  );
}
