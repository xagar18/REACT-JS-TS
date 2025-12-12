import "./App.css";
import Greeting from "./components/Greeting";
import Profile from "./components/Profile";
import UpdateUser from "./components/UpdateUser";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="container">
        <Greeting />
        <div className="cards">
          <Profile />
          <UpdateUser />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
