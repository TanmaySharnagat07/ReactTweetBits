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
