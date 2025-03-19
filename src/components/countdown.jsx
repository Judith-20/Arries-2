import { useState, useEffect } from 'react';
import PropTypes from "prop-types";

function Countdown({ initialDays = 1, initialHours = 0, initialMinutes = 0, initialSeconds = 0 }) {
  const [days, setDays] = useState(initialDays);
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(countdown); // Stop when everything is zero
      } else if (seconds > 0) {
        setSeconds(prev => prev - 1);
      } else if (minutes > 0) {
        setMinutes(prev => prev - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(prev => prev - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (days > 0) {
        setDays(prev => prev - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);
  
    return () => clearInterval(countdown);
  }, [days, hours, minutes, seconds]);
  

  return (
    <div className="text-accent flex items-center gap-3 mobile:mb-6 mb-10">
      {/* Days */}
      <div className="flex flex-col items-center md:ml-6">
        <p className="bg-whyte px-1.5 py-2 text-xl mobile:text-[1.4175rem] mobile:py-[0.7rem] mobile:px-[0.531875rem] md:rounded-[7.09px] w-[3.3rem] md:w-[3.3rem] font-digital-numbers rounded-[3.97px] font-medium mobile:font-normal md:inline">
          {days < 10 ? `0${days}` : days}
        </p>
        <p className="text-whyte md:inline mt-2 md:text-sm px-auto mobile:mt-1 mobile:text-base mobile:font-medium">Days</p>
      </div>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <p className="bg-whyte px-1.5 py-2 text-xl mobile:text-[1.4175rem] mobile:py-[0.7rem] mobile:px-[0.531875rem] mobile:rounded-[7.09px] mobile:w-[3.3rem] font-digital-numbers rounded-md font-medium mobile:font-normal md:inline">
          {hours < 10 ? `0${hours}` : hours}
        </p>
        <p className="text-whyte md:inline mt-2 md:text-sm px-auto mobile:mt-1 mobile:text-base mobile:font-medium">Hr</p>
      </div>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <p className="bg-whyte px-1.5 py-2 text-xl mobile:text-[1.4175rem] mobile:py-[0.7rem] mobile:px-[0.531875rem] mobile:rounded-[7.09px] mobile:w-[3.3rem] font-digital-numbers rounded-md font-medium mobile:font-normal md:inline">
          {minutes < 10 ? `0${minutes}` : minutes}
        </p>
        <p className="text-whyte md:inline mt-2 md:text-sm px-auto mobile:mt-1 mobile:text-base mobile:font-medium">Mins</p>
      </div>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <p className="bg-whyte px-1.5 py-2 text-xl mobile:text-[1.4175rem] mobile:py-[0.7rem] mobile:px-[0.531875rem] mobile:rounded-[7.09px] mobile:w-[3.3rem] font-digital-numbers rounded-md font-medium mobile:font-normal md:inline">
          {seconds < 10 ? `0${seconds}` : seconds}
        </p>
        <p className="text-whyte md:inline mt-2 md:text-sm px-auto mobile:mt-1 mobile:text-base mobile:font-medium">Sec</p>
      </div>
    </div>
  );
}

Countdown.propTypes = {
  initialDays: PropTypes.number,
  initialHours: PropTypes.number,
  initialMinutes: PropTypes.number,
  initialSeconds: PropTypes.number,
};

export default Countdown;




// import  { useState, useEffect } from 'react';
// import PropTypes from "prop-types";

// function Countdown () {
//   const [days, setDays] = useState(1);
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       if (seconds > 0) {
//         setSeconds(seconds - 1);
//       } else {
//         if (minutes > 0) {
//           setMinutes(minutes - 1);
//           setSeconds(59);
//         } else {
//           if (hours > 0) {
//             setHours(hours - 1);
//             setMinutes(59);
//             setSeconds(59);
//           } else {
//             if (days > 0) {
//               setDays(days - 1);
//               setHours(0);
//               setMinutes(0);
//               setSeconds(59);
//             } else {
//               clearInterval(countdown);
//             }
//           }
//         }
//       }
//     }, 1000);

//     return () => clearInterval(countdown);
//   }, [days, hours, minutes, seconds]);

//   return (
//     <div className=" text-accent flex items-center gap-3 mobile:mb-6 ">
        
//             <div className="flex flex-col items-center md:ml-6">
//                  <p className='bg-whyte px-1.5 py-2 text-xl mobile:text-[1.4175rem] mobile:py-[0.7rem] mobile:px-[0.531875rem] md:rounded-[7.09px] w-[1.884rem] md:w-[3.3rem] font-digital-numbers rounded-[3.97px] font-medium mobile:font-normal md:inline'>{days < 10 ? `0${days}` : days}</p>
//             <p className='text-whyte md:inline mt-2 md:text-sm px-auto mobile:mt-1 mobile:text-base mobile:font-medium'>Days</p>
//             </div>

//             <div className="flex flex-col items-center">
//                 <p className='bg-whyte px-1.5 py-2 text-xl mobile:text-[1.4175rem] mobile:py-[0.7rem] mobile:px-[0.531875rem] mobile:rounded-[7.09px] mobile:w-[3.3rem] font-digital-numbers rounded-md font-medium mobile:font-normal md:inline'>{hours < 10 ? `0${hours}` : hours}</p>
//                 <p className='text-whyte md:inline mt-2 md:text-sm px-auto mobile:mt-1 mobile:text-base mobile:font-medium'>Hr</p>
//             </div>

//             <div className="flex flex-col items-center">
//                 <p className='bg-whyte px-1.5 py-2 text-xl mobile:text-[1.4175rem] mobile:py-[0.7rem] mobile:px-[0.531875rem] mobile:rounded-[7.09px] mobile:w-[3.3rem] font-digital-numbers rounded-md font-medium mobile:font-normal md:inline'>{minutes < 10 ? `0${minutes}` : minutes}</p>
//                 <p className='text-whyte md:inline mt-2 md:text-sm px-auto mobile:mt-1 mobile:text-base mobile:font-medium '>Mins</p>
//             </div>

//             <div className="flex flex-col items-center">
//                 <p className='bg-whyte px-1.5 py-2 text-xl mobile:text-[1.4175rem] mobile:py-[0.7rem] mobile:px-[0.531875rem] mobile:rounded-[7.09px] mobile:w-[3.3rem] font-digital-numbers rounded-md font-medium mobile:font-normal md:inline'>{seconds < 10 ? `0${seconds}` : seconds}</p>
//                 <p className='text-whyte md:inline mt-2 md:text-sm px-auto mobile:mt-1 mobile:text-base mobile:font-medium '>Sec</p>
//             </div>
            
//     </div>
//   );
// }

// Countdown.propTypes = {
//   initialDays: PropTypes.number,
//   initialHours: PropTypes.number,
//   initialMinutes: PropTypes.number,
//   initialSeconds: PropTypes.number,
// };
// export default Countdown;




