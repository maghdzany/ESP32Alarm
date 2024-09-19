import { useState } from "preact/hooks";

const Alarm = ({ time, label, active, activeDays: initialActiveDays, onDelete, onToggle, onClick }) => {
  const [isActiveLocal, setIsActiveLocal] = useState(active);
  const [activeDays, setActiveDays] = useState(initialActiveDays);
  const [showPopup, setShowPopup] = useState(false);
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  const toggleDay = (index) => {
    setActiveDays((prev) =>
      prev.includes(index)
        ? prev.filter((day) => day !== index)
        : [...prev, index]
    );
  };

  const handleCardClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsActiveLocal(!isActiveLocal);
    onToggle();
  };

  return (
    <div className="relative">
      <div
        className={`card ${isActiveLocal ? 'bg-neutral' : 'bg-base-300'} no-animation text-neutral-content p-2 w-40 h-40 relative cursor-pointer`}
        onClick={handleCardClick}
      >
        <h2 className={`text-sm text-left ${isActiveLocal ? 'text-neutral-content' : 'text-base-content'}`}>
    {label}
</h2>
        <p className={`text-5xl font-bold mb-3 mt-2 text-center ${isActiveLocal ? 'text-neutral-content' : 'text-base-content'}`}>
        {time}
        </p>
        <div className="flex justify-between mb-2">
          {days.map((day, index) => (
            <label
              key={index}
              className="swap swap-flip"
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="checkbox"
                checked={activeDays.includes(index)}
                onChange={() => toggleDay(index)}
              />
              <div className="card swap-on w-5 h-5 flex items-center justify-center bg-accent text-accent-content">
                <span className="text-xs text-neutral">{day}</span>
              </div>
              <div className="card swap-off w-5 h-5 rounded flex items-center justify-center bg-ghost text-neutral-content">
                <span className="text-xs">{day}</span>
              </div>
            </label>
          ))}
        </div>

        <button 
          className="btn btn-error btn-square btn-xs absolute bottom-2"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
        <div className="absolute bottom-0 right-3" onClick={handleToggle}>
          <input
            type="checkbox"
            className="toggle toggle-accent"
            checked={isActiveLocal}
            onChange={() => {}}
          />
        </div>
      </div>

      {showPopup && (
        <div className="absolute top-full mt-2 w-48 p-2 bg-base-100 text-base-content rounded-lg shadow-lg">
          <p className="text-center">Popup content here!</p>
          <div className="text-center mt-4">
            <button className="btn btn-sm btn-primary" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alarm;