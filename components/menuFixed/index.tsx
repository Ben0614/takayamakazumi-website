import React, { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

interface Menu {
  menu: {
    isShow: boolean;
  };
}
interface News {
  news: { News: number };
}

function MenuFixed() {
  const menuList = ["NEWS", "SCHEDULE", "PROFILE", "GALLERY", "HOME"];
  // ref獲取Menu
  const MenuIconFixed = useRef<HTMLDivElement>(null);

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

  // 獲取News距離頂部的高度
  const getNewsRef = useSelector((state: News) => {
    return state.news.News;
  });

  // console.log("getNewsRef", getNewsRef);

  // 如果被點擊，就移除class animate-menu，防止上下跳動
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
  // 滾動距離超過News距離頂部的高度 就讓Menu顯示
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (MenuIconFixed.current) {
        if (document.documentElement.scrollTop > getNewsRef) {
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
  }, [getNewsRef]);
  return (
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
          src="/images/menu_illust2.png"
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
        {menuList.map((v, i) => {
          return (
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
  );
}

export default MenuFixed;
