import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchFriends, displayAddFriendForm, addFriend } from "./../actions";

const FriendList = props => {
  useEffect(() => {
    props.fetchFriends();
  }, []);

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

  return (
    <div>
      {!props.isAdding && (
        <button
          className="display-form-button button"
          onClick={props.displayAddFriendForm}
        >
          Add Friend!
        </button>
      )}

      {props.isAdding && (
        <form
          className="control add-friend-form"
          onSubmit={e => {
            e.preventDefault();
            props.addFriend(newFriend);
          }}
        >
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
      )}
      <div className="card-container">
        {props.friends.map(friend => {
          return (
            <div className="card">
              <h3 key={friend.id} className="title is-4">
                {friend.name}
              </h3>
              <ul className="friend-info">
                <li>{friend.age} years old</li>
                <li>{friend.email}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    friends: state.friend.friends,
    isAdding: state.friend.isAdding,
    newFriend: state.friend.newFriend
  };
};

export default connect(mapStateToProps, {
  fetchFriends,
  displayAddFriendForm,
  addFriend
})(FriendList);
