import React, { Component } from "react";
import ReactDOM from "react-dom";
import Feature from "./Feature.jsx";
import { features } from "../camp-features.js";

class Features extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log(features);
    return (
      <div>
        <h1>Campground Blah</h1>
        <h2>List of features</h2>
        <ul>
          {features.map(feature => (
            <Feature
              key={feature.title}
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

export default Features;
