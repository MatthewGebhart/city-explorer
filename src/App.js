import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import MapCard from './components/MapCard.js';
import Weather from './components/Weather.js';
import Movies from './components/Movies.js';
import SearchForm from './components/SearchForm.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchQuery:'',
      lat: '',
      lon: '',
      weather: [],
      location:{},
      mapDisplay: '',
      moviesArray: [],
      error: false,
      errorMessage: 'Ya Done Errored',
    }
  }
 
  handleInput = (e) => {
      e.preventDefault();
      this.setState({searchQuery: e.target.value });
    };

  getLocation = async (e) => {
    try { 
      e.preventDefault();
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ}&q=${this.state.searchQuery}&format=json`;
      const res = await axios.get(API);
      console.log(`returned from server ${res.data[0].display_name}, ${res.data[0].lat}, ${res.data[0].lon}`);
      this.setState({location: res.data[0]}, async () => {
        let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ}&center=${res.data[0].lat},${res.data[0].lon}&zoom=11&size=300x300`;
        this.setState({mapDisplay: mapURL});
        this.weatherGetter();
        this.movieGetter();
      }); 
      this.setState({ error: false });
    
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
      this.setState({ errorMessage: error.message });
    }
    };

weatherGetter = async (lat, lon) => {
  
  try {
    let weatherGet = await axios.get(`http://localhost:3001/weather?query=${this.state.searchQuery}&lat=${this.state.location.lat}&lon=${this.state.location.lon}`);
    console.log(weatherGet.data);
    this.setState({ weather: weatherGet.data});
    
  } catch (error) {
    console.log(error);
    this.setState({ error: true });
    this.setState({ errorMessage: error.message });
  }
};

movieGetter = async () => {
  try {
    console.log(this.state.searchQuery);
    let movieURL = `http://localhost:3001/movies?query=${this.state.searchQuery}`; 
    console.log(movieURL);
    let movieGet = await axios.get(movieURL);
    console.log(this.state.searchQuery);
    console.log(movieGet); 
  //     {
  //     params: { query: this.state.searchQuery}
  // });
    this.setState({moviesArray: movieGet.data});
  } catch (error) {
    this.setState({ error: true });
    this.setState({ errorMessage: error.message })
  }
}

  render() {
    console.log(`the moviesArray is ${this.state.moviesArray}`);
    return (
    <Container>
      <SearchForm 
      handleInput={this.handleInput}
      getLocation={this.getLocation}
      ></SearchForm>

      {/* render Weather forecast */}
      {this.state.weather.length > 0  &&
        <>
        <h4>The city is: {this.state.location.display_name}</h4>
        <h6>The Latitude is: {this.state.location.lat}</h6>
        <h6>The Longitude is: {this.state.location.lon}</h6>
        {/* <MapCard></MapCard> */}
        <img src={this.state.mapDisplay} alt={this.state.location.display_name} ></img>
        <div>
        <Weather id="weather-forecast" weather={this.state.weather}/>
        </div>
        </>
      } 
      {this.state.error &&
        <h2> Whoopsie! something went wrong - {this.state.errorMessage}</h2>
        }

      {/* render Movie data */}
      {this.state.moviesArray.length > 0 &&
      <>
      <Movies></Movies>
      </>
      }
      <Movies></Movies>
    </Container>
  )
}
};

export default App;
