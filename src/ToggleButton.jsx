import { useState, useEffect } from 'preact/hooks';

export function ToggleButton() {
  const [ledStatus, setLedStatus] = useState('OFF');
  const [brightness, setBrightness] = useState(255);

  useEffect(() => {
    // Fetch initial LED status when component mounts
    fetchLedStatus();
  }, []);

  const fetchLedStatus = async () => {
    try {
      const response = await fetch('/api/led/status');
      const data = await response.json();
      setLedStatus(data.status.split(' ')[2]); // "LED is ON/OFF" -> "ON/OFF"
      setBrightness(data.brightness);
    } catch (error) {
      console.error('Error fetching LED status:', error);
    }
  };

  const sendLedRequest = async (url, body = null) => {
    try {
      const options = { method: 'POST' };
      if (body) {
        options.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        options.body = body;
      }
      const response = await fetch(url, options);
      const data = await response.json();
      setLedStatus(data.status.split(' ')[2]); // "LED is ON/OFF" -> "ON/OFF"
      setBrightness(data.brightness);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleTurnOn = () => sendLedRequest('/api/led/on');
  const handleTurnOff = () => sendLedRequest('/api/led/off');
  const handleToggle = () => sendLedRequest('/api/led/toggle');

  const handleBrightnessChange = (e) => {
    const newBrightness = e.target.value;
    setBrightness(newBrightness);
    sendLedRequest('/api/led/brightness', `value=${newBrightness}`);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4">
        <button onClick={handleTurnOn} className="btn btn-primary mr-2">
          Turn On LED
        </button>
        <button onClick={handleTurnOff} className="btn btn-secondary mr-2">
          Turn Off LED
        </button>
        <button onClick={handleToggle} className="btn btn-accent">
          Toggle LED
        </button>
      </div>

      <div className="flex flex-col items-center">
        <label className="text-xl mb-2">
          Brightness: {Math.round((brightness / 255) * 100)}%
        </label>
        <input
          type="range"
          min="0"
          max="255"
          value={brightness}
          onChange={handleBrightnessChange}
          className="range range-primary"
          disabled={ledStatus === 'OFF'}
        />
      </div>

      <div className="text-xl mt-4">
        LED Status: <span className="font-bold">{ledStatus}</span>
      </div>
    </div>
  );
}