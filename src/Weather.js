import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


class Weather extends React.Component {

    render () {
        return (
            <Container>
                <h2 className='text-center'>Weather Forecast for this area</h2>
              <Card.Text>Date: {this.props.weather[0].date}</Card.Text>
                <Card.Text className="mb-2">
                     Weather Description: {this.props.weather[0].description}
                </Card.Text>
                <Card.Text>Date: {this.props.weather[1].date}</Card.Text>
                <Card.Text className="mb-2">
                     Weather Description: {this.props.weather[1].description}
                </Card.Text>
                <Card.Text>Date: {this.props.weather[2].date}</Card.Text>
                <Card.Text className="mb-2">
                     Weather Description: {this.props.weather[2].description}
                </Card.Text>
          </Container>

        )
    };

};

export default Weather;