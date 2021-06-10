import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import apikey from './config';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      loading: true
    };
  }

  // Will call the fetchImagesResulsts on page load
  componentDidMount() {
    this.fetchImagesResults();
  }

  // Fetching the data from api. take a query param then will be added to the api link.
  // this funtion will be pass the search form 
  fetchImagesResults = (query='britney') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&extras=url_z&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          results: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => console.log('error fetching data', error));
  }
  
  render(){
    console.log(this.state.results)
    return (
      <div className="container">
        <BrowserRouter>
          <SearchForm onSearch={this.fetchImagesResults}/>
          <Nav />
          {this.state.loading ? <h2>Loading Content...</h2> : <PhotoContainer data={this.state.results}/>}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;