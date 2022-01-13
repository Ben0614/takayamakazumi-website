import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiInstagram } from "react-icons/Fi";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-[1120px] max-w-full mx-auto">
      {/* header */}
      <header className="p-header flex justify-between items-center">
        <div>
          <h1>高山一実</h1>
          <p>OFFICIAL SITE</p>
        </div>
        <Link href="/">
          <a className="text-[25.5px] text-gray-500">
            <FiInstagram />
          </a>
        </Link>
      </header>
      {/* main */}
      <div className="container">
        {/* news */}
        {/* schedule */}
        {/* gallery */}
        {/* profile */}
      </div>

      {/* footer */}
    </div>
  );
};

export default Home;
