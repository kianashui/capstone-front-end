import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ItineraryEntries from "../components/ItineraryEntries";
import moment from "moment";
import { Link } from "react-router-dom";
import * as TiIcons from "react-icons/ti";
import "./Trip.css";

function Trip() {
  const defaultTrip = {
    _id: "",
    name: "",
    start_date: "",
    end_date: "",
    itinerary_entries: [],
  };
  const [trip, setTrip] = useState(defaultTrip);
  const tripId = useParams().tripId;
  const URL = "https://capstone-trip-planner.herokuapp.com/trips";

  const getOneTrip = () => {
    axios
      .get(`${URL}/${tripId}`)
      .then((response) => {
        const tripData = response.data[0];
        setTrip(tripData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(getOneTrip, [tripId]);

  return (
    <div className="trip">
      <Link to="/trips" className="trip__back-to-trips-button">
        <TiIcons.TiArrowBack />
        <span>Back to All Trips</span>
      </Link>
      <h2>Trip ID: {trip._id}</h2>
      <h2>Trip Name: {trip.name} </h2>
      <h2>
        Trip Dates: {moment(trip.start_date).format("ddd, MMMM D, YYYY")} -{" "}
        {moment(trip.end_date).format("ddd, MMMM D, YYYY")}
      </h2>
      {/* <TripForm
        addTripCallback={addTrip}
        showTripFormCallback={showTripForm}
        tripFormActive={tripFormActive}
      ></TripForm>
      <DeleteTripForm
        deleteTripFormActive={deleteTripFormActive}
        deleteTripCallback={deleteTrip}
        showDeleteTripFormCallback={showDeleteTripForm}
        selectedTripId={selectedTripId}
      ></DeleteTripForm> */}
      <ItineraryEntries trip_id={trip._id} />
    </div>
  );
}

export default Trip;
