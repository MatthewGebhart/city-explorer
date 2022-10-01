import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Movie extends React.Component {
    render() {
        return (
                <Card bg='secondary'  text='light' style={{ width: '18rem'}} className='mx-3 my-3' border='info'>
                    <Card.Img variant="top" src={this.props.data.image_url} alt="No image available" />
                    <Card.Body>
                        <Card.Title>{this.props.data.title}</Card.Title>
                        <Card.Text>
                            <p>Release date: {this.props.data.release_date}</p>
                            <p>{this.props.data.overview}</p>
                            <p>Total votes: {this.props.data.vote_count} | Average votes: {this.props.data.vote_average}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            

        )
    }
}

export default Movie;