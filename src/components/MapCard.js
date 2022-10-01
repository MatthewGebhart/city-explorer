import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure';


class MapCard extends React.Component {

    render() {
        return (
          <Figure>
          <Figure.Image
            width={400}
            height={400}
            src={this.props.mapDisplay} 
            alt={this.props.location.display_name}
          />
          <Figure.Caption>
            <h3 className='text-center'>WeatherForecast</h3>
            <h6 className='text-center'>Date: {this.props.weather[0].date}</h6>
            <p className='text-center'>{this.props.weather[0].description}</p>
            <br></br>
            <h6 className='text-center'>Date: {this.props.weather[1].date}</h6>
            <p className='text-center'>{this.props.weather[1].description}</p>
            <br></br>
            <h6 className='text-center'>Date: {this.props.weather[2].date}</h6>
            <p className='text-center'>{this.props.weather[2].description}</p>
          </Figure.Caption>
        </Figure>
        )
    }

}

export default MapCard;