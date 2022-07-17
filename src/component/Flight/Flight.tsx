import React from 'react';
import { useSelector } from 'react-redux';
import { getTripFlights } from '../../store/selectors';
import './Flight.scss';

export const Flight: React.FC = () => {
  const flights = useSelector(getTripFlights);

  return (
    <div className="flight">
      {flights.map(flight => (
        <div className="flight__card" key={flight.id}>
          <p className="flight__airline">{`Airline: ${flight.airlineName}`}</p>
          <p>{`Flight number: ${flight.flightNumber}`}</p>
          <div>
            <h3>Departure</h3>
            <hr />
            <p>{`City: ${flight.departure.cityName}`}</p>
            <p>{flight.departure.airportName}</p>
          </div>
          <div>
            <h3>Arrival</h3>
            <hr />
            <p>{`City: ${flight.arrival.cityName}`}</p>
            <p>{flight.arrival.airportName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
