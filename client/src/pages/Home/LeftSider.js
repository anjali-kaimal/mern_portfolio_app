import React from 'react'

function LeftSider() {
  return (
    <div className='fixed left-2 bottom-0 sm:bottom-2 sm:static'>
      <div className='flex flex-col items-center sm:flex-row sm:gap-5'>
        <div className="flex flex-col text-[#294F6D] text-3xl gap-3 sm:flex-row">
          <a href='https://www.linkedin.com/in/anjali-kaimal-875346139/' target='_blank' rel="noreferrer"><i class="ri-linkedin-box-fill"></i></a>
          <a href='https://github.com/anjali-kaimal' target='_blank' rel="noreferrer"><i class="ri-github-fill" ></i></a>
        </div>
        <div className="w-[1px] h-52 bg-third justify-center sm:w-screen sm:h-[1px]"></div>
      </div>
    </div>
  );
}

export default LeftSider