import React from 'react';

const Header = (props) => (
  <div className="header">
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
);

Header.defaultProps = {
  title: 'Selected Campsite',
  description: 'Feature List'
};

export default Header;
