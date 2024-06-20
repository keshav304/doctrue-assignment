import React from 'react';
import Header from './components/Header';
import LandingSection from './components/LandingSection';

const App: React.FC = () => {
  return (
    <div className='h-full'>
      <Header />
      <LandingSection />
    </div>
  );
};

export default App;
