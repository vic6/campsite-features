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
        <h2>List of features</h2>
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
    this.showFeatures = this.showFeatures.bind(this);
  }
  showFeatures() {
    let extra = [];
    if (this.props.subFeatures.length > 0) {
      //debugger;
      for (let i = 0; i < this.props.subFeatures.length; i++) {
        extra.push(<li>{this.props.subFeatures[i]}</li>);
      }
    } else {
      console.log("No extra features");
    }
    return extra;
    //console.log(extra);
  }
  render() {
    const title = this.props.title;
    const presence = this.props.presence ? ": Yes" : ": No";
    const subFeatures = this.props.subFeatures;
    const extra = [];
    if (this.props.subFeatures.length > 0) {
      //debugger;
      for (let i = 0; i < this.props.subFeatures.length; i++) {
        extra.push(this.props.subFeatures[i].title);
      }
    } else {
      console.log("No extra features");
    }
    return (
      <div>
        <li onClick={this.showFeatures}>
          {title}
          {presence}
          <ul>{extra.map(item => <li>{item}</li>)}</ul>
        </li>
      </div>
    );
  }
}

class SubFeature extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const subFeature = this.props.sub.length > 0;
    const names = this.props.sub.map(sub => <p>sub.title</p>);
    return <li>This is a Subfeature</li>;
  }
}

ReactDOM.render(<Features />, document.getElementById("app"));
