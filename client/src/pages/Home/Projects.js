import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Projects() {
    const [selectedItemIndex,setSelectedItemIndex]=React.useState(0);
    const { loading, portfolioData } = useSelector((state) => state.root);
    const {mernprojects}=portfolioData;
  return (
    <div>
      <SectionTitle title={"MERN Stack Projects"} />

      <div className="flex py-10 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-third sm:flex-row sm:w-full sm:overflow-x-scroll">
          {mernprojects.map((projects, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 sm:px-2 ${
                  selectedItemIndex === index
                    ? "text-cyan-500 border-third border-l-8 font-bold text-3xl -ml-1 sm:text-xl sm:w-full sm:border-b-2 bg-cyan-700 bg-opacity-15 py-2"
                    : "text-white"
                }`}
              >
                {projects.title}
              </h1>
            </div>
          ))}
        </div>

        {/* display the content of the selected periods */}
        <div className="flex flex-row sm:flex-col gap-5 px-10 sm:px-1 sm:py-10 sm:gap-3">
          <div>
            <img
              className="w-screen h-80 ml-5 sm:ml-0"
              src={mernprojects[selectedItemIndex].photourl}
              alt="self portrait"
            />
          </div>
          <div className="px-5 flex gap-8 flex-col">
            <div>
            <h1 className="text-fifth text-xl font-bold py-4">
              {mernprojects[selectedItemIndex].title}
            </h1>
            <p className="text-white sm:w-full">
              {mernprojects[selectedItemIndex].description}
            </p>
            </div>
            <div className='flex gap-10'>
            <a href={mernprojects[selectedItemIndex].giturl} className='text-cyan-400' target='_blank' rel="noreferrer">
                <span class="material-symbols-outlined">open_in_new</span>GitHub Repository
              </a>
              <a href={mernprojects[selectedItemIndex].liveurl} className='text-cyan-400' target='_blank' rel="noreferrer">
                <span class="material-symbols-outlined">open_in_new</span>See Live
              </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects