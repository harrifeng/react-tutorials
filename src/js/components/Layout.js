import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "LayoutTItle"
    };
  }

  changeTitle = (title) => {
    this.setState({title})
  }

  render() {
    return (
      <div>
        {this.state.title}
        <Header title = {this.state.title} changeTitle={this.changeTitle}/>
        <Footer />
      </div>
    );
  }
}
