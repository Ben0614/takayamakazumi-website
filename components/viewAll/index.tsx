import React from "react";

interface Props {
  className?: string;
}

function ViewAll(props: Props) {
  return (
    <>
      <div
        className={`${props.className} text-center text-area-view mb-6 cursor-pointer hover:opacity-70 lg:block`}
      >
        <span className="border-b border-black px-5 pb-2">VIEW ALL</span>
      </div>
      
    </>
  );
}

export default ViewAll;
