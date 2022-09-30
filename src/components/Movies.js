import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';



class Movies extends React.Component {

    render () {
        return (
            <Container>
                {/* <h2 className='text-center'>Weather Forecast for this area</h2>
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
                </Card.Text> */}
                <h4>Movies featured here</h4>
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    // src={this.props.moviesArray[0].image_url}
                    src ='https://via.placeholder.com/100x80'
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    {/* <h3>${this.props.moviesArray[0].title}</h3> */}
                    <h3>First Movie Description</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/100x80"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/100x80"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>  
          </Container>

        )
    };

};

export default Movies;