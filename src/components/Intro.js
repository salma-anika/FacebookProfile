import SuitCase from '../icons/suitCase';
import RSS from '../icons/rss';
import Pin from '../icons/pin';
import HomeAlt from '../icons/homeAlt';
import Hat from '../icons/hat';
import More from '../icons/more';

export default function Intro() {
  return (
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
  );
}
