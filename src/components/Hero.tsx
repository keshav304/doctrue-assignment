import React from 'react';
import finger from '../assets/finger.png';
import hospital from '../assets/hospital.png';
import play from '../assets/play.png';
import doctor from '../assets/doctor.png';
import docBg from '../assets/doc-bg.png';
import clock from '../assets/clock.png';
import patient from '../assets/patient.png';
import calendar from '../assets/calendar.png';
import bluedot from '../assets/blue-dot.png'

const Hero: React.FC = () => {
  return (
    <section className=" bg-gray-50 ">
      <div className="container  mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-14  pt-32">
          <div className="flex items-center mb-4">
            <img src={bluedot} className="relative -top-[1.3rem] left-[2.93rem]"/>
            <img src={bluedot} className="relative  -top-[1.3rem] left-[16.23rem]"/>
            <img src={bluedot} className='relative  top-[1.4rem] left-[2rem]'/>
            <img src={bluedot} className='relative  top-[1.4rem] left-[15.33rem]'/>
            
            <img src={finger} alt="Finger" className="h-10" />
            <span className=" border-custom-blue border-2 py-1.5 px-8 text-blue-500 -m-4">Welcome to DocTrue</span>
          </div>
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
            <button className="bg-blue-600 text-white px-16 font-semibold  rounded-full bg-gradient-to-r from-[#0F38BD] to-[#2ECEF2]">Start your free trial today!</button>
            <button className="border border-blue-600 font-semibold text-blue-600 px-16 rounded-full border-gradient border-gradient-grey border-gradient-blue "><span>
            <img src={play} alt="play" className="h-5" />
              </span>Watch Video</button>
          </div>
        </div>
        
        <div className="md:w-1/2 relative items-center md:items-end block ">
          <div className="space-y-4 mb-8 top-96 right-32 relative z-1">
            <div className="py-2 px-2.5 rounded-xl ml-[36%] bg-gradient-to-r from-start flex items-center space-x-2 border border-blue-600 border-solid">
              <img src={clock} alt="Clock" className="h-6" />
              <span className="text-gray-700 font-semibold w-44">Real-time Queue Management</span>
            </div>
            <div className="py-2 px-2.5 rounded-xl ml-[33%] bg-gradient-to-r from-start flex items-center space-x-2 border border-blue-600 border-solid">
              <img src={patient} alt="Patient" className="h-6" />
              <span className="text-gray-700 font-semibold w-40">High Patient Retention</span>
            </div>
            <div className="py-2 px-2.5 rounded-xl ml-[30%] bg-gradient-to-r from-start flex items-center space-x-2 border border-blue-600 border-solid">
              <img src={calendar} alt="Calendar" className="h-6" />
              <span className="text-gray-700 font-semibold w-48">Reduced Appointment No-Shows</span>
            </div>
          </div>
          <div className="relative flex justify-center  w-full ">
            <div>
            <img src={docBg} alt="Background" className="absolute right-0  object-cover z-0" />
            <img src={doctor} alt="Doctor" className="relative z-10 h-[35rem] -right-32 bottom-[9.6rem]" />
          </div>
          </div>
        </div> 
       
      </div>
    </section>
  );
};

export default Hero;
