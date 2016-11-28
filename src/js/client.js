import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  getVal() {
    return 5;
  }
  render() {
    return (
        <h1>It working {this.getVal()} now!</h1>
    );
  }
}

ReactDOM.render(<Layout />,
                document.getElementById('app'));
