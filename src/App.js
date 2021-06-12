import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import apikey from './config';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// App components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      carResults: [],
      birdsResults: [],
      computerResults:[],

      loading: true
      
    };
  }

  // Will call the fetchImagesResulsts on page load
  componentDidMount() {
    this.fetchImagesResults();
    this.fetchCars();
    this.fetchBirds();
    this.fetchComputers();
  }

  // Fetching the data from api. take a query param then will be added to the api link.
  // this funtion will be pass the search form 
  fetchImagesResults = (query = 'britney') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&extras=url_z&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          results: response.data.photos.photo,
          loading: false,
        });
      })
      .catch(error => console.log('error fetching data', error));
  }
  


// Fetch cars 
fetchCars = () => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=cars&extras=url_z&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        carResults: response.data.photos.photo,
        loading: false,
      });
    })
    .catch(error => console.log('error fetching data', error));
}

// Fetch birds

fetchBirds = () => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=birds&extras=url_z&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        birdsResults: response.data.photos.photo,
        loading: false,
      });
    })
    .catch(error => console.log('error fetching data', error));
}

// Fetch Computers

fetchComputers = () => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=computers&extras=url_z&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        computerResults: response.data.photos.photo,
        loading: false,
      });
    })
    .catch(error => console.log('error fetching data', error));
}


  render() {
    console.log(this.state.results)
    return (
      <BrowserRouter>
        <div className="container">
            <SearchForm onSearch={this.fetchImagesResults}/> 
            <Nav />
              <Switch>
              <Route path= "/search/cars" render={ () => <PhotoContainer data={this.state.carResults} onClick={this.state.fetchCars}/>} />
              <Route path= "/search/birds" render={ () => <PhotoContainer data={this.state.birdsResults} onClick={this.state.fetchBirds}/>} />
              <Route path= "/search/computers" render={ () => <PhotoContainer data={this.state.computerResults} onClick={this.state.fetchComputers}/>} />
              
              {this.state.loading ? <h2>Loading Content...</h2> : <PhotoContainer data={this.state.results}/>}
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;