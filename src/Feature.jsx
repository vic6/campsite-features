import React, { Component } from "react";
import ReactDOM from "react-dom";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = { displayFeatures: false };
    this.addExpClass = this.addExpClass.bind(this);
  }
  toggleFeatures(event) {
    if (event.target.className === "expandable") {
      event.stopPropagation();
      return this.setState(prevState => ({
        displayFeatures: !prevState.displayFeatures
      }));
    }
  }
  addExpClass() {
    var exp;
    this.props.subFeatures.length > 0 ? exp = "expandable" : exp = "not-expandable";
    return exp;
  }
  render() {
    const title = this.props.title;
    const presence = this.props.presence ? ": Yes" : ": No";
    const subFeatures = this.props.subFeatures;
    const subFeatureList = [];
    const icon = this.props.icon;
    const exp = this.addExpClass();

    if (this.props.subFeatures.length > 0) {
      for (let i = 0; i < this.props.subFeatures.length; i++) {
        subFeatureList.push(this.props.subFeatures[i]);
      }
    }

    return (
      <li className={exp} onClick={e => this.toggleFeatures(e)}>
        <i className={icon} aria-hidden="true" />
        {title}
        {presence}
        {subFeatureList.map(feature => (
          <ul
            key={feature.title}
            className={event.target.className}
            style={{
              display: this.state.displayFeatures ? "block" : "none"
            }}
          >
            <Feature
              title={feature.title}
              presence={feature.presence}
              subFeatures={feature.subfeatures}
            />
          </ul>
        ))}
      </li>
    );
  }
}

export default Feature;
