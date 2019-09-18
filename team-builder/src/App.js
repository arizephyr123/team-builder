import React from "react";
import { useState } from "react";

import "./App.css";
import Members from "./Components/Members";
import MemberForm from "./Components/Form";

function App() {
  const [members, setMembers] = useState([
    {
      name: "Arielle Hollingsworth",
      email: "arielle@gmail.com",
      role: "Web23 Student"
    }
  ]);

  const addnewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
        <MemberForm addnewMember={addnewMember}/>
        {/* <Members members={members}/> */}
      </header>
    </div>
  );
}

export default App;
