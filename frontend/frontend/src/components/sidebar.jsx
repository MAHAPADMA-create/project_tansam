import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {

 return(

  <div className="sidebar">

   <h3>Admin Panel</h3>

   <ul>

    <li>Dashboard</li>
   <li>
      <Link to="/users">
        Users
      </Link>
    </li>

    <li>
      <Link to="/roles">
        Roles
      </Link>
    </li>

    <li>  <Link to="/admins">
        Admins
      </Link></li>

    <li>Settings</li>

   </ul>

  </div>

 );

}

export default Sidebar;