import React, { useState } from "react";
import Login from "./Login";
import PriceCard from "./PriceCard";
import Post from "./Post";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showSub, setShowSub] = React.useState(false);
  const [post, setPost] = useState(false);
  return (
    <div className="fixed z-20">
      {/* BIG SCREEN */}
      <div className="flex flex-col items-center w-72 h-screen overflow-hidden text-gray-700 rounded border-r border-gray z-20 max-lg:hidden ">
        <div className="flex pl-8 items-center w-full mt-3 h-16 border-b border-gray-300">
          {/* LOGO */}
          <span className="text-sm font-bold">
            <img
              src="\src\components\Left\logo.png"
              className="h-11 mr-3 object-fit mb-3"
              alt="TweetBits"
            />
          </span>
        </div>
        <div className="w-full px-2 pl-8">
          <ul className="flex flex-col items-center w-full mt-3">
            <li className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-100">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive ? "text-yellow-500" : "text-gray-700"
                  } duration-200 flex gap-2 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-600 lg:p-0`
                }
              >
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <p>Home</p>
              </NavLink>
            </li>
            <li className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-100">
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive ? "text-yellow-500" : "text-gray-700"
                  } duration-200 flex gap-2 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-600 lg:p-0`
                }
              >
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <p>Search</p>
              </NavLink>
            </li>
            <li
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setShowSub(true);
              }}
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
              </svg>
              <span className="ml-2 text-lg font-medium">Premium</span>
            </li>
            {showSub ? <PriceCard exit={setShowSub} var={showSub} /> : null}
          </ul>
          <ul className="flex flex-col items-center w-full mt-2 ">
            <li className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-100">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive ? "text-yellow-500" : "text-gray-700"
                  } duration-200 flex gap-2 border-b border-gray-100 hover:bg-gray-50 
              lg:hover:bg-transparent lg:border-0 hover:text-yellow-600 lg:p-0`
                }
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <p>Profile</p>
              </NavLink>
            </li>
            <div className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-2 text-lg font-medium">More</span>
              {/* <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span> */}
            </div>
            <div className="mt-32 w-full z-0">
              <button
                type="button"
                className="text-white flex justify-center items-center w-[80%] gap-3 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-bold rounded-3xl text-md px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
                onClick={() => setPost(true)}
              >
                Post
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-7"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
              </button>
              {post ? <Post close={setPost} name={post} /> : null}
            </div>
          </ul>
        </div>
        <button
          className="flex items-center pl-12 w-full h-16 mt-auto hover:bg-gray-200"
          onClick={() => setShowModal(true)}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <span className="ml-2 text-lg font-medium">Profile</span>
        </button>
        {showModal ? <Login close={setShowModal} variable={showModal} /> : null}
      </div>

      {/* SMALL SCREEN */}
      <div className="flex flex-col items-center w-16 h-screen border-r border-gray overflow-hidden text-gray-700 rounded min-[1024px]:hidden ">
        <div className="flex items-center justify-center mt-3 h-16 ml-2 border-b border-gray-300">
          <img
            src="\src\component\Left\logo1.png"
            className="h-full w-full mr-3 object-fit mb-3"
            alt="TweetBits"
          />
        </div>
        <div className="flex flex-col items-center mt-3 ">
          {/* Home */}
          <div className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive ? "text-yellow-500" : "text-gray-700"
                } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-600 lg:p-0`
              }
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </NavLink>
          </div>
          {/* Search */}
          <div className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive ? "text-yellow-500" : "text-gray-700"
                } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-600 lg:p-0`
              }
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </NavLink>
          </div>
          {/* Premium */}
          <div
            className="flex items-center justify-center w-12 h-12 mt-2 rounded"
            onClick={() => {
              setShowSub(true);
            }}
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
              <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
            </svg>
          </div>
          {showSub ? <PriceCard exit={setShowSub} var={showSub} /> : null}
        </div>
        {/*  */}
        <div className="flex flex-col items-center mt-2 ">
          <div className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive ? "text-yellow-500" : "text-gray-700"
                } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-600 lg:p-0`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </NavLink>
          </div>
          <div className="relative flex items-center justify-center w-12 h-12 mt-2 hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          {/* Post */}
          <div className="mt-32 ml-4">
            <button
              type="button"
              className="text-white flex justify-center items-center w-[70%] bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-3xl text-md px-3 py-2 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
              onClick={() => setPost(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-8"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg>
            </button>
          </div>
        </div>
        <button
          className="flex items-center justify-center w-16 h-16 mt-auto bg-gray-200 hover:bg-gray-300"
          onClick={() => setShowModal(true)}
        >
          <svg
            className="w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        {showModal ? <Login close={setShowModal} variable={showModal} /> : null}
        {post ? <Post close={setPost} name={post} /> : null}
      </div>
    </div>
  );
};

export default Sidebar;
