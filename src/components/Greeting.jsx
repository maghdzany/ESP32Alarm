import { useState, useEffect } from "preact/hooks";

const Greeting = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  
  const monthsOfYear = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const dayName = daysOfWeek[currentTime.getDay()];
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  const seconds = String(currentTime.getSeconds()).padStart(2, '0');
  const date = currentTime.getDate();
  const monthName = monthsOfYear[currentTime.getMonth()];
  const year = currentTime.getFullYear();
  return (
    <div className="grid grid-cols-2 gap-0 px-4 mb-6">
    <div className="flex flex-col justify-start">
        <h3 className='text-sm text-accent font-semibold'>Good Morning,</h3>
        <h1 className='text-4xl font-semibold'>Kamisato</h1>
    </div>
    <div className="flex flex-col justify-end items-end">
        <h3 className='text-sm text-accent font-semibold'>{dayName}, {date} {monthName} {year}</h3>
        <div className="text-4xl font-semibold">
        <span>{hours}</span>
        <span className="blink">:</span>
        <span>{minutes}</span>
        <span className="blink ">:</span>
        <span className="">{seconds}</span>
      </div>
    </div>
</div>
  )
}

export default Greeting