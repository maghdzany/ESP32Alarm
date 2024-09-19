import { useState, useEffect } from "preact/hooks";

export default function TimeCard() {
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
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  const dayName = daysOfWeek[currentTime.getDay()];
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  const seconds = String(currentTime.getSeconds()).padStart(2, '0');
  const date = currentTime.getDate();
  const monthName = monthsOfYear[currentTime.getMonth()];
  const year = currentTime.getFullYear();

  return (
    <div className="card bg-base p-2 rounded-box text-center w-64">
      {/* Hari */}
      <div className="text-xl font-semibold">{dayName}</div>
      {/* Jam, Menit, Detik */}
      <div className="text-5xl font-bold">
        <span>{hours}</span>
        <span className="blink">:</span>
        <span>{minutes}</span>
        <span className="blink text-sm">:</span>
        <span className="text-sm">{seconds}</span>
      </div>
      {/* Tanggal, Bulan, Tahun */}
      <div className="text-lg">
        {date} {monthName} {year}
      </div>
    </div>
  );
}
