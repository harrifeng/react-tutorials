import React from "react";
import ReactDOM from "react-dom";

function NumberList(props) {

  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );

  return (
    <ul>
      {listItems}
    </ul>
  )
}

ReactDOM.render(
  <NumberList numbers={[1, 2, 3, 4, 5]} />,
  document.getElementById('root')
);
