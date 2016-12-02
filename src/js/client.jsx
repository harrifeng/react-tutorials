import React from "react";
import ReactDOM from "react-dom";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'coconut'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDetault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">GrapeFruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
