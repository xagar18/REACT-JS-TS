import { useUser } from "../context/UserContext";

function Greeting() {
  const { user } = useUser();

  return (
    <div className="greeting">
      <h1>Hello, {user.name}!</h1>
    </div>
  );
}

export default Greeting;
