import React from "react";
import photo from "../../resources/photo.png"
import mern from "../../resources/mern.png"
import { useSelector } from "react-redux";

function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const {intro}=portfolioData;
  const {caption,description,firstName,lastName,welcomeText}=intro;
  return (
    <div className="flex flex-row sm:flex-col-reverse">
      <div className="bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white text-2xl">{welcomeText || ''}</h1>
      <h1 className="text-fifth sm:text-5xl text-8xl font-semibold sm:items-center">{firstName  || ''} {lastName  || ''}</h1>
      <h1 className="text-fourth sm:text-4xl text-6xl font-semibold sm:items-center">
        {caption  || ''}
      </h1>
      <p className="text-white text-1xl sm:w-full">
       {description  || ''}
      </p>
      <button className="border-2 border-third text-cyan-400 px-10 py-3 rounded">
        Get Started
      </button>
      </div>
        <div className="flex">
        <img className="w-screen h-fit bg-[#011321] border border-[#011321] rounded-ee-3xl rounded-ss-3xl ml-5 sm:ml-0"
        src={photo}
        alt="self portrait"
      />
      </div>
    </div>
  );
}

export default Intro;
