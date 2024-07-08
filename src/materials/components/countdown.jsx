import React, { useState, useEffect } from 'react';

const Countdown = ({ initialDays = 3, initialHours = 0, initialMinutes = 0, initialSeconds = 0 }) => {
  const [days, setDays] = useState(initialDays);
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            if (days > 0) {
              setDays(days - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            } else {
              clearInterval(countdown);
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [days, hours, minutes, seconds]);

  return (
    <div className=" text-accent flex items-center gap-3 mobile:mb-6 ">
        
            <div className="flex flex-col ml-6">
                 <p className='bg-whyte px-1.5  py-2 text-xl  text-ascent mobile:py-1 mobile:px-[3px] mobile:rounded-[4px] font-digital-numbers rounded-md font-medium inline'>{days < 10 ? `0${days}` : days}</p>
            <p className='text-whyte inline mt-2.5 text-sm px-auto mobile:mt-2 mobile:text-xs mobile:font-light'>Days</p>
            </div>

            <div className="flex flex-col">
                <p className='bg-whyte px-1.5  py-2 text-xl  text-ascent mobile:py-1 mobile:px-[3px] mobile:rounded-[4px] font-digital-numbers rounded-md font-medium inline'>{hours < 10 ? `0${hours}` : hours}</p>
                <p className='text-whyte inline mt-2.5 text-sm ml-2.5 mobile:mt-2 mobile:text-xs mobile:font-light'>Hr</p>
            </div>

            <div className="flex flex-col">
                <p className='bg-whyte px-1.5 py-2 text-xl  text-ascent mobile:py-1 mobile:w-10 mobile:pr-2 mobile:rounded-[4px] rounded-md font-medium font-digital-numbers inline'>{minutes < 10 ? `0${minutes}` : minutes}</p>
                <p className='text-whyte inline mt-2.5 mobile:mt-2 mobile:text-xs mobile:font-light text-sm pl-1 '>Mins</p>
            </div>

            <div className="flex flex-col">
                <p className='bg-whyte px-1.5 py-2 text-xl  text-ascent mobile:py-1 mobile:w-10 mobile:pr-2 mobile:rounded-[4px] rounded-md font-medium font-digital-numbers inline'>{seconds < 10 ? `0${seconds}` : seconds}</p>
                <p className='text-whyte inline mt-2.5 text-sm pl-2 mobile:mt-2 mobile:text-xs mobile:font-light '>Sec</p>
            </div>
            
    </div>
  );
};

export default Countdown;



// import { useEffect, useState, useMemo, memo } from "react";

// const Countdown = () => {
//   const futureDate = useMemo(() => {
//     const currentDate = new Date();

//     const fDate = new Date();
//     fDate.setDate(currentDate.getDate() + 3);

//     return fDate;
//   }, []);

//   const calculateTimeLeft = () => {
//     const difference = futureDate - new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="flex gap-4 font-digital-numbers text-rblue ">
//       <div>
//         <span className="px-1  py-2 text-xl  text-ascent bg-white rounded">
//           {timeLeft.days < 10 && "0"}
//           {timeLeft.days}
//         </span>
//         <br />
//         <h6 className="text-white mt-2 text-sm">Days</h6>
//       </div>

//       <div>
//         <span className="px-1 py-2 text-xl font-digital-numbers text-ascent bg-white rounded">
//           {timeLeft.hours < 10 && "0"}
//           {timeLeft.hours}
//         </span>
//         <br />
//         <h6 className="text-white mt-2 text-sm">Hr</h6>
//       </div>

//       <div>
//         <span className="px-1 py-2 text-xl font-digital-numbers text-ascent bg-white rounded">
//           {timeLeft.minutes < 10 && "0"}
//           {timeLeft.minutes}
//         </span>
//         <br />
//         <h6 className="text-white mt-2 text-sm">Mins</h6>
//       </div>

//       <div>
//         <span className="px-1 py-2 text-xl font-digital-numbers text-ascent bg-white rounded">
//           {timeLeft.seconds < 10 && "0"}
//           {timeLeft.seconds}
//         </span>
//         <br />
//         <h6 className="text-white mt-2 text-sm">Sec</h6>
//       </div>
//     </div>
//   );
// };

// export default memo(Countdown);

