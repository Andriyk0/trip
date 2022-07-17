const API = 'https://live.vamoos.com/api/itineraries/VMD-VL1234';

export const getData = async () => {
  const response = await fetch(API);

  return response.json();
};

export const getFlightInfo = async (response:Data) => {
  const arr:Flights[] = [];

  response.brief.forEach(trip => (
    response.flightAlerts.forEach(item => (
      item.flights.forEach(flight => {
        if (flight.briefId === trip.id) {
          arr.push(flight);
        }
      })
    ))
  ));

  return arr;
};
