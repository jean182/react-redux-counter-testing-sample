import React from "react";
import { connect } from "react-redux";
import { usersByAgeSelector } from "./redux/modules/user/users";

export const UserList = (props) => {
  const { users } = props;
  return users.map(user => {
    return (
      <div key={user.age}>
        <p>{user.name} has {user.age} years</p>
      </div>
    )
  });
};

const mapStateToProps = state => ({
  users: usersByAgeSelector(state)
});

export default connect(mapStateToProps)(UserList);
