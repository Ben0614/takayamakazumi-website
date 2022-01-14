import React from "react";
import Image from "next/image";
import Slider from "react-slick";

interface ShowPic {
  setShowPic: Function;
}

function BottomSliderMobile(props: ShowPic) {
  const pic = [
    "http://localhost:3000/images/smallGallery/pic-01.jpg",
    "http://localhost:3000/images/smallGallery/pic-02.jpg",
    "http://localhost:3000/images/smallGallery/pic-03.jpg",
    "http://localhost:3000/images/smallGallery/pic-04.jpg",
    "http://localhost:3000/images/smallGallery/pic-05.jpg",
    "http://localhost:3000/images/smallGallery/pic-06.jpg",
    "http://localhost:3000/images/smallGallery/pic-07.jpg",
    "http://localhost:3000/images/smallGallery/pic-08.jpg",
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
            <div
              className="px-2"
              key={i}
              onClick={() => {
                props.setShowPic(i);
              }}
            >
              <div className="relative rounded-full overflow-hidden w-full pb-[100%] cursor-pointer">
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
