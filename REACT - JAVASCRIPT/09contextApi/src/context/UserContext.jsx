import { createContext, useContext, useState } from "react";

// Step 1: Create Context
const UserContext = createContext();

// Step 2: Create Provider Component
export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Sagar",
    age: 20,
    email: "sagaryadav@gmail.com",
  });

  const updateName = (newName) => {
    setUser((prev) => ({ ...prev, name: newName }));
  };

  const incrementAge = () => {
    setUser((prev) => ({ ...prev, age: prev.age + 1 }));
  };

  const updateEmail = (newEmail) => {
    setUser((prev) => ({ ...prev, email: newEmail }));
  };

  return (
    <UserContext.Provider
      value={{ user, updateName, incrementAge, updateEmail }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Step 3: Create Custom Hook for easy access
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
