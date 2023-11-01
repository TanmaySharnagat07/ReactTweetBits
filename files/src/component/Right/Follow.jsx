import React from "react";
import FollowID from "./FollowID";

const Follow = () => {
  return (
    <>
      <div className="mt-4 ml-4 mr-4 max-h-20">
        <div className="w-full max-w-md  bg-white border border-gray-200 rounded-lg shadow sm:py-4 sm:px-4 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-5">
            <h5 className="text-lg font-bold leading-none  text-gray-900 dark:text-white">
              Who to follow
            </h5>
            <a href="/" className=" text-sm text-yellow-400 hover:underline">
              View All
            </a>
          </div>
          <FollowID/>
          <FollowID/>
        </div>
      </div>
    </>
  );
};

export default Follow;
