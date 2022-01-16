import React from "react";
interface Props {
  v: {
    date: string;
    category: string;
    content: string;
  };
}

function RowItem(props: Props) {
  return (
    <div className="mb-3 pb-3 border-b transition duration-300 hover:opacity-70">
      <div className="flex items-center mb-1">
        <p className="text-area-date lg:text-[15px]">{props.v.date}</p>
        <p className="relative ml-2 py-1 px-3 bg-categoryTag">
          <p className="text-area-category text-white ">{props.v.category}</p>
          <div className="absolute h-full w-full top-[2px] left-[2px] border border-categoryTag -z-10"></div>
        </p>
      </div>
      <p className="text-area-content lg:text-[14px]">{props.v.content}</p>
    </div>
  );
}

export default RowItem;
