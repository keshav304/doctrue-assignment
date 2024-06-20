import React from 'react';
import LandingMainContent from './LandingMainContent';
import LandingFeatures from './LandingFeatures';
import LandingImage from './LandingImage';

const LandingSection: React.FC = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <LandingMainContent />
        <div className="md:w-1/2 relative items-center md:items-end block">
          <LandingFeatures />
          <LandingImage />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
