import { useEffect, useState } from "react";

function AdminAppointments() {

  const [appointments, setAppointments] = useState([]);

  const fetchAll = async () => {

    const res = await fetch(
      "http://localhost:3002/api/appointments/all",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    const data = await res.json();
    setAppointments(data);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Appointments (Admin)</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Type</th>
            <th>Employee ID</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((item) => (
            <tr key={item.id}>
              <td>{item.meeting_title}</td>
              <td>{item.meeting_date}</td>
              <td>{item.meeting_time}</td>
              <td>{item.meeting_type}</td>
              <td>{item.employee_id}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default AdminAppointments;