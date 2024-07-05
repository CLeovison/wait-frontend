import React, { useState } from "react";

import { MoveLeft, MoveRight } from "lucide-react";

export default function Slider(imageUrl) {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) {
        return imageUrl.length - 1;
      }
      return index - 1;
    });
    console.log(imageUrl, "Previous")
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imageUrl.length - 1) {
        return 0;
      }
      return index + 1;
    });
    console.log(imageUrl,"Next")
  };
  return (
    <>
      <img src={imageUrl[imageIndex]} alt="" />
      <button onClick={showPrevImage}>
        <MoveLeft />
      </button>
      <button onClick={showNextImage}>
        <MoveRight />
      </button>
    </>
  );
}
