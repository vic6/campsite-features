import React, { Component } from "react";
import ReactDOM from "react-dom";
import Feature from "./Feature.jsx";
import Header from "./Header.jsx";
import { features } from "../camp-features.js";

class Features extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log(features);
    return (
      <div>
        <Header description={'Blah'}/>
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
