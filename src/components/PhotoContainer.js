import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import apiKey from '../config';
import axios from 'axios';

/**
 * PhotoContainer component will mount search results to the DOM.
 * @namespace PhotoContainer
 * @extends React Component
 */
export default class PhotoContainer extends Component {

  /** 
   * Will create the main state of the App.
   * @constructor
   * @type {object}
   */
  constructor() {
    super();
    this.state = {
      images: [],
      isLoading: true
    } 
  } 

  /**
   * fetchData uses Axios to fetch data from API and stores it into state's object.
   * @memberof PhotoContainer
   * @method fetchData
   * @param {string} get
   */
  fetchData = (query = "travel") => {
    axios
      .get(`https://api.unsplash.com/search/collections?per_page=24&page=1&query=${query}&client_id=${apiKey}`)
      .then(response => {
        this.setState({
          images: response.data.results,
          isLoading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  /**
   * resetState reset state to its initial values.
   * @memberof PhotoContainer
   * @method resetState
   */
  resetState = () => {
    this.setState({
      images: [],
      isLoading: true
    })
  }

  /**
   * componentDidMount calls fetchData when element is first mount.
   * @memberof PhotoContainer
   * @method componentDidMount
   * @inner
    * @func fetchData
    * @param {string} match.params
   */
  componentDidMount() {
    this.fetchData(this.props.match.params.query)
  }

  /**
   * componentDidUpdate watches for path changed through history object.
   * @memberof PhotoContainer
   * @method componentDidUpdate
   * @inner
    *  @func resetState
    *  @param {string} match.params
   */
  componentDidUpdate(prevProps) {
    if (this.props.location.key !== prevProps.location.key) {
      this.resetState();
      this.fetchData(this.props.match.params.query);
    }
  } 

  /**
   * Render images to the DOM, mapping each element from search results.
   * If there is results from the search, it will render the image
   * Else will render NotFound component. 
   * @memberof App component
   * @return {string} - JSX element
   */
  render () {
    const data = this.state.images;
    let images;
    if(data.length > 0) {
      images = data.map( image => <Photo url={image.cover_photo.urls.small} key={image.id}/>)
    } else if (!this.state.isLoading) {
      images = <NotFound />
    }

    return (
      <div className="photo-container">
        <h2>{this.props.match.params.query ? 'Results of ' : ''}<span>{this.props.match.params.query}</span></h2>
        {this.state.isLoading ? <h1>Loading...</h1> : null}
        <ul>
          {images}
        </ul>
      </div>
    )
  }
}