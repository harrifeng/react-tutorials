import React from "react";

export default class Title extends React.Component {
  constructor() {
    super();
    this.name = "hfeng";
  }

  render() {
    return (
        <h1> {this.props.title} </h1>
    );
  }
}
