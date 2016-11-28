import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  constructor() {
    super();
    this.name = Math.random();
  }

  render() {
    return (
        <h1>It's {this.name} now!</h1>
    );
  }
}

ReactDOM.render(<Layout />,
                document.getElementById('app'));
