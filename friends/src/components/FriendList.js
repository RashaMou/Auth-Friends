import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFriends } from "./../actions";

const FriendList = props => {
  useEffect(() => {
    props.fetchFriends();
  }, []);

  console.log("props.friends", props.friends);

  return (
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
  );
};

const mapStateToProps = state => {
  return {
    friends: state.friend.friends
  };
};

export default connect(mapStateToProps, { fetchFriends })(FriendList);
