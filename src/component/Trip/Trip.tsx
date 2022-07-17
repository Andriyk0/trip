/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTripBrief, setTripFlight } from '../../store';
import { getTripBrief } from '../../store/selectors';
import { getData, getFlightInfo } from '../../api/api';
import './Trip.scss';
import { Flight } from '../Flight';

export const Trip: React.FC = () => {
  const dispatch = useDispatch();
  const tripBrief = useSelector(getTripBrief);
  const [previewDay, setPreviewDay] = useState(-1);
  const [nextDay, setNextDay] = useState(1);
  const [dayLength, setDayLength] = useState(0);
  const [showFlight, setShowFlight] = useState(false);

  useEffect(() => {
    const loadDataFromServer = async () => {
      try {
        const response = await getData();
        const flights = await getFlightInfo(response);

        dispatch(setTripFlight(flights));
        setDayLength(response.brief.length);
        dispatch(setTripBrief(response.brief[0]));
      } catch (error) {
        alert('Eror try again');
      }
    };

    loadDataFromServer();
  }, []);

  const showNextDay = async () => {
    if (dayLength === nextDay) {
      return;
    }

    const dataTrip = await getData();

    dispatch(setTripBrief(dataTrip.brief[nextDay]));
    setNextDay(nextDay + 1);
    setPreviewDay(previewDay + 1);
  };

  const showPreviewDay = async () => {
    if (previewDay < 0) {
      return;
    }

    const dataTrip = await getData();

    dispatch(setTripBrief(dataTrip.brief[previewDay]));
    setNextDay(nextDay - 1);
    setPreviewDay(previewDay - 1);
  };

  const visibleFlight = () => {
    showFlight ? setShowFlight(false) : setShowFlight(true);
  };

  return (
    <div className="trip">
      <div className="trip__container">
        <img
          src={tripBrief.dailyPhoto}
          alt="dailyPhoto"
          className="trip__foto"
        />
        <h2 className="trip__title">{tripBrief.headline}</h2>
        <div className="trip__details">
          <p className="trip__description">
            {tripBrief.shortInformation}
            {tripBrief.documents?.map(item => (
              <a
                href={item.node.file.httpsUrl}
                key={item.id}
                className="trip__link"
              >
                More details...
              </a>
            ))}
          </p>
          <div className="trip__location-box">
            <img
              src="./image/location.png"
              alt="location"
              className="trip__location-image"
            />
            <p className="trip__location">{tripBrief.location?.location}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={showPreviewDay}
          className="trip__prev-button"
        >
          Preview Day
        </button>
        <button
          type="button"
          className="trip__flight-button"
          onClick={() => visibleFlight()}
        >
          {showFlight ? 'Close' : 'Flight info'}
        </button>
        <button
          type="button"
          onClick={showNextDay}
          className="trip__next-button"
        >
          Next Day
        </button>
      </div>
      {showFlight && <Flight />}
    </div>
  );
};
