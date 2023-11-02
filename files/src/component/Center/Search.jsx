import React, { Component } from "react";
import TrendSection from "../Right/TrendSection";
export class Search extends Component {
  constructor() {
    super();
    this.state = {
        articles: [] ,
        // loading: false
    }
  }

  // async componentDidMount(){
  //   let url = "https://newsapi.org/v2/everything?q=hindi&from=2023-10-30&sortBy=publishedAt&apiKey=56ffe41ee72e43d8b567421f45546692"
  //   let data = await fetch(url) ;
  //   let parsedData = await data.json() 
  //   // console.log(parsedData)
  //   this.setState ({
  //       articles:parsedData.articles
  //   })
  // }
  render() {
    return (
      <>
        <div className="flex-col w-[800px] h-screen ml-72 border-r border-black-200 max-lg:ml-16 max-lg:mr-5 relative">
          {/* <label
          for="default-search"
          className="mb-2 text-sm font-medium sr-only dark:text-gray-300"
        >
          Search
        </label> */}
          <div className="fixed w-[50rem] bg-white">
            <div className="relative px-6">
              <div className="flex absolute inset-y-0 left-0 items-center pl-10 pointer-events-none ">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full my-1 text-md bg-gray-50 rounded-2xl border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                placeholder="Try searching for people, lists, or keywords"
                required
              />
              <button
                type="submit"
                className="text-white mr-6 absolute right-2.5 bottom-2.5 max-sm:hidden bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-600"
              >
                Search
              </button>
            </div>
            {/* Categories */}
            <div className="flex h-12 border-b border-gray-200 max-sm:gap-5 cursor-pointer">
              <div className="flex justify-center items-center w-[20%] hover:bg-gray-300">
                <button className="">For You</button>
              </div>
              <div className="flex justify-center items-center w-[20%] hover:bg-gray-300">
                <button>Trending</button>
              </div>
              <div className="flex justify-center items-center w-[25%] hover:bg-gray-300">
                <button>Entertainment</button>
              </div>
              <div className="flex justify-center items-center w-[15%] hover:bg-gray-300">
                <button>News</button>
              </div>
              <div className="flex justify-center items-center w-[20%] hover:bg-gray-300">
                <button className="pr-2">Sports</button>
              </div>
            </div>
          </div>
          <div className="flow-root mt-28 px-6 border-r border-gray-200">
              {/* <ul role="list" className=""> */}
                {this.state.articles.map((element)=>{
                    return (
                    <TrendSection key={element.title} Title={element.title ? element.title : "Tanmay"} 
                    Category={element.description ? element.description : "XYZ"} Posts={element.publishedAt ? element.publishedAt : "2K"} NewsUrl={element.url}/>
                )})}
              {/* </ul> */}
            </div>
        </div>
      </>
    );
  }
}

export default Search;
