import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3002/api/appointments";

function AdminAppointments() {

  const [data, setData] = useState([]);

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    const res = await axios.get(`${BASE_URL}/all`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(`${BASE_URL}/status/${id}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    fetchData();
  };

  return (
    <div className="dashboard-container">

      <h2>All Appointments</h2>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.meeting_title}</td>
              <td>{item.meeting_date}</td>
              <td>{item.status}</td>

              <td>
                <button onClick={() => updateStatus(item.id, "Approved")}>
                  Approve
                </button>

                <button onClick={() => updateStatus(item.id, "Rejected")}>
                  Reject
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default AdminAppointments;