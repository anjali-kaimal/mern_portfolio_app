import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Experiences() {
    const [selectedItemIndex,setSelectedItemIndex]=React.useState(0);
    const { loading, portfolioData } = useSelector((state) => state.root);
    const {experience}=portfolioData;
  return (
    <div>
        <SectionTitle title={"Experience"}/>

        <div className='flex py-10 sm:flex-col'>

            {/* display the periods */}
            <div className='flex flex-col gap-10 border-l-2 border-third sm:flex-row sm:w-full sm:overflow-x-scroll'>

                {/* get object from experiences.js */}
                {experience.map((experience,index)=>(
                    <div onClick={()=>{
                        setSelectedItemIndex(index)
                    }
                    }
                    className='cursor-pointer'>
                        <h1 className={`text-xl px-5 sm:px-2 ${selectedItemIndex===index?'text-cyan-500 border-third border-l-8 font-bold text-3xl -ml-1 sm:text-xl sm:w-full sm:border-b-2 bg-cyan-700 bg-opacity-15 py-2':'text-white'}`}>
                            {experience.period}
                        </h1>
                        </div>
                ))}
            </div>

            {/* display the content of the selected periods */}
            <div className='flex flex-col gap-5 px-10 sm:px-1 sm:py-10 sm:gap-3'>
                    <h1 className='text-fifth text-xl font-bold'>{experience[selectedItemIndex].title}</h1>
                    <h1 className='text-third text-xl font-bold'>{experience[selectedItemIndex].company}</h1>
                    <p className='text-white sm:w-full'>{experience[selectedItemIndex].description}</p>

            </div>
        </div>
    </div>
  )
}

export default Experiences