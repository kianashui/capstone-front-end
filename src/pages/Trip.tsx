import axios from "axios";
import moment from "moment";
import { useState, useEffect } from "react";
import * as TiIcons from "react-icons/ti";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ItineraryEntries from "../components/ItineraryEntries";
import DeleteItineraryEntryForm from "../components/DeleteItineraryEntryForm";
import "./Trip.css";

function Trip(props: any) {
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
    // const userId: string = process.env.REACT_APP_USER_ID as string;
    const userIdString = props.userId;
    if (tripId !== "" && userIdString !== "") {
      axios
        .get(`${URL}/${tripId}`, {
          headers: { user_id: userIdString },
        })
        .then((response) => {
          const tripData = response.data[0];
          setTrip(tripData);
        })
        .finally(() => {
          props.loadingCallback();
        })
        .catch((err) => {
          console.log(err);
          props.loadingCallback();
        });
    }
  };

  useEffect(getOneTrip, [tripId, props.userId]);
  return (
    <div className="trip">
      <Link to="/trips" className="trip__back-to-trips-button">
        <TiIcons.TiArrowBack />
        <span>Back to All Trips</span>
      </Link>
      <h2>Trip ID: {trip._id}</h2>
      <h2>Trip Name: {trip.name} </h2>
      <h2>
        Trip Dates:
        {moment(trip.start_date).format("ddd, MMMM D, YYYY")} -{" "}
        {moment(trip.end_date).format("ddd, MMMM D, YYYY")}
      </h2>
      {/* <TripForm
        addTripCallback={addTrip}
        showTripFormCallback={showTripForm}
        tripFormActive={tripFormActive}
  ></TripForm>*/}
      <ItineraryEntries trip_id={trip._id} userId={props.userId} />
    </div>
  );
}

export default Trip;
