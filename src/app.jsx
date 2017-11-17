import React, { Component } from "react";
import ReactDOM from "react-dom";
import { features } from "../camp-features.js";

class Features extends Component {
  constructor(props) {
    super();
    //this.toggleFeatures = this.toggleFeatures.bind(this);
  }

  toggleFeatures() {
    //console.log(this.props.subFeatures);
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
    this.state = { displayFeatures: false };
    this.showFeatures = this.showFeatures.bind(this);
  }
  toggleFeatures(event) {
    // event.stopPropagation();
    // console.log(this.state.displayFeatures);
    // if (event.target.className === "Expandable" && !this.state.displayFeatures) {
    //   return this.setState({
    //     displayFeatures: true
    //   });
    // } else if (event.target.className === "Expandable" && this.props.subFeatures.length > 0 && !this.state.display) {
    //   console.log('hellkdsfkldsjfklsfklsf');
    //   return this.setState(prevState => ({
    //     displayFeatures: !prevState.displayFeatures
    //   }));
    // }
    if (event.target.className === "Expandable") {
      event.stopPropagation();
      return this.setState(prevState => ({
        displayFeatures: !prevState.displayFeatures
      }));
    }
  }

  showFeatures() {
    let extra = [];
    var exp = "";
    if (this.props.subFeatures.length > 0) {
      exp = "Expandable";
      for (let i = 0; i < this.props.subFeatures.length; i++) {
        extra.push(<li>{this.props.subFeatures[i]}</li>);
      }
    } else {
      exp = "Not expandable";
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
      for (let i = 0; i < this.props.subFeatures.length; i++) {
        extra.push(this.props.subFeatures[i]);
      }
    }

    return (
      <li className={exp} onClick={e => this.toggleFeatures(e)}>
        {title}
        {presence}: {exp}
        {extra.map(feature => (
          <ul
            key={feature.title}
            //className={exp}
            className={event.target.className}
            style={{
              display: this.state.displayFeatures ? "block" : "none"
            }}
          >
            <Feature
              title={feature.title}
              className="MajorDog"
              presence={feature.presence}
              subFeatures={feature.subfeatures}
              showFeatures={this.showFeatures}
              toggleFeatures={this.toggleFeatures}
            />
          </ul>
        ))}
      </li>
    );
  }
}

ReactDOM.render(<Features />, document.getElementById("app"));
