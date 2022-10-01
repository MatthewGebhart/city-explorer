import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Movie from './Movie';



class Movies extends React.Component {

    render () {
        return (
            <Container>
                <h3 style={{display: 'flex', justifyContent:'center', alignItems: 'center' }} >Movies featuring {this.props.searchQuery}</h3>
                <Row>
                    {this.props.moviesArray.map(data => {
                        return (
                            <Movie
                            key={this.props.moviesArray.id}
                            data={data}/>
                        )
                    })}
                </Row>
            </Container>
            

        )
    };

};

export default Movies;