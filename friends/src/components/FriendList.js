import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFriends } from "./../actions";

const FriendList = props => {
  useEffect(() => {
    props.fetchFriends();
  }, []);

  console.log("props.friends", props.friends);

  return <h3>FriendList</h3>;
};

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { fetchFriends })(FriendList);
