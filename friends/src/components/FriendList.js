import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFriends, displayAddFriendForm } from "./../actions";
import AddFriendForm from "./AddFriendForm";

const FriendList = props => {
  useEffect(() => {
    props.fetchFriends();
  }, []);

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

      {props.isAdding && <AddFriendForm />}

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
  displayAddFriendForm
})(FriendList);
