import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import apikey from './config';
import { BrowserRouter } from 'react-router-dom';

// const apiLinkTwo = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c4624fcae21b1113e8808ca17eb2ab90&tags=birds&text=+exotic&radius=10km&extras=url_z%2C+url_w&per_page=24&format=json&nojsoncallback=1';


const apiLink = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=birds&extras=url_z&per_page=24&format=json&nojsoncallback=1`;



class App extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    this.fetchImagesResults();
  }

  // Fetching the data from api
  fetchImagesResults = () => {
    axios.get(apiLink)
      .then(response => {
        this.setState({
          results: response.data.photos.photo
        });
      })
      .catch(error => console.log('error fetching data', error));
  }
  
  render(){
    console.log(this.state.results)
    return (
      <div className="container">
        <BrowserRouter>
          <SearchForm />
          <Nav />
          <PhotoContainer data={this.state.results}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;