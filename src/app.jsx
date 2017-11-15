import React, { Component } from "react";
import ReactDOM from "react-dom";
import { features } from "../camp-features.js";

class Features extends Component {
  render() {
    console.log(features);
    return (
      <div>
        <h1>Campground Features</h1>
        <ul>
          {features.map(feature => (
            <Feature
              title={feature.title}
              presence={feature.presence}
              subFeatures={feature.subfeatures}
            />
          ))}
        </ul>
      </div>
    );
  }
}

class Feature extends Component {
  constructor(props) {
    super(props);
  }
  handleFeatureClick(event) {
    console.log(event.target);
  }
  render() {
    return (
      <div>
        <ul>
          <li onClick={this.handleFeatureClick}>{this.props.title}</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Features />, document.getElementById("app"));
