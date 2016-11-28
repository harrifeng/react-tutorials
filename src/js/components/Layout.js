import React from "react";
import Header from "./Header";

export default class Layout extends React.Component {

  render() {
    let list = [
        <Header />,
        <Header />,
        <Header />,
    ];
    return (
      <div>
        { list }
      </div>
    );
  }
}
