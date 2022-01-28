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

export { pic, news, schedule, profile };
