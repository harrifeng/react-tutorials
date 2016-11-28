import React from "react";

export default class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  render() {

    setTimeout(() => {
      this.setState({title: Math.random()});
    }, 1000);
    return (
        <h1> {this.state.title} </h1>
    );
  }
}
