import AdminSidebar
from "../../../components/adminsidebar";

import Header
from "../../../components/Header";

function AdminDashboard(){

 return(

  <div className="layout">

   <AdminSidebar/>

   <div className="content">

    <Header/>

    <h2>
      Admin Dashboard
    </h2>

   </div>

  </div>

 );

}

export default AdminDashboard;