import { useState } from "react";
import Intro from "./Intro";
import SuitCase from '../icons/suitCase';
import RSS from '../icons/rss';
import Pin from '../icons/pin';
import HomeAlt from '../icons/homeAlt';
import Hat from '../icons/hat';
import More from '../icons/more';

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container max-[450px]:flex-col max-[450px]:px-52">
      <div className="bloc-tabs flex-col max-[450px]:text-[26px]  max-[450px]:w-[850px] max-[450px]:ml-[14rem]">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Overview
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Work and education
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Places lived
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Contact and basic info
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Details about you
        </button>
      </div>

      <div className="content-tabs max-[450px]:text-[26px]  max-[450px]:w-[850px] max-[450px]:ml-[14rem] max-[450px]:mt-2">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
       <Intro/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
        
        <div className="shadow-fb rounded w-full bg-white p-4">
   
   <div className="mt-1 flex items-start ">
     <SuitCase className='p-2'/>
     <span className="ml-2 ">
       Astha IT Limited Bangladesh{' '}

     </span>
     <div className=' items-end  justify-end ml-[385px] '> <More className=""/></div>
   </div>
   <div className="mt-4 flex items-center">
     <Hat />
     <span className="ml-2">Studied at Bangladesh Army University </span>
     <div className=' items-end justify-end ml-[315px]'> <More className=""/></div>
   </div>
   <div className="mt-4 flex items-center">
     <Hat />
     <span className="ml-2">Intern at Sun IT Limited Rajshahi </span>
     <div className=' items-end justify-end ml-[360px]'> <More className=""/></div>
   </div>
   </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
      
      <div className="shadow-fb rounded w-full bg-white p-4">
   
 
   <div className="mt-4 flex items-center">
     <HomeAlt />
     <span className="ml-2">
       Lives in <b>Rajshahi</b>, Bangladesh{' '}
     </span>
     <div className=' items-end justify-end ml-[380px]'> <More className=""/></div>
   </div>
   <div className="mt-4 flex items-center">
     <Pin />
     <span className="ml-2">
       From  <b>Rajshahi</b>, Bangladesh{' '}
     </span>
     <div className=' items-end ml-[393px] justify-end '> <More className=""/></div>
   </div>

        </div>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
     
     <div className="shadow-fb rounded w-full bg-white p-4">
   
   <div className="mt-1 flex items-start ">
     <SuitCase className='p-2'/>
     <span className="ml-2 ">
       Astha IT Limited Bangladesh{' '}

     </span>
     <div className=' items-end  justify-end ml-[385px] '> <More className=""/></div>
   </div>
   <div className="mt-4 flex items-center">
     <Hat />
     <span className="ml-2">Studied at Bangladesh Army University </span>
     <div className=' items-end justify-end ml-[315px]'> <More className=""/></div>
   </div>
   <div className="mt-4 flex items-center">
     <Hat />
     <span className="ml-2">Intern at Sun IT Limited Rajshahi </span>
     <div className=' items-end justify-end ml-[360px]'> <More className=""/></div>
   </div>
   <div className="mt-4 flex items-center">
     <HomeAlt />
     <span className="ml-2">
       Lives in <b>Rajshahi</b>, Bangladesh{' '}
     </span>
     <div className=' items-end justify-end ml-[380px]'> <More className=""/></div>
   </div>
   <div className="mt-4 flex items-center">
     <Pin />
     <span className="ml-2">
       From  <b>Rajshahi</b>, Bangladesh{' '}
     </span>
     <div className=' items-end ml-[393px] justify-end '> <More className=""/></div>
   </div>
   <div className="mt-4 flex items-center">
     <RSS />
     <span className="ml-2">
       Followed by <b>97 people</b> {' '}
     </span>
     <div className=' items-end ml-[420px] justify-end '> <More className=""/></div>
   </div>
   </div>
        </div>

        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
     
        <Intro/>
        </div>


      </div>
      
    </div>
  );
}

export default Tabs;
