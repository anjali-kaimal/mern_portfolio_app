import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function About() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const {about}=portfolioData;
  const {description1,description2,lottieURL,skills}=about;

  return (
    <div className="bg-primary">
      <SectionTitle title={"About"} />
      <div className="flex w-full items-center sm:flex-col">
        <div className="w-1/2 sm:w-full flex justify-start">
          <dotlottie-player
            src={lottieURL}
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full text-white">
          <p>
          {description1}
          </p>
          
          <p>
           {description2}
          </p>
        </div>
      </div>
      <div className='py-5'>
        <h1 className='text-cyan-400 text-xl'>These are few of the technologies I have been working on lately:</h1>
        <div className='flex flex-wrap gap-10 mt-5 sm:flex-col sm:justify-center'>
        {skills.map((skill,index)=>(
            <div className='text-cyan-400 border border-cyan-400 px-5 py-3 rounded'>
                <h1 className='flex sm:justify-center'>{skill}</h1>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default About