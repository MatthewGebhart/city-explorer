import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


class Weather extends React.Component {

    render () {
        return (
            <Container>
                <h2 className='text-center'>Weather Forecast for this area</h2>
              <Card.Text>Date: {this.props.date}</Card.Text>
                <Card.Text className="mb-2">
                     Weather Description: {this.props.description}
                </Card.Text>
          </Container>

        )
    };

};

export default Weather;