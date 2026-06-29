import { useState, useEffect, useCallback } from "react";
import "./myappointments.css";
import EmployeeSidebar from "../../components/employeesidebar";

function MyAppointments() {

  const [appointments, setAppointments] = useState([]);

  const token = localStorage.getItem("token");

  const fetchAppointments = useCallback(async () => {

    try {

      const response = await fetch(
        "http://localhost:3002/api/appointments/my",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      if (response.ok) {
        setAppointments(data);
      }

    } catch (err) {
      console.log(err);
    }

  }, [token]);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  return (

    <div className="employee-layout">

      <EmployeeSidebar />

      <div className="employee-main">

        <h1>My Appointments</h1>

        <div className="appointment-card">

          <table className="appointment-table">

            <thead>

              <tr>

                <th>Meeting</th>
                <th>Date</th>
                <th>Time</th>
                <th>Type</th>
                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {appointments.length > 0 ? (

                appointments.map((item) => (

                  <tr key={item.id}>

                    <td>{item.meeting_title}</td>

                    <td>
                      {new Date(item.meeting_date).toLocaleDateString()}
                    </td>

                    <td>{item.meeting_time}</td>

                    <td>{item.meeting_type}</td>

                    <td>

                      <span
                        className={`status ${item.status || "pending"}`}
                      >

                        {item.status || "Pending"}

                      </span>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="5"
                    className="no-data"
                  >
                    No appointments found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default MyAppointments;