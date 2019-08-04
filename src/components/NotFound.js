import React from 'react';

/**
 * NotFound component will mount when rendered to the DOM.
 * @namespace NotFound
 * @return {string} JSX element
 */
const NotFound = () => (
  <div className="not-results">
    <h3>No Results Found</h3>
    <p>You search did not return any results. Please try again.</p>
  </div>
);

export default NotFound;