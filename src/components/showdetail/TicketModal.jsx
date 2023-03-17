import { useRef, useState } from "react";
import { todayDate } from "../../utils/dates";

const TicketModal = ({ show, setToggleModal }) => {
  const emailRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const [seat, setSeat] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "ticket",
      JSON.stringify({
        id: Date.now(),
        date: dateRef.current.value,
        time: timeRef.current.value,
        email: emailRef.current.value,
        seat,
      })
    );
    alert(
      JSON.stringify({
        id: Date.now(),
        date: dateRef.current.value,
        time: timeRef.current.value,
        email: emailRef.current.value,
        seat,
      })
    );
  };

  return (
    <div className="ticket-modal">
      <div className="show-details wrapper">
        <img src={show?.image?.original} alt={show.name} />
      </div>
      <div className="ticket-form wrapper">
        <form onSubmit={handleSubmit}>
          <div>
            <h3>
              Movie: <span>{show.name}</span>
            </h3>
          </div>

          <div className="input-0">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              required
              placeholder="Enter Your Email"
            />
          </div>
          <div className="input-1">
            <label htmlFor="day">Day:</label>
            <input
              type="date"
              id="day"
              ref={dateRef}
              min={todayDate}
              required
            />
          </div>

          <div className="input-2">
            <label htmlFor="time">Time:</label>
            <select id="time" ref={timeRef} required>
              <option value="12:00">12:00 pm</option>
              <option value="14:00">02:00 pm</option>
              <option value="17:00">05:00 pm</option>
            </select>
          </div>

          <div className="input-3">
            <label htmlFor="seat">Seats:</label>
            <input
              type="number"
              value={seat}
              min="1"
              max="4"
              onChange={(e) => setSeat(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="book-btn">
            Book Ticket
          </button>
        </form>
      </div>
      <div className="close-btn" onClick={() => setToggleModal(false)}>
        <span>Close</span>
      </div>
    </div>
  );
};

export default TicketModal;
