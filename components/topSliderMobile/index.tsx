import React from "react";
import Image from "next/image";
import Slider from "react-slick";

function TopSliderMobile(): any {
  const pic = [
    "/images/topSmallPic/pic-01.jpg",
    "/images/topSmallPic/pic-02.jpg",
    "/images/topSmallPic/pic-03.jpg",
  ];
  const picComputer = [
    "/images/topBigPic/pic-01.jpg",
    "/images/topBigPic/pic-02.jpg",
    "/images/topBigPic/pic-03.jpg",
  ];

  const settings = {
    arrows: false,
    // 是否可以拖動變更圖片 
    // false無法拖動變更 也無法拖曳圖片
    swipe: false,
    // 滑鼠在圖片上是否仍然自動播放
    pauseOnHover: false,
    // 淡入淡出
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="-mx-[15px] lg:hidden">
        <Slider {...settings}>
          {pic.map((v, i) => {
            return (
              <div key={i}>
                <div className="w-full pb-[130%]">
                  <Image src={v} alt="" layout="fill" objectFit="cover" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="relative hidden lg:block w-[60%]">
        <Slider {...settings}>
          {picComputer.map((v, i) => {
            return (
              <div key={i}>
                <div className="relative w-full pb-[130%]">
                  <Image
                    src={v}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    sizes="30vw"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default TopSliderMobile;
