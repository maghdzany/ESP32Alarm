import { useEffect, useState } from "preact/hooks";

const TestPage = () => {
  const [time, setTime] = useState("Loading time...");
  const [toggleState, setToggleState] = useState(false);

  // Fetch current time from the ESP32 API
  const fetchTime = async () => {
    const response = await fetch("/api/time");
    const data = await response.json();
    setTime(data.time);
  };

  // Toggle pin 2
  const togglePin = async () => {
    await fetch("/api/toggle", { method: "POST" });
    setToggleState(!toggleState);
  };

  // Fetch time every second
  useEffect(() => {
    fetchTime();
    const interval = setInterval(fetchTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div class="container mx-auto p-4">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold">ESP32 Dashboard</h1>
        <p class="text-xl">{time}</p>
      </div>
      <div class="text-center">
        <button
          onClick={togglePin}
          class="btn btn-primary"
        >
          {toggleState ? "Turn Off" : "Turn On"} Pin 2
        </button>
      </div>
    </div>
  );
};

export default TestPage;
