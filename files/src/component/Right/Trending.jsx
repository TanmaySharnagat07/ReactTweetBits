import React, { Component } from "react";
import TrendSection from "./TrendSection";
export class Trending extends Component {
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
      <div>
        <div className="mt-4 ml-4 mr-4 max-h-80">
          <div className="w-full max-w-md  bg-white border border-gray-200 rounded-lg shadow sm:pt-6 sm:px-4 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-lg font-bold leading-none  text-gray-900 dark:text-white">
                What's Trending
              </h5>
              <a href="/" className=" text-sm text-yellow-400 hover:underline">View All</a>
            </div>
            <div className="flow-root">
              {/* <ul role="list" className=""> */}
                {this.state.articles.map((element)=>{
                    return (
                    <TrendSection key={element.title} Title={element.title ? element.title : "Tanmay"} 
                    Category={element.description ? element.description : "XYZ"} Posts={element.publishedAt ? element.publishedAt : "2K"} NewsUrl={element.url}/>
                )})}
              {/* </ul> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trending;
