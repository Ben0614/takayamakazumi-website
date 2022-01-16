import React from "react";

interface Props {
  className?: string;
}

function ViewAll(props: Props) {
  return (
    <>
    {/* 根據傳來的class 來決定手機顯示或桌機顯示 */}
      <div
        className={`${props.className} text-center text-area-view mb-6 cursor-pointer transition duration-300 hover:opacity-70 lg:block`}
      >
        <span className="border-b border-black px-5 pb-2">VIEW ALL</span>
      </div>
      
    </>
  );
}

export default ViewAll;
