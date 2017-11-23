import React, { Component } from "react";
import Feature from "./Feature.jsx";
import Header from "./Header.jsx";
import { features } from "../camp-features.js";

const Features = () => (
  <div>
    <Header title="Forrest Hills Campsite" />
    <ul>
      {features.map(feature => (
        <Feature
          key={feature.title}
          title={feature.title}
          presence={feature.presence}
          subFeatures={feature.subfeatures}
          icon={feature.icon}
        />
      ))}
    </ul>
  </div>
);

export default Features;
