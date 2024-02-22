/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import img1 from "/public/images/pic1.jpg";
import img2 from "/public/images/pic2.jpg";
import img3 from "/public/images/pic3.jpg";
import img4 from "/public/images/pic4.jpg";
import img5 from "/public/images/pic5.jpg";
import img6 from "/public/images/pic6.jpg";
import img7 from "/public/images/pic7.jpg";

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const ImagesSlider = () => {
  //react hook
  const [count, setCount] = useState(0);
   //array of images
  const imageList = [img2, img3, img1, img4, img5, img6, img7];

  //count update functions
  const handleClickPlus = () => {
    setCount(count == imageList.length - 1 ? 0 : count + 1);
  };
  
  const handleClickminus = () => {
    setCount(count == 0 ? imageList.length - 1 : count - 1);
  };
  
  //automatically slider changes
  useEffect(() => {
    let timeClear = setTimeout(() => {
      handleClickPlus();
    }, 2000);
    return () => clearTimeout(timeClear);
  }, [count]);

  return (
    <>
      {imageList.map((img, i) => {
        return (
          <div className={`slider ${count == i ? "block" : "hidden"}`} key={i}>
            <img src={img} alt="" />
            <div className="btn">
              <div className="icons" onClick={handleClickminus}>
                <FaArrowLeftLong />
              </div>

              <div className="icons" onClick={handleClickPlus}>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ImagesSlider;
