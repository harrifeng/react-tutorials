import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {
  constructor() {
    super();
    this.name = "hfeng";
  }

  render() {
    return (
        <Title title = {this.props.title}/>
    );
  }
}
