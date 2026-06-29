import { useState, useEffect } from "react";

function EmployeeDashboard() {

  const [form, setForm] = useState({
    meeting_title: "",
    meeting_date: "",
    meeting_time: "",
    meeting_type: "",
    description: ""
  });

  const [appointments, setAppointments] = useState([]);

  const token = localStorage.getItem("token");

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // BOOK APPOINTMENT (FIXED)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please login again");
      return;
    }

    const response = await fetch(
      "http://localhost:3002/api/appointments/book",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`   // ✅ FIXED
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
      fetchAppointments();
    } else {
      alert(data.message || "Error booking appointment");
    }
  };

  // FETCH APPOINTMENTS (FIXED)
  const fetchAppointments = async () => {

    if (!token) return;

    const response = await fetch(
      "http://localhost:3002/api/appointments/my",
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`   // ✅ FIXED
        }
      }
    );

    const data = await response.json();

    if (response.ok) {
      setAppointments(data);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div style={{ padding: "20px" }}>

      <h2>Employee Dashboard</h2>

      {/* BOOK APPOINTMENT */}
      <h3>Book Appointment</h3>

      <form onSubmit={handleSubmit}>

        <input
          name="meeting_title"
          placeholder="Title"
          value={form.meeting_title}
          onChange={handleChange}
        />

        <input
          type="date"
          name="meeting_date"
          value={form.meeting_date}
          onChange={handleChange}
        />

        <input
          type="time"
          name="meeting_time"
          value={form.meeting_time}
          onChange={handleChange}
        />

        <input
          name="meeting_type"
          placeholder="Type (Online/Offline)"
          value={form.meeting_type}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit">
          Book Appointment
        </button>

      </form>

      {/* MY APPOINTMENTS */}
      <h3>My Appointments</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((item) => (
            <tr key={item.id}>
              <td>{item.meeting_title}</td>
              <td>{item.meeting_date}</td>
              <td>{item.meeting_time}</td>
              <td>{item.meeting_type}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default EmployeeDashboard;