import { useUser } from "../context/UserContext";

function Profile() {
  const { user } = useUser();

  return (
    <div className="card">
      <h2>Profile</h2>
      <div className="info">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
}

export default Profile;
