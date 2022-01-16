import React, { useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
// react-icons/fi fi要小寫 否則vercel build會失敗
import { FiInstagram } from "react-icons/fi";
import TopSliderMobile from "../topSliderMobile";

interface Menu {
  menu: {
    isShow: boolean;
  };
}

function Header() {
  const menuList = ["NEWS", "SCHEDULE", "PROFILE", "GALLERY", "HOME"];
  // ref獲取Menu
  const MenuIcon = useRef<HTMLDivElement>(null);
  const MenuIconMobile = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  // 傳送true or false 判斷是否要讓Menu list顯示
  const MenuIsShow = useCallback(
    (state) => {
      dispatch({
        type: "is_show",
        payload: { isShow: state },
      });
    },
    [dispatch]
  );

  // 獲取Menu狀態
  const getMenuState = useSelector((state: Menu) => {
    return state.menu;
  });

  // 如果被點擊，就移除class animate-menu，防止上下跳動
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

  return (
    <header className="relative pb-28 w-[1120px] max-w-full mx-auto p-header lg:flex lg:justify-end lg:px-[100px] pt-[50px]">
      <div className="flex justify-between mb-5 lg:w-1/2 lg:flex-col lg:justify-center lg:items-center">
        {/* 標題 */}
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
              src="/images/menu_illust2.png"
              alt=""
              layout="fill"
              sizes="30vw"
            />
          </div>
          <ul
            className={
              getMenuState.isShow
                ? `absolute -top-0 left-[120%] transition duration-500 scale-100`
                : `absolute top-1/4 left-1/2 -z-10 opacity-0 transition duration-500 scale-50`
            }
          >
            {menuList.map((v, i) => {
              return (
                // 最前方定義相同的css 後方不同nth分別定義
                <li
                  key={i}
                  className={`absolute origin-left bg-white px-2 tracking-[2px] 
                  one:-top-3 one:-left-6 one:rotate-[-40deg] two:top-[1.5rem] two:left-[-0.5rem] two:rotate-[-25deg] 
                  three:top-16 three:left-[0.2rem] three:rotate-[-10deg] 
                  four:top-[6.5rem] four:left-[0.2rem] four:rotate-[10deg] 
                  five:top-[9rem] five:left-[-0.5rem] five:rotate-[25deg]`}
                >
                  {v}
                </li>
              );
            })}
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
      {/* 自定義動畫 */}
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
            src="/images/menu_illust2.png"
            alt=""
            layout="fill"
            sizes="30vw"
          />
        </div>
        <ul
          className={
            getMenuState.isShow
              ? `absolute -top-[25%] left-[70%] transition duration-500 rotate-[-28deg] scale-100`
              : `absolute top-1/4 left-1/2 -z-10 opacity-0 transition duration-500 scale-50`
          }
        >
          {menuList.map((v, i) => {
            return (
              // 最前方定義相同的css 後方不同nth分別定義
              <li
                key={i}
                className={`absolute origin-left bg-white px-2 tracking-[2px] 
                  one:-top-3 one:-left-6 one:rotate-[-40deg] two:top-[1.5rem] two:left-[-0.5rem] two:rotate-[-25deg] 
                  three:top-16 three:left-[0.2rem] three:rotate-[-10deg] 
                  four:top-[6.5rem] four:left-[0.2rem] four:rotate-[10deg] 
                  five:top-[9rem] five:left-[-0.5rem] five:rotate-[25deg]`}
              >
                {v}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
