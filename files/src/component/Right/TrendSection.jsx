import React, { Component } from "react";

export class TrendSection extends Component {

//   handleClick = () => {
//     console.log("Clicked")
    
//   }
  render() {
    let {Category,Title,Posts,NewsUrl} = this.props ;
    return (
      <div className="py-2">
        {/* <li > */}
          <div className="flex items-center space-x-4">
            <div className="flex-1 min-w-0">
              <p className=" text-[13px] text-gray-500 truncate dark:text-gray-400">
                {Category}
              </p>
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {Title}
              </p>
              <p className="text-[13px] text-gray-500 truncate dark:text-gray-400">
                {Posts}
              </p>
            </div>
            <a href={NewsUrl} target="_blank" className="inline-flex items-center justify-center h-6 w-6 rounded-full text-base font-semibold
             text-gray-900 dark:text-white cursor-pointer  hover:bg-yellow-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-200 dark:hover:bg-yellow-200 dark:focus:ring-yellow-500" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots rounded-full"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </a>
          </div>
        {/* </li> */}
      </div>
    );
  }
}

export default TrendSection;
