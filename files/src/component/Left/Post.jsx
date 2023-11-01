import React from "react";

const Post = (props) => {
  return (
    <div>
      <div className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-12 mx-auto w-[640px] max-md:w-[400px]">
          {/*content*/}
          <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-2xl font-semibold">Post</h3>
              <button
                className="ml-auto border-0 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => props.close(false)}
              >
                <span className="text-red-400 h-8 w-6 text-2xl flex items-center outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-4 pb-2 flex-auto">
              <div className="flex p-4">
                <div>
                  <img
                    className="rounded-3xl w-16 h-12"
                    src="data:image/jpeg;base64,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"
                  />
                </div>

                <div className="ml-3 flex flex-col w-full">
                  <textarea
                    placeholder="What's happening?"
                    className="w-full text-xl resize-none outline-none h-32"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center cursor-pointer h-8  text-yellow-400">
                <div className="h-[60%] flex gap-2 hover:bg-yellow-100 px-4 mb-2 text-sm rounded-full">
                  {/* <i className="fas fa-globe"></i>  */}
                  <div className="pt-[1.5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-globe"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                    </svg>
                  </div>
                  <p>Everyone can reply</p>
                </div>
              </div>

              <div className="flex items-center text-yellow-400 justify-between py-3 px-1 border-t">
                <div className="flex text-2xl">
                  <div className="flex items-center justify-center p-3 hover:bg-yellow-200 hover:text-red-500 rounded-full cursor-pointer">
                    {/* <i className="fas fa-image"></i> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-image"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-center p-3 hover:bg-yellow-200 hover:text-red-500 rounded-full cursor-pointer">
                    {/* <i className="fas fa-poll-h"></i> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-filetype-gif"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 4.5V14a2 2 0 0 1-2 2H9v-1h3a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.278 13.124a1.403 1.403 0 0 0-.14-.492 1.317 1.317 0 0 0-.314-.407 1.447 1.447 0 0 0-.48-.275 1.88 1.88 0 0 0-.636-.1c-.361 0-.67.076-.926.229a1.48 1.48 0 0 0-.583.632 2.136 2.136 0 0 0-.199.95v.506c0 .272.035.52.105.745.07.224.177.417.32.58.142.162.32.288.533.377.215.088.466.132.753.132.268 0 .5-.037.697-.111a1.29 1.29 0 0 0 .788-.77c.065-.174.097-.358.097-.551v-.797H1.717v.589h.823v.255c0 .132-.03.254-.09.363a.67.67 0 0 1-.273.264.967.967 0 0 1-.457.096.87.87 0 0 1-.519-.146.881.881 0 0 1-.305-.413 1.785 1.785 0 0 1-.096-.615v-.499c0-.365.078-.648.234-.85.158-.2.38-.301.665-.301a.96.96 0 0 1 .3.044c.09.03.17.071.236.126a.689.689 0 0 1 .17.19.797.797 0 0 1 .097.25h.776Zm1.353 2.801v-3.999H3.84v4h.79Zm1.493-1.59v1.59h-.791v-3.999H7.88v.653H6.124v1.117h1.605v.638H6.124Z"
                      />
                    </svg>
                  </div>

                  <div className="flex items-center justify-center p-3 hover:bg-yellow-200 hover:text-red-500 rounded-full cursor-pointer">
                    {/* <i className="fas fa-poll-h"></i> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-emoji-smile"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-center p-3 hover:bg-yellow-200 hover:text-red-500 rounded-full cursor-pointer">
                    {/* <i className="fas fa-smile"></i> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar-check"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-center p-3 hover:bg-yellow-200 hover:text-red-500 rounded-full cursor-pointer">
                    {/* <i className="fas fa-calendar-alt"></i> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <button className="inline px-4 py-3 rounded-full font-bold text-white bg-yellow-400 cursor-pointer">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default Post;
