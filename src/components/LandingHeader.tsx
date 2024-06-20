import React from 'react';
import finger from '../assets/finger.png';
import bluedot from '../assets/blue-dot.png';

const LandingHeader: React.FC = () => {
  return (
    <div className="flex items-center mb-4">
      <img src={bluedot} className="relative -top-[1.3rem] left-[2.93rem]" />
      <img src={bluedot} className="relative -top-[1.3rem] left-[16.23rem]" />
      <img src={bluedot} className='relative top-[1.4rem] left-[2rem]' />
      <img src={bluedot} className='relative top-[1.4rem] left-[15.33rem]' />
      <img src={finger} alt="Finger" className="h-10" />
      <span className="border-custom-blue border-2 py-1.5 px-8 text-blue-500 -m-4">Welcome to DocTrue</span>
    </div>
  );
};

export default LandingHeader;
