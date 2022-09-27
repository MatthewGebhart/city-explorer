import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchQuery:'',
      location:{},
      mapDisplay: '',
      error: false,
      errorMessage: 'Ya Done Errored',
    }
  }

  getLocation = async (e) => {
    e.preventDefault();
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ}&q=${this.state.searchQuery}&format=json`;
      const res = await axios.get(API);
      console.log(res.data[0].lat , res.data[0].lon);
      this.setState({ location:res.data[0] });

      const mapImg = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ}&center=${res.data[0].lat},${res.data[0].lon}&zoom=13&size=500x400`;
      await axios.get(mapImg);
      this.setState({mapDisplay: mapImg});
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
      this.setState({ errorMessage: error.message });
    }
    };

  handleInput = (e) => {
      e.preventDefault();
      this.setState({searchQuery: e.target.value });
      console.log(this.state.searchQuery);
    };



  render() {
    return (
    <Container>
      <Form onSubmit={this.getLocation}>
        <Form.Group className="mb-3" controlId="formGroupInput">
          <Form.Label>Select A City to Explore</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Control type="Input" onChange={this.handleInput} placeholder="search for a city">
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">Explore!</Button>
      </Form>
      {this.state.location.place_id  &&
        <>
        <h2>The city is: {this.state.location.display_name}</h2>
        <h2>The Latitude is: {this.state.location.lat}</h2>
        <h2>The Longitude is: {this.state.location.lon}</h2>
        <Card>
          <Card.Body>
            <Card.Img src={this.state.mapDisplay} alt={this.state.location.display_name} className="map"></Card.Img>
          </Card.Body>
        </Card>
        </>
      } 
      {this.state.error &&
        <h2> Whoopsie! something went wrong - {this.state.errorMessage}</h2>
        }

    </Container>
  )
}
};

export default App;
