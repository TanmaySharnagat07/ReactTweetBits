import React from "react";

const PCard = (props) => {
  return (
    <div>
      <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl  bg-clip-border p-6 text-white shadow-md max-sm:h-[190px]" style={{backgroundColor:props.color , boxShadow:props.color}}>
        <div className="relative h-28 max-sm:h-[20] m-0 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
          <p className="block font-sans text-sm antialiased font-medium leading-none text-white uppercase">
            {props.type}
          </p>
          <h1 className="flex justify-center gap-1 mt-4 font-sans antialiased font-semibold tracking-normal text-white text-5xl">
            <span className="mt-2 text-4xl max-sm:text-2xl">$</span>
            {props.price}
            <span className="self-end text-4xl">/mo</span>
          </h1>
        </div>
        <div className="p-0 max-sm:hidden">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p className="block font-sans text-[14px] antialiased font-normal leading-tight text-inherit">
                {props.f1}
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p className="block font-sans text-[14px] antialiased font-normal leading-tight text-inherit">
                {props.f2}
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p className="block font-sans text-[14px] antialiased font-normal leading-tight text-inherit">
               {props.f3}
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p className="block font-sans text-[14px] antialiased font-normal leading-tight text-inherit">
                {props.f4}
              </p>
            </li>
          </ul>
        </div>
        <div className="p-0 mt-8 max-sm:h-4 max-sm:-mt-1">
          <button
            className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-[#C854E5] shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
            style={{backgroundColor:props.color,color:"white"}}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PCard;
