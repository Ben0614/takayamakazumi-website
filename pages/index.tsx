import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiInstagram } from "react-icons/Fi";
import { BsTwitter } from "react-icons/Bs";
import TopSliderMobile from "../components/topSliderMobile";
import BottomSliderMobile from "../components/bottomSliderMobile";
import BigSlider from "../components/bigSlider";

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

const Home: NextPage = () => {
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

  const [showPic, setShowPic] = useState<number | null>(null);

  return (
    <div className="text-all">
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
          <div className="hidden w-1/2 lg:block mb-10">
            <div className="relative w-full pb-[100%]">
              <Image
                src="http://localhost:3000/images/menu_illust2.png"
                alt=""
                layout="fill"
                sizes="40vw"
              />
            </div>
          </div>
          {/* ig icon */}
          <Link href="/">
            <a className="text-[30px] px-[5px]">
              <FiInstagram />
            </a>
          </Link>
        </div>
        {/* top-slick */}
        <TopSliderMobile />
        {/* menu mobile*/}
        <div className="absolute bottom-14 left-10 w-2/5 lg:w-1/5 lg:hidden">
          <div className="relative w-full pb-[100%]">
            <Image
              src="http://localhost:3000/images/menu_illust2.png"
              alt=""
              layout="fill"
              sizes="40vw"
            />
          </div>
        </div>
      </header>

      {/* main */}
      <div className="container">
        {/* news */}
        <div className="mb-20">
          <div className="flex justify-between">
            <h3 className="text-area-title font-medium mb-5 lg:text-[39px]">
              News
            </h3>
            {/* view mobile */}
            <div className="hidden text-center text-area-view mb-6 lg:block">
              <span className="border-b border-black px-5 pb-2">VIEW ALL</span>
            </div>
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
          <div className="text-center text-area-view mb-6 lg:hidden">
            <span className="border-b border-black px-5 pb-2">VIEW ALL</span>
          </div>
        </div>
        {/* schedule */}
        <div className="mb-20">
          <div className="flex justify-between">
            <h3 className="text-area-title font-medium mb-5 lg:text-[39px]">
              SCHEDULE
            </h3>
            {/* view mobile */}
            <div className="hidden text-center text-area-view mb-6 lg:block">
              <span className="border-b border-black px-5 pb-2">VIEW ALL</span>
            </div>
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
          <div className="text-center text-area-view mb-6 lg:hidden">
            <span className="border-b border-black px-5 pb-2">VIEW ALL</span>
          </div>
        </div>
        {/* gallery */}
        <div className="mb-20">
          <div className="flex justify-between">
            <h3 className="text-area-title font-medium mb-5 lg:text-[39px]">
              GALLERY
            </h3>
            {/* view mobile */}
            <div className="hidden text-center text-area-view mb-6 lg:block">
              <span className="border-b border-black px-5 pb-2">VIEW ALL</span>
            </div>
          </div>
          <div className="mb-10">
            {/* pic  computer */}
            <div className="hidden lg:grid grid-cols-4 gap-5 px-20">
              {pic.map((v, i) => {
                return (
                  <div
                    key={i}
                    className="relative w-full pb-[100%] overflow-hidden rounded-full cursor-pointer"
                    onClick={() => {
                      setShowPic(i);
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
            <BottomSliderMobile setShowPic={setShowPic} />
          </div>

          <div>
            <div
              className={
                showPic !== null
                  ? `transition duration-500 flex flex-col justify-center items-center fixed z-40 top-0 left-0 w-screen h-screen bg-white`
                  : `transition duration-500 flex flex-col justify-center items-center fixed top-0 left-0 w-screen h-screen opacity-0 -z-20`
              }
            >
              <div
                className="absolute top-1 right-5 text-3xl text-gray-300 cursor-pointer lg:top-3 lg:right-10 lg:text-[60px]"
                onClick={() => {
                  setShowPic(null);
                }}
              >
                x
              </div>
              <BigSlider showPic={showPic} setShowPic={setShowPic} />
              <div className="text-sky-500 text-[30px]">
                <BsTwitter />
              </div>
            </div>
          </div>

          <div className="text-center text-area-view mb-6">
            <span className="border-b border-black px-5 pb-2 lg:hidden">
              VIEW ALL
            </span>
          </div>
        </div>
        {/* profile */}
        <div className="mb-20">
          <div className="flex justify-between">
            <h3 className="text-area-title font-medium mb-5 lg:text-[39px]">
              PROFILE
            </h3>
            {/* view mobile */}
            <div className="hidden text-center text-area-view mb-6 lg:block">
              <span className="border-b border-black px-5 pb-2">VIEW ALL</span>
            </div>
          </div>
          <div className="mb-10 lg:flex lg:items-center lg:px-20">
            {/* 大頭照 */}
            <div className="relative mb-10 lg:w-1/2">
              <div className="relative w-3/4 pb-[100%] mx-auto rounded-[22%] overflow-hidden lg:w-full lg:pb-[130%]">
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
          {/* view computer */}
          <div className="text-center text-area-view mb-6 lg:hidden">
            <span className="border-b border-black px-5 pb-2">VIEW ALL</span>
          </div>
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
