import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className='h-full'>
      <Header />
      <Hero />
    </div>
  );
};

export default App;
