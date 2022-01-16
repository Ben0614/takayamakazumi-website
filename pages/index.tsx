import type { NextPage } from "next";
import { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
// react-icons/bs bs要小寫 否則vercel build會失敗
import { BsTwitter } from "react-icons/bs";
import BottomSliderMobile from "../components/bottomSliderMobile";
import BigSlider from "../components/bigSlider";
import ViewAll from "../components/viewAll";
import MenuFixed from "../components/menuFixed";
import RowItem from "../components/rowItem";
import Header from "../components/header";
import Footer from "../components/footer";

// 圖片path
// 不要加http://localhost:3000 否則在vercel會無法顯示
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

// 圖片index
interface SliderIndex {
  sliderIndex: {
    index: number;
  };
}

const Home: NextPage = () => {
  // ref獲取News
  const News = useRef<HTMLDivElement>(null);
  // 內容
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

  const dispatch = useDispatch();
  // 傳送gallery pic 的 index
  const picIndex = useCallback(
    (i) => {
      dispatch({
        type: "pic_index",
        payload: { index: i },
      });
    },
    [dispatch]
  );
  // 獲取gallery pic 的 index
  const getPicIndex = useSelector((state: SliderIndex) => {
    return state.sliderIndex.index;
  });

  // 傳送News的offsetTop
  const storageNewsRef = useCallback(() => {
    dispatch({
      type: "news_ref",
      payload: { News: News.current!.offsetTop },
    });
  }, [dispatch]);

  // console.log("getMenuState", getMenuState.isShow);

  // 一掛載先傳送圖片index為null 防止大圖顯示
  useEffect(() => {
    picIndex(null);
  }, [picIndex]);

  // 一掛載就傳送Ref距離頂部的高度
  useEffect(() => {
    storageNewsRef();
  }, [storageNewsRef]);

  return (
    <div className="overflow-hidden">
      {/* menu fixed*/}
      <MenuFixed />
      {/* header */}
      <Header />
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
                <Link href="/" key={i}>
                  <a>
                    <RowItem v={v} />
                  </a>
                </Link>
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
                  return <RowItem key={i} v={v} />;
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
                      sizes="10vw"
                    />
                  </div>
                );
              })}
            </div>
            {/* mobile */}
            <BottomSliderMobile />
          </div>
          {/* bigPicList */}
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
              {/* 
                  target="_blank"
                  rel="noreferrer" 
                  開啟新分頁
              */}
              <a
                href={`https://twitter.com/share?text=GALLERY%EF%BD%9C%E9%AB%98%E5%B1%B1%E4%B8%80%E5%AE%9F%E3%82%AA%E3%83%95%E3%82%A3%E3%82%B7%E3%83%A3%E3%83%AB%E3%82%B5%E3%82%A4%E3%83%88&hashtags=%E9%AB%98%E5%B1%B1%E4%B8%80%E5%AE%9F&url=https://kazumitakayama.com/s/m11/gallery?image=${
                  getPicIndex + 1
                }`}
                target="_blank"
                rel="noreferrer"
                className="transition text-sky-500 text-[30px] hover:opacity-70"
              >
                <BsTwitter />
              </a>
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
                  src="/images/profile_pic.jpg"
                  layout="fill"
                  objectFit="cover"
                  sizes="22vw"
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
        <Footer />
      </div>
    </div>
  );
};

export default Home;
