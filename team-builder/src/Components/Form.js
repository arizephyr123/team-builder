import React, { useState } from "react";

const MemberForm = props => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });
  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({
      name: "",
      email: "",
      role: ""
    });
  };

  return (
    <form className="form-wrapper" onSubmit={submitForm}>
      <div className="form-entry-div">
        <label htmlFor="name">Name</label>
        <input
          className="text-input"
          id="name"
          type="text"
          name="name"
          onChange={handleChanges}
          value={member.name}
        />
      
        <label htmlFor="email">Email</label>
        <input
          className="text-input"
          id="email"
          type="text"
          name="email"
          onChange={handleChanges}
          value={member.email}
        />
      
        <label htmlFor="role">Role</label>
        <input
          className="text-input"
          id="role"
          type="text"
          name="role"
          onChange={handleChanges}
          value={member.role}
        />
      </div>
      <div>
      <button type="submit">Add Team Member</button>
      </div>
    </form>
  );
};

export default MemberForm;
