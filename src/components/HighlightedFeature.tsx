import React from 'react';

interface HighlightedFeatureProps {
  icon: string;
  text: string;
  marginLeft: string;
}

const HighlightedFeature: React.FC<HighlightedFeatureProps> = ({ icon, text, marginLeft }) => {
  return (
    <div className={`py-2 px-2.5 rounded-xl ${marginLeft} bg-gradient-to-r from-start flex items-center space-x-2 border border-blue-600 border-solid`}>
      <img src={icon} alt={text} className="h-6" />
      <span className="text-gray-700 font-semibold w-48">{text}</span>
    </div>
  );
};

export default HighlightedFeature;
