import { useState, useEffect } from "react";
import TimeSetting from "./TimeSetting";

const AddNew = ({
  onAdd,
  isEditing,
  initialTime,
  initialLabel,
  initialActiveDays,
  onCancel,
}) => {
  const [showPopup, setShowPopup] = useState(isEditing);
  const [selectedTime, setSelectedTime] = useState(initialTime || "12:00");
  const [label, setLabel] = useState(initialLabel || "");
  const [activeDays, setActiveDays] = useState(initialActiveDays || []);

  const days = ["S", "M", "T", "W", "T", "F", "S"];

  useEffect(() => {
    if (isEditing) {
      setShowPopup(true);
      setSelectedTime(initialTime);
      setLabel(initialLabel);
      setActiveDays(initialActiveDays);
    }
  }, [isEditing, initialTime, initialLabel, initialActiveDays]);

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const handleOkClick = () => {
    if (label.trim()) {
      onAdd(selectedTime, label, activeDays);
      resetForm();
    }
  };

  const handleCancelClick = () => {
    resetForm();
    if (onCancel) onCancel();
  };

  const resetForm = () => {
    setShowPopup(false);
    setLabel("");
    setSelectedTime("12:00");
    setActiveDays([]);
  };

  const toggleDay = (index) => {
    setActiveDays((prev) =>
      prev.includes(index)
        ? prev.filter((day) => day !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="relative">
      {!isEditing && (
        <div
          className="card bg-ghost no-animation text-neutral-content p-4 w-40 h-40 relative cursor-pointer border-dashed border-2 border-gray-400 flex items-center justify-center"
          onClick={handleCardClick}
        >
          <h1 className="text-6xl text-base-content">+</h1>
        </div>
      )}

      {showPopup && (
        <TimeSetting
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          label={label}
          setLabel={setLabel}
          activeDays={activeDays}
          toggleDay={toggleDay}
          onCancel={handleCancelClick}
          onOk={handleOkClick}
          days={days} // Pastikan prop ini diteruskan
        />
      )}
    </div>
  );
};

export default AddNew;
