import React, { Component } from "react";
import ReactDOM from "react-dom";
import { features } from "../camp-features.js";

class Features extends Component {
  constructor(props) {
    super();
  }
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
    console.log(props);
  }
  render() {
    const title = this.props.title;
    const presence = this.props.presence ? "We Got it" : "We ain't got it";
    const subFeatures = this.props.subFeatures.length;
    return (
      <div>
        <li>{title}, {presence}, {subFeatures}</li>
        <SubFeature sub={this.props.subFeatures} />
      </div>
    );
  }
}

class SubFeature extends Component {
  constructor(props) {
    super(props);
    debugger;
  }
  render() {
    const subFeature = this.props.sub.length > 0;
    const names = this.props.sub.map(sub => <p>sub.title</p>);
    return(
      'hello'
    );
  }
}

ReactDOM.render(<Features />, document.getElementById("app"));
