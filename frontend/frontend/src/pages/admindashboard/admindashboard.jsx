import Sidebar
from "../../components/sidebar";

import Header
from "../../components/header";

function AdminDashboard(){

 return(

  <div className="layout">

   <Sidebar/>

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