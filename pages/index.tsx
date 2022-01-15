import type { NextPage } from "next";
import { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { FiInstagram } from "react-icons/Fi";
import { BsTwitter } from "react-icons/Bs";
import TopSliderMobile from "../components/topSliderMobile";
import BottomSliderMobile from "../components/bottomSliderMobile";
import BigSlider from "../components/bigSlider";
import ViewAll from "../components/viewAll";

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

interface SliderIndex {
  sliderIndex: {
    index: number;
  };
}
interface menu {
  menu: {
    isShow: boolean;
  };
}

const Home: NextPage = () => {
  const MenuIcon = useRef<HTMLDivElement>(null);
  const MenuIconMobile = useRef<HTMLDivElement>(null);
  const MenuIconFixed = useRef<HTMLDivElement>(null);
  const News = useRef<HTMLDivElement>(null);
  const news = [
    {
      date: "2022.01.13",
      category: "EVENT",
      content: "弊社所属・高山一実 新型コロナウイルス感染に関するご報告",
    },
    {
      date: "2021.12.01",
      category: "OTHER",
      content: "高山一実 公式サイトオープン！",
    },
  ];
  const schedule = [
    {
      date: "",
      category: "",
      content: "",
    },
  ];
  const profile = [
    {
      name: "高山 一実",
      tone: "たかやま かずみ",
      content: [
        "生年月日：1994年2月8日",
        "血液型：A型",
        "星座：みずがめ座",
        "身長：162cm",
      ],
    },
  ];
  const footer = ["HOME", "NEWS", "SCHEDULE", "PROFILE", "GALLERY", "CONTACT"];

  const dispatch = useDispatch();

  const picIndex = useCallback(
    (i) => {
      dispatch({
        type: "pic_index",
        payload: { index: i },
      });
    },
    [dispatch]
  );

  const getPicIndex = useSelector((state: SliderIndex) => {
    return state.sliderIndex.index;
  });

  const MenuIsShow = useCallback(
    (state) => {
      dispatch({
        type: "is_show",
        payload: { isShow: state },
      });
    },
    [dispatch]
  );

  const getMenuState = useSelector((state: menu) => {
    return state.menu;
  });

  console.log("getMenuState", getMenuState.isShow);

  // console.log("getPicIndex", getPicIndex);

  if (MenuIcon.current) {
    MenuIcon.current.addEventListener("click", function () {
      if (getMenuState.isShow) {
        MenuIcon.current!.classList.add("animate-menu");
      } else {
        MenuIcon.current!.classList.remove("animate-menu");
      }
    });
  }
  if (MenuIconMobile.current) {
    MenuIconMobile.current.addEventListener("click", function () {
      if (getMenuState.isShow) {
        MenuIconMobile.current!.classList.add("animate-menu");
      } else {
        MenuIconMobile.current!.classList.remove("animate-menu");
      }
    });
  }
  if (MenuIconFixed.current) {
    MenuIconFixed.current.addEventListener("click", function () {
      if (getMenuState.isShow) {
        MenuIconFixed.current!.classList.add("animate-menu");
      } else {
        MenuIconFixed.current!.classList.remove("animate-menu");
      }
    });
  }
  // 監聽滾動
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (MenuIconFixed.current) {
        if (document.documentElement.scrollTop > News.current!.offsetTop) {
          MenuIconFixed.current!.style.top = "20px";
          MenuIconFixed.current!.style.left = "8%";
          MenuIconFixed.current!.style.transition = "1s";
          MenuIconFixed.current!.classList.remove("-top-1/2");
        } else {
          MenuIconFixed.current!.style.top = "-50%";
          MenuIconFixed.current!.style.left = "2%";
          MenuIconFixed.current!.style.transition = "1s";
        }
      }
    });
  }, []);

  // 一掛載先傳送null 防止大圖顯示
  useEffect(() => {
    picIndex(null);
  }, [picIndex]);

  return (
    <div className="overflow-hidden">
      {/* menu fixed*/}
      <div
        ref={MenuIconFixed}
        className="fixed transition duration-1000 -top-1/2 left-[2%] w-1/4 mb-10 animate-menu cursor-pointer z-50 lg:w-[8%]"
      >
        <div
          className={
            getMenuState.isShow
              ? `transition duration-500 relative w-full pb-[100%] rotate-[20deg]`
              : `transition duration-500 relative w-full pb-[100%]`
          }
          onClick={() => {
            getMenuState.isShow ? MenuIsShow(false) : MenuIsShow(true);
          }}
        >
          <Image
            src="http://localhost:3000/images/menu_illust2.png"
            alt=""
            layout="fill"
            sizes="40vw"
          />
        </div>
        <ul
          className={
            getMenuState.isShow
              ? `absolute top-[50%] left-[140%] transition duration-500 rotate-[40deg] scale-[85%] lg:scale-[120%] lg:rotate-[30deg] lg:top-[30%]`
              : `absolute top-1/4 left-1/2 -z-10 opacity-0 transition duration-500 scale-50`
          }
        >
          <li className="absolute -top-3 -left-6 origin-left rotate-[-40deg] bg-white px-2 tracking-[2px]">
            NEWS
          </li>
          <li className="absolute top-[1.5rem] left-[-0.5rem] origin-left rotate-[-25deg] bg-white px-2 tracking-[2px]">
            SCHEDULE
          </li>
          <li className="absolute top-16 left-[0.2rem] origin-left rotate-[-10deg] bg-white px-2 tracking-[2px]">
            PROFILE
          </li>
          <li className="absolute top-[6.5rem] left-[0.2rem] origin-left rotate-[10deg] bg-white px-2 tracking-[2px]">
            GALLERY
          </li>
          <li className="absolute top-[9rem] left-[-0.5rem] origin-left rotate-[25deg] bg-white px-2 tracking-[2px]">
            HOME
          </li>
        </ul>
      </div>
      {/* header */}
      <header className="relative pb-28 w-[1120px] max-w-full mx-auto p-header lg:flex lg:justify-end lg:px-[100px] pt-[50px]">
        <div className="flex justify-between mb-5 lg:w-1/2 lg:flex-col lg:justify-center lg:items-center">
          <div>
            <h1 className="text-[25px] tracking-[10.2px] font-medium lg:text-[42px]">
              高山一実
            </h1>
            <p className="text-xs tracking-[4.8px] font-medium lg:text-sm lg:text-center lg:mb-3">
              OFFICIAL SITE
            </p>
          </div>
          {/* menu computer */}
          <div
            ref={MenuIcon}
            className="hidden relative w-1/2 mb-10 animate-menu cursor-pointer z-50 lg:block"
          >
            <div
              className={
                getMenuState.isShow
                  ? `transition duration-500 relative w-full pb-[100%] rotate-[20deg]`
                  : `transition duration-500 relative w-full pb-[100%]`
              }
              onClick={() => {
                getMenuState.isShow ? MenuIsShow(false) : MenuIsShow(true);
              }}
            >
              <Image
                src="http://localhost:3000/images/menu_illust2.png"
                alt=""
                layout="fill"
                sizes="40vw"
              />
            </div>
            <ul
              className={
                getMenuState.isShow
                  ? `absolute -top-0 left-[120%] transition duration-500 scale-100`
                  : `absolute top-1/4 left-1/2 -z-10 opacity-0 transition duration-500 scale-50`
              }
            >
              <li className="absolute -top-3 -left-6 origin-left rotate-[-40deg] bg-white px-2 tracking-[2px]">
                NEWS
              </li>
              <li className="absolute top-[1.5rem] left-[-0.5rem] origin-left rotate-[-25deg] bg-white px-2 tracking-[2px]">
                SCHEDULE
              </li>
              <li className="absolute top-16 left-[0.2rem] origin-left rotate-[-10deg] bg-white px-2 tracking-[2px]">
                PROFILE
              </li>
              <li className="absolute top-[6.5rem] left-[0.2rem] origin-left rotate-[10deg] bg-white px-2 tracking-[2px]">
                GALLERY
              </li>
              <li className="absolute top-[9rem] left-[-0.5rem] origin-left rotate-[25deg] bg-white px-2 tracking-[2px]">
                HOME
              </li>
            </ul>
          </div>
          {/* ig icon */}
          <Link href="/">
            <a className="text-[30px] px-[5px]">
              <FiInstagram />
            </a>
          </Link>
        </div>
        {/* 背景雲 */}
        <div className="absolute top-20 -left-1/2 w-[140%] h-[70%] bg-[#e6f4fa] -z-10  opacity-70 animate-shape lg:w-[80%] lg:h-[75%] lg:left-[2%] lg:top-[9%]" />
        <div className="absolute top-20 -left-1/2 w-[140%] h-[70%] bg-[#e6f4fa] -z-10  opacity-70 animate-shape lg:w-[50%] lg:h-[60%] lg:left-[48%] lg:top-[20%]" />
        {/* top-slick */}
        <TopSliderMobile />
        {/* menu mobile*/}
        <div
          ref={MenuIconMobile}
          className="absolute bottom-0 left-10 w-2/5 mb-10 animate-menu cursor-pointer z-50 lg:hidden"
        >
          <div
            className={
              getMenuState.isShow
                ? `transition duration-500 relative w-full pb-[100%] rotate-[20deg]`
                : `transition duration-500 relative w-full pb-[100%]`
            }
            onClick={() => {
              getMenuState.isShow ? MenuIsShow(false) : MenuIsShow(true);
            }}
          >
            <Image
              src="http://localhost:3000/images/menu_illust2.png"
              alt=""
              layout="fill"
              sizes="40vw"
            />
          </div>
          <ul
            className={
              getMenuState.isShow
                ? `absolute -top-[25%] left-[70%] transition duration-500 rotate-[-28deg] scale-100`
                : `absolute top-1/4 left-1/2 -z-10 opacity-0 transition duration-500 scale-50`
            }
          >
            <li className="absolute -top-3 -left-6 origin-left rotate-[-40deg] bg-white px-2 tracking-[2px]">
              NEWS
            </li>
            <li className="absolute top-[1.5rem] left-[-0.5rem] origin-left rotate-[-25deg] bg-white px-2 tracking-[2px]">
              SCHEDULE
            </li>
            <li className="absolute top-16 left-[0.2rem] origin-left rotate-[-10deg] bg-white px-2 tracking-[2px]">
              PROFILE
            </li>
            <li className="absolute top-[6.5rem] left-[0.2rem] origin-left rotate-[10deg] bg-white px-2 tracking-[2px]">
              GALLERY
            </li>
            <li className="absolute top-[9rem] left-[-0.5rem] origin-left rotate-[25deg] bg-white px-2 tracking-[2px]">
              HOME
            </li>
          </ul>
        </div>
      </header>

      {/* main */}
      <div className="container">
        {/* news */}
        <div ref={News} className="mb-20">
          <div className="flex justify-between">
            <h3 className="text-area-title font-medium mb-5 lg:text-[39px]">
              News
            </h3>
            {/* view computer */}
            <ViewAll className="hidden" />
          </div>
          <div className="mb-10">
            {news.map((v, i) => {
              return (
                <div className="mb-3 pb-3 border-b" key={i}>
                  <div className="flex items-center mb-1">
                    <p className="text-area-date lg:text-[15px]">{v.date}</p>
                    <p className="relative ml-2 py-1 px-3 bg-categoryTag">
                      <p className="text-area-category text-white ">
                        {v.category}
                      </p>
                      <div className="absolute h-full w-full top-[2px] left-[2px] border border-categoryTag -z-10"></div>
                    </p>
                  </div>
                  <p className="text-area-content lg:text-[14px]">
                    {v.content}
                  </p>
                </div>
              );
            })}
          </div>
          {/* view mobile */}
          <ViewAll className="lg:hidden" />
        </div>
        {/* schedule */}
        <div className="relative pb-20">
          <div className="flex justify-between">
            <h3 className="text-area-title font-medium mb-5 lg:text-[39px]">
              SCHEDULE
            </h3>
            {/* view computer */}
            <ViewAll className="hidden" />
          </div>
          <div className="mb-10">
            {schedule[0].date === ""
              ? ""
              : schedule.map((v, i) => {
                  return (
                    <div className="mb-3 pb-3 border-b" key={i}>
                      <div className="flex items-center mb-1">
                        <p className="text-area-date lg:text-[15px]">
                          {v.date}
                        </p>
                        <p className="relative ml-2 py-1 px-3 bg-categoryTag">
                          <p className="text-area-category text-white ">
                            {v.category}
                          </p>
                          <div className="absolute h-full w-full top-[2px] left-[2px] border border-categoryTag -z-10"></div>
                        </p>
                      </div>
                      <p className="text-area-content lg:text-[14px]">
                        {v.content}
                      </p>
                    </div>
                  );
                })}
          </div>
          {/* 背景雲 */}
          <div className="absolute top-[15%] left-[65%] w-[200px] h-[200px] bg-[#e6f4fa] -z-10  opacity-70 animate-shape lg:w-[35%] lg:h-[30vh] lg:left-[75%] lg:top-[-60%]" />
          {/* view mobile */}
          <ViewAll className="lg:hidden" />
        </div>
        {/* gallery */}
        <div className="mb-20">
          <div className="flex justify-between">
            <h3 className="text-area-title font-medium mb-5 lg:text-[39px]">
              GALLERY
            </h3>
            {/* view computer */}
            <ViewAll className="hidden" />
          </div>
          <div className="mb-10">
            {/* pic  computer */}
            <div className="hidden lg:grid grid-cols-4 gap-5 px-20">
              {pic.map((v, i) => {
                return (
                  <div
                    key={i}
                    className="relative w-full pb-[100%] overflow-hidden rounded-full even:animate-shape2 odd:animate-shape3 cursor-pointer"
                    onClick={() => {
                      picIndex(i);
                    }}
                  >
                    <Image
                      src={v}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                      sizes="15vw"
                    />
                  </div>
                );
              })}
            </div>
            {/* mobile */}
            <BottomSliderMobile />
          </div>

          <div>
            <div
              className={
                getPicIndex !== null
                  ? `transition duration-500 flex flex-col justify-center items-center fixed z-50 top-0 left-0 w-screen h-screen bg-white`
                  : `transition duration-500 flex flex-col justify-center items-center fixed top-0 left-0 w-screen h-screen opacity-0 -z-20`
              }
            >
              <div
                className="absolute top-1 right-5 text-3xl text-gray-300 cursor-pointer lg:top-3 lg:right-10 lg:text-[60px]"
                onClick={() => {
                  picIndex(null);
                }}
              >
                x
              </div>
              <BigSlider />
              <div className="text-sky-500 text-[30px]">
                <BsTwitter />
              </div>
            </div>
          </div>
          {/* view mobile */}
          <ViewAll className="lg:hidden" />
        </div>
        {/* profile */}
        <div className="relative mb-20">
          <div className="flex justify-between">
            <h3 className="text-area-title font-medium mb-5 lg:text-[39px]">
              PROFILE
            </h3>
            {/* view computer */}
            <ViewAll className="hidden" />
          </div>
          {/* 背景雲 */}
          <div className="absolute top-[-5%] left-[-20%] w-[200px] h-[200px] bg-[#e6f4fa] -z-10  opacity-70 animate-shape lg:w-[300px] lg:h-[300px] lg:left-[-10%] lg:top-[-5%]" />
          <div className="mb-10 lg:flex lg:items-center lg:px-20">
            {/* 大頭照 */}
            <div className="relative mb-10 lg:w-1/2">
              <div className="relative w-3/4 pb-[100%] mx-auto rounded-[22%] overflow-hidden animate-prof_shape lg:w-full lg:pb-[130%]">
                <Image
                  src="http://localhost:3000/images/profile_pic.jpg"
                  layout="fill"
                  objectFit="cover"
                  sizes="50vw"
                  alt=""
                />
              </div>
              {/* 背景線 */}
              <div className="absolute w-3/4 h-full -top-[3px] left-[51%] -translate-x-1/2 border border-gray-300 rounded-[25%] -z-10 lg:w-full lg:pb-[130%]"></div>
            </div>
            {profile.map((v, i) => {
              return (
                <div key={i} className="text-center lg:text-left">
                  <h3 className="text-3xl mb-3 lg:mb-10 lg:pl-12 ">
                    {v.name}
                    <span className="hidden text-xs lg:text-sm lg:inline lg:pl-3">
                      {v.tone}
                    </span>
                  </h3>
                  <p className="text-xs mb-10 lg:text-sm lg:hidden">{v.tone}</p>
                  <div className="text-left text-xs grid grid-cols-2 gap-x-5 pl-12 lg:text-sm lg:grid-cols-1">
                    {v.content.map((v, i) => {
                      return (
                        <p key={i} className="mb-3">
                          {v}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          {/* view mobile */}
          <ViewAll className="lg:hidden" />
        </div>

        {/* footer */}
        <footer>
          <div className="flex flex-wrap justify-center text-center mb-10">
            {footer.map((v, i) => {
              return (
                <div
                  key={i}
                  className="w-fit border-r border-black last:border-r-0 four:border-r-0 px-3 mb-3 lg:four:border-r lg:px-5"
                >
                  <Link href="">
                    <a>{v}</a>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="mb-10">
            <Link href="/">
              <a className="block w-[30px] text-[30px] mx-auto">
                <FiInstagram />
              </a>
            </Link>
          </div>
          <h3 className="text-center mb-10 text-xs">&copy;乃木坂46LLC</h3>
        </footer>
      </div>
    </div>
  );
};

export default Home;
