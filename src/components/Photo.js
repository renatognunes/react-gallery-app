import React from 'react';

/**
 * Photo component will mount when rendered to the DOM.
 * @namespace Photo
 * @return {string} JSX element
 */

 /**
 * @typedef {object} Props
 * @prop {string} src
 */
const Photo = (props) => (
  <li>
    <img src={props.url} alt="" />
  </li>
);

export default Photo;