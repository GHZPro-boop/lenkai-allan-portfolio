import React from 'react';
import './index.css';
import { Section1 } from './Components/Section1';
import { Section2 } from './Components/Section2';
import { Languages } from './Components/Languages';
import { Projects } from './Components/Projects';
import { Footer } from './Components/Footer';


function App() {

  return (
    <div className='bg-[#151515] h-full w-full'>
      <Section1 />
      <div className='flex flex-col mt-[430px] mx-[10%] text-[#FFFFFF]'>
        <Section2 />
      </div>
      <div className='mt-[10%]'>
        <Languages />
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
