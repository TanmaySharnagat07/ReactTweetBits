import React,{useState} from "react";
import Edit from "./Edit";

const ProfilePage = () => {
  const [edit, setedit] = useState(false) ;

  return (
    <>
      <div className="flex-col w-[800px] h-screen ml-72 border-r border-gray-200 max-lg:ml-16  max-lg:mr-5 max-md:pr-5">
        <div className="h-16 flex fixed w-[50rem] bg-white">
          <div className="pt-6 pl-4 font-bold hover:font-black ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className=""
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </div>
          <div className="pt-1 pl-10 flex flex-col">
            <span className="text-xl font-semibold">Username</span>
            <span>{Math.ceil(Math.random()*10)} Posts</span>
          </div>
        </div>
        <div className="h-64 bg-gradient-to-r from-yellow-500 to-pink-500"></div>
        <div className="ml-4">
          <img
            src="https://wallpapers.com/images/high/cool-profile-picture-gdhlf31a1n7pcctk.webp"
            alt="profile"
            className="object-cover rounded-full h-44 w-44 -mt-20 mb-2 border-4 border-white"
          />
          <span className="ml-2 block text-lg font-black">Username shvxb</span>
          <span className="ml-2 text-gray-500">@Username</span>
        </div>
        <div className="ml-[680px] mr-5 -mt-36 max-md:mr-5">
          <button className="bg-gradient-to-t  from-yellow-500 to-pink-500 text-white w-24 h-10 flex justify-center items-center font-semibold rounded-full"
          onClick={()=>{setedit(true);}}>Edit profile</button>
          {edit?<Edit passvar={edit} passfunc={setedit}/> : null}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
