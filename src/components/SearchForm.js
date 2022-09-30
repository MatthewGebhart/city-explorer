import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class SearchForm extends React.Component {

    render () {
        return (
        <>
        <Form id="explore-form" className="my-4" onSubmit={this.props.getLocation} >
        <Form.Group className="mb-3" controlId="formGroupInput">
          <Form.Label>Select A City to Explore</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Control type="Input" onChange={this.props.handleInput} placeholder="search for a city">
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">Explore!</Button>
      </Form>
      </>


        )


    }
}

export default SearchForm;
