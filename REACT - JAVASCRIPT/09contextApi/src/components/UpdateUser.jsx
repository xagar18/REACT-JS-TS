import { useState } from "react";
import { useUser } from "../context/UserContext";

function UpdateUser() {
  const { updateName, incrementAge, updateEmail } = useUser();
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const handleNameUpdate = () => {
    if (nameInput.trim()) {
      updateName(nameInput);
      setNameInput("");
    }
  };

  const handleEmailUpdate = () => {
    if (emailInput.trim()) {
      updateEmail(emailInput);
      setEmailInput("");
    }
  };

  return (
    <div className="card">
      <h2>Update User</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter new name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <button onClick={handleNameUpdate}>Update Name</button>
      </div>

      <div className="input-group">
        <input
          type="email"
          placeholder="Enter new email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <button onClick={handleEmailUpdate}>Update Email</button>
      </div>

      <div className="input-group">
        <button onClick={incrementAge} className="full-width">
          Increment Age
        </button>
      </div>
    </div>
  );
}

export default UpdateUser;
