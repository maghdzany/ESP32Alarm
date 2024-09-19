import React, { useState } from 'react';
import Alarm from '../components/Alarm';
import AddNew from '../components/AddNew';

const Home = () => {
  const [alarms, setAlarms] = useState([]);
  const [editingAlarm, setEditingAlarm] = useState(null);

  const handleAddAlarm = (time, label) => {
    const newAlarm = {
      id: Date.now(),
      time,
      label,
      isActive: true,
      activeDays: [1, 2, 3, 4, 5] // Default to weekdays
    };
    setAlarms(prevAlarms => [...prevAlarms, newAlarm]);
  };

  const handleEditAlarm = (id, time, label) => {
    setAlarms(prevAlarms => prevAlarms.map(alarm => 
      alarm.id === id ? { ...alarm, time, label } : alarm
    ));
    setEditingAlarm(null);
  };

  const handleDeleteAlarm = (id) => {
    setAlarms(prevAlarms => prevAlarms.filter(alarm => alarm.id !== id));
  };

  const handleToggleAlarm = (id) => {
    setAlarms(prevAlarms => prevAlarms.map(alarm => 
      alarm.id === id ? { ...alarm, isActive: !alarm.isActive } : alarm
    ));
  };

  const handleAlarmClick = (alarm) => {
    setEditingAlarm(alarm);
  };

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">My Alarms</h1> */}
      <div className="grid grid-cols-2 gap-4 lg:gap-12 place-items-center md:grid-cols-4 lg:grid-cols-5">
        {alarms.map(alarm => (
          <Alarm
            key={alarm.id}
            time={alarm.time}
            label={alarm.label}
            active={alarm.isActive}
            activeDays={alarm.activeDays}
            onDelete={() => handleDeleteAlarm(alarm.id)}
            onToggle={() => handleToggleAlarm(alarm.id)}
            onClick={() => handleAlarmClick(alarm)}
          />
        ))}
        <AddNew onAdd={handleAddAlarm} />
      </div>
      {editingAlarm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Edit Alarm</h2>
            <input
              type="text"
              defaultValue={editingAlarm.label}
              className="input input-bordered w-full mb-2"
              id="editLabel"
            />
            <input
              type="time"
              defaultValue={editingAlarm.time}
              className="input input-bordered w-full mb-2"
              id="editTime"
            />
            <div className="flex justify-end">
              <button
                className="btn btn-primary mr-2"
                onClick={() => {
                  const newLabel = document.getElementById('editLabel').value;
                  const newTime = document.getElementById('editTime').value;
                  handleEditAlarm(editingAlarm.id, newTime, newLabel);
                }}
              >
                Save
              </button>
              <button
                className="btn"
                onClick={() => setEditingAlarm(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;