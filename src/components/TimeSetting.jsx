const TimeSetting = ({
  selectedTime,
  setSelectedTime,
  label,
  setLabel,
  activeDays,
  toggleDay,
  onCancel,
  onOk,
  days = [],
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="modal modal-open">
        <div className="modal-box">
          <h2 className="font-semibold text-lg mb-2">Label</h2>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
          <h2 className="font-semibold text-lg mb-2 mt-4">Select Time</h2>
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="input input-bordered w-full"
          />
          <h2 className="font-semibold text-lg mb-2 mt-4">Repeat</h2>
          <div className="flex justify-between mb-2">
            {days.map((day, index) => (
              <label key={index} className="swap swap-flip">
                <input
                  type="checkbox"
                  checked={activeDays.includes(index)}
                  onChange={() => toggleDay(index)}
                />
                <div className="swap-on w-8 h-8 flex items-center justify-center bg-accent text-accent-content rounded-full">
                  <span className="text-xs">{day}</span>
                </div>
                <div className="swap-off w-8 h-8 flex items-center justify-center bg-base-300 text-base-content rounded-full">
                  <span className="text-xs">{day}</span>
                </div>
              </label>
            ))}
          </div>

          <h2 className="font-semibold text-lg mb-2 mt-4">Ringtone</h2>
          <details className="dropdown w-full">
            <summary className="btn w-full flex justify-between items-center m-1">
              <span>Open or Close</span>
              <div className="swap swap-rotate">
                <input type="checkbox" />
                <div className="swap-on">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <div className="swap-off">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 12h16M12 4v16"
                    />
                  </svg>
                </div>
              </div>
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-full p-2 shadow">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>

          <div className="modal-action">
            <button className="btn" onClick={onCancel}>
              Cancel
            </button>
            <button className="btn btn-accent" onClick={onOk}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSetting;
