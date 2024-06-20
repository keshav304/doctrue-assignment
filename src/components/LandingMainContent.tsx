import React from 'react';
import hospital from '../assets/hospital.png';
import play from '../assets/play.png';
import LandingHeader from './LandingHeader';

const LandingMainContent: React.FC = () => {
  return (
    <div className="md:w-1/2 mb-8 md:mb-14 pt-32">
      <LandingHeader />
      <div className="flex items-center mb-4">
        <h1 className="text-5xl font-bold mr-4 leading-4.5rem">An A-Z OPD</h1>
        <img src={hospital} alt="Hospital" className="h-16" />
      </div>
      <h1 className="text-5xl font-bold mb-4">
        <span className='text-blue-500 text-5xl leading-4.5rem'>Automation Software </span>
        for Your Practice.
      </h1>
      <p className="text-gray-600 mb-8">Helping Clinics & Hospitals Staffs to Operate Efficiently.</p>
      <div className="flex space-x-4 mb-8">
        <button className="bg-blue-600 text-white px-16 font-semibold rounded-full bg-gradient-to-r from-[#0F38BD] to-[#2ECEF2]">Start your free trial today!</button>
        <button className="border border-blue-600 font-semibold text-blue-600 px-16 rounded-full border-gradient border-gradient-grey border-gradient-blue">
          <span>
            <img src={play} alt="play" className="h-5" />
          </span>Watch Video
        </button>
      </div>
    </div>
  );
};

export default LandingMainContent;
