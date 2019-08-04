import React from 'react';

/**
 * PageNotFound component will mount when rendered to the DOM.
 * @namespace PageNotFound
 * @return {string} JSX element
 */
const PageNotFound = () => {
  return(
    <div className="not-found">
      <h1>404 Page Not Found</h1>
      <p>Sorry, we can’t find the page you were looking for.</p>
    </div>
  )
}

export default PageNotFound;
