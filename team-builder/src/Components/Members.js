import React from "react";

const Members = props => {
  return (
    <div className="display-wrapper">
      {props.members.map(member => (
        <div className="member-card">
          <div className="member-data">
            <h2>Name: {member.name}</h2>
            <h3>Email: {member.email}</h3>
            <h3>Role: {member.role}</h3>
          </div>
          <div>
          <button>Dummy Edit Button</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Members;
