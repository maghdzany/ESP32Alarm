import { useState, useEffect } from 'preact/hooks';

function Waktu() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const fetchTime = async () => {
    try {
      const response = await fetch('/api/time');
      const data = await response.json();
      setTime(data.time);
      setDate(data.date);
    } catch (error) {
      console.error('Error fetching time:', error);
    }
  };

  // Fetch time every second
  useEffect(() => {
    fetchTime();
    const interval = setInterval(fetchTime, 1000); // Update every second
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div class="text-center my-4">
      <div class="text-4xl font-bold">{time}</div>
      <div class="text-xl mt-2">{date}</div>
    </div>
  );
}

export default Waktu;