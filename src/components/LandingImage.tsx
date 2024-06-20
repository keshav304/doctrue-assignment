import React from 'react';
import doctor from '../assets/doctor.png';
import docBg from '../assets/doc-bg.png';

const LandingImage: React.FC = () => {
  return (
    <div className="relative flex justify-center w-full">
      <div>
        <img src={docBg} alt="Background" className="absolute right-0 object-cover z-0" />
        <img src={doctor} alt="Doctor" className="relative z-10 h-[35rem] -right-32 bottom-[9.6rem]" />
      </div>
    </div>
  );
};

export default LandingImage;
