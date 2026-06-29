import { useState } from "react";
import "./appointment.css";

function Appointment() {
  const [form, setForm] = useState({
    meeting_title: "",
    meeting_date: "",
    meeting_time: "",
    meeting_type: "",
    description: ""
  });

  const token = localStorage.getItem("token");

  // Handle Input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Book Appointment
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3002/api/appointments/book",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        setForm({
          meeting_title: "",
          meeting_date: "",
          meeting_time: "",
          meeting_type: "",
          description: ""
        });

      } else {
        alert(data.message);
      }

    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="appointment-container">

      <div className="booking-section">

        <h2>Book Appointment</h2>

        <form
          className="appointment-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="meeting_title"
            placeholder="Meeting Title"
            value={form.meeting_title}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="meeting_date"
            value={form.meeting_date}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="meeting_time"
            value={form.meeting_time}
            onChange={handleChange}
            required
          />

          <select
            name="meeting_type"
            value={form.meeting_type}
            onChange={handleChange}
            required
          >
            <option value="">Select Meeting Type</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>

          <textarea
            name="description"
            placeholder="Description"
            rows="4"
            value={form.description}
            onChange={handleChange}
          />

          <button type="submit">
            Book Appointment
          </button>

        </form>

      </div>

    </div>
  );
}

export default Appointment;