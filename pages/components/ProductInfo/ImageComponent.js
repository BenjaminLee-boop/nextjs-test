import { useState } from "react";
export default function ImageComponent({ images }) {
  const [image, setImage] = useState(images[0].node.originalSrc);
  console.log();
  const imageArrGreaterThanOne = images.length > 1;

  if (imageArrGreaterThanOne) {
    return (
      <div className="flex flex-col">
        <img
          className="object-scale-down max-h-96 h-auto w-full"
          src={image}
          id="main-image"
        />
        <div className="flex flex-row flex-wrap w-auto gap-2 p-1 px-36">
          {images.map((img, index) => (
            <img
              className="object-scale-down max-h-24 h-auto w-auto cursor-pointer select-none"
              src={img.node.originalSrc}
              key={index}
              onClick={() => {
                setImage(img.node.originalSrc);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <img className=" h-2/4 w-full" src={images[0].node.originalSrc} />
    </div>
  );
}
