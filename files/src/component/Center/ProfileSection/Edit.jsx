import React from "react";

const Edit = (props) => {
  return (
    <div className="relative">
      <div className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-[500px] my-6 mx-auto max-w-3xl max-md:w-[400px]">
          <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-center p-5 pl-6 border-b border-solid border-gray-200 rounded-t">
              {/* Title */}
              <h5 className="text-xl font-semibold max-sm:text-[16px]">
                Edit Profile
              </h5>
              {/* <!--Close button--> */}
              <button
                className="ml-auto border-0 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => props.passfunc(false)}
              >
                <span className="text-red-400 h-6 w-6 text-2xl flex items-center outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>

            <div className="relative flex-auto">
              <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center mx-auto  lg:py-0 ">
                  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="">
                      <div className="h-40 mb-2 bg-gradient-to-r from-yellow-500 to-pink-500"></div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default Edit;
