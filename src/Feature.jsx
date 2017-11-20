import React, { Component } from "react";
import ReactDOM from "react-dom";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = { displayFeatures: false };
    this.showFeatures = this.showFeatures.bind(this);
  }
  toggleFeatures(event) {
    if (event.target.className === "expandable") {
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
      exp = "expandable";
      for (let i = 0; i < this.props.subFeatures.length; i++) {
        extra.push(<li>{this.props.subFeatures[i]}</li>);
      }
    } else {
      exp = "not-expandable";
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
              presence={feature.presence}
              subFeatures={feature.subfeatures}
              //showFeatures={this.showFeatures}
              //toggleFeatures={this.toggleFeatures}
            />
          </ul>
        ))}
      </li>
    );
  }
}

export default Feature;
