import React from "react";
import Link from "next/link";
// react-icons/fi fi要小寫 否則vercel build會失敗
import { FiInstagram } from "react-icons/fi";

const footer = ["HOME", "NEWS", "SCHEDULE", "PROFILE", "GALLERY", "CONTACT"];

function Footer() {
  return (
    <footer>
      <div className="flex flex-wrap justify-center text-center mb-10">
        {footer.map((v, i) => {
          return (
            <div
              key={i}
              className="w-fit border-r border-black last:border-r-0 four:border-r-0 px-3 mb-3 lg:four:border-r lg:px-5"
            >
              <Link href="/">
                <a className="transition duration-300 hover:opacity-70 lg:block">
                  {v}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="mb-10">
        {/* 
        target="_blank"
        rel="noreferrer" 
        開啟新分頁
          */}
        <a
          href="https://www.instagram.com/takayama.kazumi.official/"
          className="block w-[30px] text-[30px] mx-auto transition duration-300 hover:opacity-70"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
      </div>
      <h3 className="text-center mb-10 text-xs">&copy;乃木坂46LLC</h3>
    </footer>
  );
}

export default Footer;
