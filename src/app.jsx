import React from "react";
import ReactDOM from "react-dom";
import preload from '../camp-features.js';

class Features extends React.Component {
  render() {
    console.log("hello");
    return (
      <div>
        <h1>Campground Features</h1>
        <ul>
          <li>Toilet</li>
          <li>Pets Allowed</li>
          <li>Ice cream</li>
          <li>Paper</li>
          <li>Blah and sauce</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Features />, document.getElementById("app"));
