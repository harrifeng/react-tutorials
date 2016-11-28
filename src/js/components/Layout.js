import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { name: "Will"};
  }

  render() {

    const title = "welcome will";
    return (
        <div>
        <Header title = {title}/>
        <Footer />
        </div>
    );
  }
}
