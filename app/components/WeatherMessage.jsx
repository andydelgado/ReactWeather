const React = require('react');

const WeatherMessage = ({temp, location}) => {
  return (
    <h3>It is currently {temp} degrees in {location}.</h3>
  )
}

module.exports = WeatherMessage;
