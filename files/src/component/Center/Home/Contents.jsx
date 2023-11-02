import React from "react";
import TweetCard from "./TweetCard";

const Contents = (props) => {
  return (
    <div className="flex-col w-[800px] h-screen ml-72 border-r border-gray-300 max-lg:ml-16  max-lg:mr-5">
      <div className="h-[76px] w-[50rem] fixed bg-white flex items-center justify-between shadow-sm">
        <div className="px-4 text-xl font-semibold">Home</div>
      </div>
      <div className="mt-[76px]">
        <TweetCard />
      </div>
      <TweetCard />
    </div>
  );
};

export default Contents;
