import React, { useCallback } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useDispatch } from "react-redux";

function BottomSliderMobile() {
  const dispatch = useDispatch();
  // 發送照片的index
  const picIndex = useCallback(
    (i) => {
      dispatch({
        type: "pic_index",
        payload: { index: i },
      });
    },
    [dispatch]
  );

  const pic = [
    "/images/smallGallery/pic-01.jpg",
    "/images/smallGallery/pic-02.jpg",
    "/images/smallGallery/pic-03.jpg",
    "/images/smallGallery/pic-04.jpg",
    "/images/smallGallery/pic-05.jpg",
    "/images/smallGallery/pic-06.jpg",
    "/images/smallGallery/pic-07.jpg",
    "/images/smallGallery/pic-08.jpg",
  ];
  const settings = {
    centerMode: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bottom-slider-mobile -mx-[15px] lg:hidden">
      <Slider {...settings}>
        {pic.map((v, i) => {
          return (
            // px-2 讓照片之間有間隔
            <div
              className="px-2"
              key={i}
              onClick={() => {
                picIndex(i);
              }}
            >
              <div className="relative rounded-full even:animate-shape2 odd:animate-shape3 overflow-hidden w-full pb-[100%] cursor-pointer">
                <Image
                  src={v}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  sizes="70vw"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default BottomSliderMobile;
