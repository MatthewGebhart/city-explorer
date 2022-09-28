import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure';


class MapCard extends React.Component {

    render() {
        return (
        //     <Card>
        //   <Card.Body>
        //     <Card.Img src={this.state.mapDisplay} alt={this.state.location.display_name} className="map"></Card.Img>
        //   </Card.Body>
        // </Card>
          <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src={this.state.mapDisplay}
          />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
        </Figure>
        )
    }

}

export default MapCard;