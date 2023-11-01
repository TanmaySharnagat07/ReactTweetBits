import React from "react";
import PCard from "./PCard";
const PriceCard = (props) => {
  return (
    <div className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-[500px] my-6 mx-auto max-w-3xl max-md:w-[450px]">
        <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-center justify-center p-5 pl-6 border-b border-solid border-gray-200 rounded-t">
            {/* <!--Modal title--> */}
            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
              Subscribe Now!
            </h5>
            {/* <!--Close button--> */}
            <button
              className="ml-auto border-0 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => props.exit(false)}
            >
              <span className="text-red-400 h-6 w-6 text-2xl flex items-center outline-none focus:outline-none">
                x
              </span>
            </button>
          </div>
          <div className="flex p-2 gap-2 max-sm:justify-center max-sm:h-[220px]">
            <PCard
              price="49"
              type="Individual"
              f1="Longer posts upto 150 words"
              f2="Add Designs to our posts"
              f3="Higher priority"
              f4="For creators"
              color="#8DE185"
            />
            <PCard
              price="149"
              type="Organization"
              f1="Longer posts upto 250 words"
              f2="Premium support"
              f3="Affiliates Badges"
              f4="For bussiness and government agencies"
              color="#C854E5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;

{
  /* <TEModalBody>
              <div class="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                <div class="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                    standard
                  </p>
                  <h1 class="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                    <span class="mt-2 text-4xl">$</span>29
                    <span class="self-end text-4xl">/mo</span>
                  </h1>
                </div>
                <div class="p-0">
                  <ul class="flex flex-col gap-4">
                    <li class="flex items-center gap-4">
                      <span class="p-1 border rounded-full border-white/20 bg-white/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="w-3 h-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                        5 team members
                      </p>
                    </li>
                    <li class="flex items-center gap-4">
                      <span class="p-1 border rounded-full border-white/20 bg-white/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="w-3 h-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                        200+ components
                      </p>
                    </li>
                    <li class="flex items-center gap-4">
                      <span class="p-1 border rounded-full border-white/20 bg-white/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="w-3 h-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                        40+ built-in pages
                      </p>
                    </li>
                    <li class="flex items-center gap-4">
                      <span class="p-1 border rounded-full border-white/20 bg-white/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="w-3 h-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                        1 year free updates
                      </p>
                    </li>
                    <li class="flex items-center gap-4">
                      <span class="p-1 border rounded-full border-white/20 bg-white/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="w-3 h-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                        Life time technical support
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="p-0 mt-12">
                  <button
                    class="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-dark="true"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </TEModalBody> */
}
