import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Certifications() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const {certifications}=portfolioData;
  return (
    <div>
      <SectionTitle title={"Certifications"} />

      <div className="flex py-2">
        <div className="flex flex-col gap-5 sm:w-full">
          {certifications.map((certifications) => (
            <div className='gap-3'>
              <h1 className="text-fifth text-3xl font-bold sm:text-xl">
                {certifications.name}
              </h1>
              <h1 className="text-third font-bold">
                Issued by: {certifications.org}
              </h1>
              <a href={certifications.url} className='text-white' target='_blank' rel="noreferrer">
                <span class="material-symbols-outlined">open_in_new</span>See
                Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications