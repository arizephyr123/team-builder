import React from "react";
import { useState } from "react";

import "./App.css";
import MemberForm from "./Components/Form";
import Members from "./Components/Members";

function App() {
  const [members, setMembers] = useState([
    {
      name: "Mychal Hall",
      email: "mychal@gmail.com",
      role: "Team Lead/Fearless Leader"
    }, 
    {
      name: "Nathan Melby",
      email: "nathan@gmail.com",
      role: "UI/UX Designer"
    }, 
    {
      name: "Sandy Kimball",
      email: "sandy@gmail.com",
      role: "Full Stack Developer/UI Designer"
    }, 
    {
      name: "Michael McGuiness",
      email: "Michael@gmail.com",
      role: "Full Stack Developer/MBA"
    }, 
    {
      name: "Chris Reyes",
      email: "chris@gmail.com",
      role: "Full Stack Developer/Sommelier"
    }, 
    {
      name: "Greg Poirier",
      email: "greg@gmail.com",
      role: "Full Stack Developer/Outdoorsman"
    }, 
    {
      name: "Daniel Firpo",
      email: "daniel@gmail.com",
      role: "Full Stack Developer/Chill Guy"
    }, {
      name: "Arielle Hollingsworth",
      email: "arielle@gmail.com",
      role: "Full Stack Developer/Master Gardener"
    }
  ]);

  const addNewMember = member => {
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
        <MemberForm addNewMember={addNewMember}/>
      </header>
      <Members members={members}/>
    </div>
  );
}

export default App;
