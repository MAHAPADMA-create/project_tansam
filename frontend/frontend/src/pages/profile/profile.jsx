import "./profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile-container">

      <div className="profile-card">

        <div className="profile-header">
          <div className="profile-avatar">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <h2>{user?.name}</h2>
          <p>{user?.role}</p>
        </div>

        <div className="profile-details">

          <div className="profile-row">
            <span>Name</span>
            <strong>{user?.name}</strong>
          </div>

          <div className="profile-row">
            <span>Email</span>
            <strong>{user?.email}</strong>
          </div>

          <div className="profile-row">
            <span>Age</span>
            <strong>{user?.age}</strong>
          </div>

          <div className="profile-row">
            <span>Role</span>
            <strong>{user?.role}</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;