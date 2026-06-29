import { useState, useEffect } from "react";
import "./appointment.css";

function Appointment() {

  const [form, setForm] = useState({
    meeting_title: "",
    meeting_date: "",
    meeting_time: "",
    meeting_type: "",
    description: ""
  });

  const [appointments, setAppointments] = useState([]);

  const token = localStorage.getItem("token");

  // handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // book appointment
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3002/api/appointments/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (res.ok) {
      alert("Appointment booked!");
      fetchAppointments();
    } else {
      alert(data.message);
    }
  };

  // fetch my appointments
  const fetchAppointments = async () => {
    const res = await fetch("http://localhost:3002/api/appointments/my", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    const data = await res.json();

    if (res.ok) {
      setAppointments(data);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="appointment-container">

      <h2>Book Appointment</h2>

      <form onSubmit={handleSubmit} className="appointment-form">

        <input
          name="meeting_title"
          placeholder="Meeting Title"
          onChange={handleChange}
        />

        <input
          type="date"
          name="meeting_date"
          onChange={handleChange}
        />

        <input
          type="time"
          name="meeting_time"
          onChange={handleChange}
        />

        <input
          name="meeting_type"
          placeholder="Online / Offline"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <button type="submit">
          Book
        </button>

      </form>

      <h2>My Appointments</h2>

      <table className="appointment-table">

        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((a) => (
            <tr key={a.id}>
              <td>{a.meeting_title}</td>
              <td>{a.meeting_date}</td>
              <td>{a.meeting_time}</td>
              <td>{a.meeting_type}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Appointment;