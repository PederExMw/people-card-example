import React, { Component } from "react";

const UserContext = React.createContext();

export class UserProvider extends Component {
  render() {
    return (
      <UserContext.Provider value={userArray}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
const userConsumer = UserContext.Consumer;
export default userConsumer;
