import React from 'react';
import HighlightedFeature from './HighlightedFeature';
import clock from '../assets/clock.png';
import patient from '../assets/patient.png';
import calendar from '../assets/calendar.png';

const LandingFeatures: React.FC = () => {
  return (
    <div className="space-y-4 mb-8 top-96 right-32 relative z-1">
      <HighlightedFeature icon={clock} text="Real-time Queue Management" marginLeft="ml-[36%]" />
      <HighlightedFeature icon={patient} text="High Patient Retention" marginLeft="ml-[33%]" />
      <HighlightedFeature icon={calendar} text="Reduced Appointment No-Shows" marginLeft="ml-[30%]" />
    </div>
  );
};

export default LandingFeatures;
