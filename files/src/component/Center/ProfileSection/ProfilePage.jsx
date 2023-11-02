import React, { useState } from "react";
import Edit from "./Edit";
import TweetCard from "../Home/TweetCard";

const ProfilePage = () => {
  const [edit, setedit] = useState(false);

  return (
    <>
      <div className="flex-col w-[800px] h-screen ml-72 border-r border-gray-200 max-lg:ml-16  max-lg:mr-5 max-md:pr-5">
        <div className="h-14 flex fixed w-[50rem] bg-white">
          <div className="pt-6 pl-4 font-bold hover:font-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className=""
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </div>
          <div className="pt-1 pl-10 flex flex-col">
            <span className="text-xl font-semibold">Username</span>
            <span className="text-sm">{Math.ceil(Math.random() * 10)} Posts</span>
          </div>
        </div>
        <div className="h-60 bg-gradient-to-r from-yellow-500 to-pink-500"></div>
        <div className="h-[180px] ml-4">
          <img
            src="https://wallpapers.com/images/high/cool-profile-picture-gdhlf31a1n7pcctk.webp"
            alt="profile"
            className="object-cover rounded-full h-44 w-44 -mt-20 mb-2 border-4 border-white"
          />
          <div className="ml-[680px] mr-5 -mt-[88px] max-md:mr-5">
            <button
              className="hover:bg-gradient-to-t from-yellow-500 to-pink-500 hover:text-white hover:border-0 w-24 h-10 flex justify-center border border-slate-700 items-center font-semibold rounded-full"
              onClick={() => {
                setedit(true);
              }}
            >
              Edit profile
            </button>
            {edit ? <Edit passvar={edit} passfunc={setedit} /> : null}
          </div>
        </div>
        <div className="ml-6">
          <p className=" text-lg font-black">Username shvxb</p>
          <p className=" text-gray-500">@Username</p>
          <div className="mt-2 gap-2 flex text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-calendar3 mt-1"
              viewBox="0 0 16 16"
            >
              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <span>Joined March 2021</span>
          </div>
          <div className="flex mt-2 gap-2 cursor-pointer">
            <span className="hover:underline text-black">
              22k <span className="text-gray-500">Followers</span>
            </span>
            <span className="hover:underline text-black">
              100 <span className="text-gray-500">Following</span>
            </span>
          </div>
        </div>
        <div className="mt-4 flex h-12 border-b border-gray-200 max-sm:gap-5 cursor-pointer">
          <div className="flex justify-center items-center w-[20%] hover:bg-gray-300">
            <button className="">Posts</button>
          </div>
          <div className="flex justify-center items-center w-[20%] hover:bg-gray-300">
            <button>Replies</button>
          </div>
          <div className="flex justify-center items-center w-[25%] hover:bg-gray-300">
            <button>Highlights</button>
          </div>
          <div className="flex justify-center items-center w-[15%] hover:bg-gray-300">
            <button>Media</button>
          </div>
          <div className="flex justify-center items-center w-[20%] hover:bg-gray-300">
            <button className="pr-2">Likes</button>
          </div>
        </div>
        <TweetCard/>
      </div>
    </>
  );
};

export default ProfilePage;
