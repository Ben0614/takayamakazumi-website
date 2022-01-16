import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

interface SliderIndex {
  sliderIndex: {
    index: number;
  };
}

const bigPic = [
  "/images/bigGallery/pic-01.jpg",
  "/images/bigGallery/pic-02.jpg",
  "/images/bigGallery/pic-03.jpg",
  "/images/bigGallery/pic-04.jpg",
  "/images/bigGallery/pic-05.jpg",
  "/images/bigGallery/pic-06.jpg",
  "/images/bigGallery/pic-07.jpg",
  "/images/bigGallery/pic-08.jpg",
];

function BigSlider() {
  // 控制按鈕禁用
  const [buttonState, setButtonState] = useState(false);

  // 禁止按鈕禁用函式
  // 圖片移動速度為500 這邊禁用時間設定為600
  // 如果不設定禁用 在連續快速按按鈕時會出bug
  const ButtonHandle = () => {
    setButtonState(true);
    setTimeout(() => {
      setButtonState(false);
    }, 600);
  };

  // 獲取被點擊的圖片的index
  const getPicIndex = useSelector((state: SliderIndex) => {
    return state.sliderIndex.index;
  });

  // console.log(getPicIndex);

  const dispatch = useDispatch();

  // 點擊上下紐 傳送新的index到redex
  const prevIndex = useCallback(() => {
    dispatch({
      type: "pic_index",
      payload: {
        index: getPicIndex - 1,
      },
    });
  }, [dispatch, getPicIndex]);
  const nextIndex = useCallback(() => {
    dispatch({
      type: "pic_index",
      payload: {
        index: getPicIndex + 1,
      },
    });
  }, [dispatch, getPicIndex]);

  // ref slider
  const slider = useRef<Slider>(null);

  // 上按鈕總控制
  const previous = () => {
    slider.current!.slickPrev();
    prevIndex();
    ButtonHandle();
  };
  // 下按鈕總控制
  const next = () => {
    slider.current!.slickNext();
    nextIndex();
    ButtonHandle();
  };

  // 一掛載就根據index移動到指定的圖片
  useEffect(() => {
    slider.current!.slickGoTo(getPicIndex);
  }, [getPicIndex]);

  const settings = {
    arrows: false,
    // 滑鼠在圖片上是否仍然自動播放
    pauseOnHover: false,
    // 淡入淡出
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    // 是否可以拖動變更圖片
    // false無法拖動變更 也無法拖曳圖片
    swipe: false,
  };
  return (
    <div className="relative big-slider w-[calc(100%-30px)] lg:w-1/4">
      <Slider ref={slider} {...settings}>
        {bigPic.map((v, i) => {
          return (
            <div
              key={i}
              className={
                "relative w-full pb-[130%] mx-auto mb-5 lg:w-1/4 lg:pb-[130%]"
              }
            >
              {/* draggable="false" 禁止拖曳圖片 */}
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
      {/* 自訂上下按紐 */}
      {getPicIndex <= 0 ? (
        ""
      ) : (
        <button
          disabled={buttonState}
          className="absolute top-1/2 left-[5%]  -translate-y-1/2 lg:-left-1/3"
          onClick={previous}
        >
          <MdArrowBackIosNew className="transition text-3xl text-[#c9dce4] hover:text-[#97bbc9]" />
        </button>
      )}
      {getPicIndex >= bigPic.length - 1 ? (
        ""
      ) : (
        <button
          disabled={buttonState}
          className="absolute top-1/2 -translate-y-1/2 right-[5%] lg:-right-1/3"
          onClick={next}
        >
          <MdArrowForwardIos className="transition text-3xl text-[#c9dce4] hover:text-[#97bbc9]" />
        </button>
      )}
    </div>
  );
}

export default BigSlider;
