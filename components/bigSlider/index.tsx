import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";

const bigPic = [
  "http://localhost:3000/images/bigGallery/pic-01.jpg",
  "http://localhost:3000/images/bigGallery/pic-02.jpg",
  "http://localhost:3000/images/bigGallery/pic-03.jpg",
  "http://localhost:3000/images/bigGallery/pic-04.jpg",
  "http://localhost:3000/images/bigGallery/pic-05.jpg",
  "http://localhost:3000/images/bigGallery/pic-06.jpg",
  "http://localhost:3000/images/bigGallery/pic-07.jpg",
  "http://localhost:3000/images/bigGallery/pic-08.jpg",
];

interface Props {
  showPic: number | null;
  setShowPic: Function;
}

function BigSlider(props: Props) {
  const slider = useRef<Slider>(null);

  useEffect(() => {
    slider.current!.slickGoTo(props.showPic!);
  }, [props.showPic]);

  const settings = {
    arrows: true,
    // 滑鼠在圖片上是否仍然自動播放
    pauseOnHover: false,
    // 淡入淡出
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider
      ref={slider}
      {...settings}
      className="big-slider w-[calc(100%-30px)] lg:w-1/4"
    >
      {bigPic.map((v, i) => {
        return (
          <div
            key={i}
            className={
              "relative w-full pb-[130%] mx-auto mb-5 lg:w-1/4 lg:pb-[130%] z-50"
            }
          >
            <Image
              src={v}
              alt=""
              layout="fill"
              objectFit="cover"
              sizes="80vw"
            />
          </div>
        );
      })}
    </Slider>
  );
}

export default BigSlider;
