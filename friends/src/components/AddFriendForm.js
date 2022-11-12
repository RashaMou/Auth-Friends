import React, { useState } from "react";
import { connect } from "react-redux";
import { addFriend } from "./../actions";

const AddFriendForm = props => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addFriend(newFriend);
    setNewFriend({
      name: "",
      age: "",
      email: ""
    });
  };

  return (
    <form className="control add-friend-form" onSubmit={handleSubmit}>
      <label className="label" htmlFor="name"></label>
      <input
        type="text"
        className="input"
        name="name"
        onChange={handleChange}
        value={newFriend.name}
        placeholder="Name"
      />
      <label className="label" htmlFor="age"></label>
      <input
        type="text"
        className="input"
        name="age"
        onChange={handleChange}
        value={newFriend.age}
        placeholder="Age"
      />
      <label className="label" htmlFor="email"></label>
      <input
        type="text"
        className="input"
        name="email"
        onChange={handleChange}
        value={newFriend.email}
        placeholder="Email"
      />
      <button type="submit" className="button add-button">
        Add!
      </button>
    </form>
  );
};

export default connect(null, { addFriend })(AddFriendForm);
