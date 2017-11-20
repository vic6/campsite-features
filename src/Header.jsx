import React from 'react';

const Header = (props) => (
  <div className="header">
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
);

Header.defaultProps = {
  title: 'Amazing Campground',
  description: 'Feature List'
};

export default Header;
