import { h } from 'preact';
import { useState } from 'preact/hooks';

const Tes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const handleCardClick = () => {
    setIsOpen(true);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body" onClick={handleCardClick}>
          <h2 className="card-title">Choose Options</h2>
          <div>
            <label
              className="swap swap-flip text-9xl"
              onClick={(e) => e.stopPropagation()} // Prevent card click event
            >
              <input
                type="checkbox"
                name="option1"
                checked={checkedItems.option1 || false}
                onChange={handleCheckboxChange}
              />
              <div className="swap-on">😈</div>
              <div className="swap-off">😇</div>
            </label>
            <label
              className="swap swap-flip text-9xl"
              onClick={(e) => e.stopPropagation()} // Prevent card click event
            >
              <input
                type="checkbox"
                name="option2"
                checked={checkedItems.option2 || false}
                onChange={handleCheckboxChange}
              />
              <div className="swap-on">😈</div>
              <div className="swap-off">😇</div>
            </label>
            <label
              className="swap swap-flip text-9xl"
              onClick={(e) => e.stopPropagation()} // Prevent card click event
            >
              <input
                type="checkbox"
                name="option3"
                checked={checkedItems.option3 || false}
                onChange={handleCheckboxChange}
              />
              <div className="swap-on">😈</div>
              <div className="swap-off">😇</div>
            </label>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal modal-open">
            <div className="modal-box">
              <h2 className="font-bold text-lg">Modal Title</h2>
              <p>This is a simple popup!</p>
              <div className="modal-action">
                <button className="btn" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tes;
