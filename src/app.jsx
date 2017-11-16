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

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = { displayFeatures: true };
    this.showFeatures = this.showFeatures.bind(this);
    this.toggleFeatures = this.toggleFeatures.bind(this);
  }
  toggleFeatures() {
    // if (this.props.subFeatures.length > 0) {
    //   this.setState({
    //     displayFeatures: !this.state.displayFeatures
    //   });
    // }
    console.log(this.showFeatures());
  }

  showFeatures() {
    let extra = [];
    var exp = "";
    if (this.props.subFeatures.length > 0) {
      exp = true;
      for (let i = 0; i < this.props.subFeatures.length; i++) {
        extra.push(<li>{this.props.subFeatures[i]}</li>);
      }
    } else {
      exp = false;
    }
    return exp;
  }
  render() {
    const title = this.props.title;
    const presence = this.props.presence ? ": Yes" : ": No";
    const subFeatures = this.props.subFeatures;
    const extra = [];
    const exp = this.showFeatures();
    if (this.props.subFeatures.length > 0) {
      //debugger;
      for (let i = 0; i < this.props.subFeatures.length; i++) {
        extra.push(this.props.subFeatures[i]);
      }
    } else {
      console.log("No extra features");
    }
    return (
        <li onClick={this.toggleFeatures}>
          {title}
          {presence}
          {extra.map(feature => (
            <ul
              key={feature.title}
              //style={{ display: this.state.displayFeatures ? "none" : "block" }}
            >
              <Feature
                title={feature.title}
                presence={feature.presence}
                subFeatures={feature.subfeatures}
                showFeatures={this.showFeatures}
              />
            </ul>
          ))}
        </li>
    );
  }
}

ReactDOM.render(<Features />, document.getElementById("app"));
