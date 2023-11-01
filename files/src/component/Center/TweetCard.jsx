import React from "react";

const TweetCard = () => {
  return (
    <div className="mt-[76px] ">
      <div className="bg-gray-50 dark:bg-black p-10 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border max-w-xl">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img
                className="h-11 w-11 rounded-full"
                src="data:image/jpeg;base64,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"
              />
              <div className="ml-1.5 text-sm leading-tight">
                <span className="text-black dark:text-white font-semibold block cursor-pointer hover:font-bold">
                  Vampire
                </span>
                <span className="text-gray-500 dark:text-gray-400 font-normal block cursor-pointer hover:font-semibold">
                  @vampire
                </span>
              </div>
            </div>
            <a
              href=""
              className="inline-flex items-center justify-center h-6 w-6 rounded-full text-base font-semibold
             text-gray-900 dark:text-white cursor-pointer  hover:bg-yellow-400 hover:text-white focus:ring-4 
             focus:outline-none focus:ring-yellow-300 dark:bg-yellow-200 dark:hover:bg-yellow-200
              dark:focus:ring-yellow-400 hover:scale-105 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots rounded-full  "
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </a>
          </div>
          <p className="text-black dark:text-white block text-xl leading-snug mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            reiciendis minima id fugit iusto ullam quis iste nulla velit
            reprehenderit.
          </p>
          <img
            className="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700"
            src="https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">
            10:05 AM · Dec 19, 2020
          </p>
          <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
          <div className="text-gray-500 dark:text-gray-400 flex mt-3 justify-between">
            <div className="flex items-center mr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="fill-current h-4 w-auto "
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
              {/* <svg
                className="fill-current h-5 w-auto"
                viewBox="0 0 24 24"
                // className="r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
              >
                <g>
                  <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                </g>
              </svg> */}
              <span className="ml-3">615</span>
            </div>
            <div className="flex items-center mr-6">
              <svg
                className="fill-current h-5 w-auto"
                viewBox="0 0 24 24"
                // className="r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
              >
                <g>
                  <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                </g>
              </svg>
              <span className="ml-3">541</span>
            </div>
            <div className="flex items-center mr-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-5 w-auto  " viewBox="0 0 24 24">
                <path d="M12 8H8.001L8 20H6V8H2L7 3L12 8ZM22 16L17 21L12 16H16V4H18V16H22Z"></path>
              </svg>
              {/* <svg
                className="fill-current h-5 w-auto"
                viewBox="0 0 24 24"
                // className="r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
              >
                <g>
                  <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                </g>
              </svg> */}
              <span className="ml-3">541</span>
            </div>
            <div className="flex items-center mr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
              <span className="ml-3">541</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
