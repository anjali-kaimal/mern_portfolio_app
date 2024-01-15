import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Contact() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const {contact}=portfolioData;
  return (
    <div>
      <SectionTitle title={"Contact"} />
<div className='flex flex-row gap-16 sm:flex-col sm:gap-0'>
      <div className="w-3/12 sm:w-full flex justify-start">
      <dotlottie-player
        src="https://lottie.host/edb18073-9a9c-4df8-84cf-15b1cbca15d6/izTdPkVleI.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></dotlottie-player>
      </div>
      <div className="flex flex-col text-[#4da0b4] font-semibold pb-10 gap-5 sm:gap-0">
        <h1>{"{"}</h1>

        <div className="flex flex-col px-10 py-5 gap-4">
          <div className="flex flex-row gap-3 sm:gap-1">
            <h1>{`"name" : `}</h1>
            <h1>"{contact.name}"</h1>
            <h1>,</h1>
          </div>
          <div className="flex flex-row gap-3 sm:gap-1">
            <h1>{`"email":`}</h1>
            <h1>"{contact.email}"</h1>
            <h1>,</h1>
          </div>

          <div className="flex flex-row gap-3 sm:gap-1">
            <h1>{`"mobile" :`}</h1>
            <h1>"{contact.mobile}"</h1>
            <h1>,</h1>
          </div>

          <div className="flex flex-row gap-3 sm:gap-1">
            <h1>{`"country" :`}</h1>
            <h1>"{contact.country}"</h1>
          </div>
        </div>
        <h1>{"}"}</h1>
      </div>
      </div>
    </div>
  );
}

export default Contact