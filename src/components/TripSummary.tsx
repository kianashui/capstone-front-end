import { AnyRecord } from "dns";
import React from "react";
import * as RiIcons from "react-icons/ri";
import "./TripSummary.css";

function TripSummary(props: any) {
  const selectTrip = () => {
    console.log(props.id, "trip clicked");
  };

  const deleteTripCheck = (event: any) => {
    // ask if user is sure they want to delete the trip
    event.preventDefault();
    // if (deleteTrip === true) {
    //   props.deleteTripCallback(props.id);
    // } else {}

    // with no check:
    // props.deleteTripCallback(props.id);
    console.log("delete trip with id ", props.id);
  }

  return (
    <div className="trip-summary">
      <h2 className="trip-summary__name" onClick={selectTrip}>{props.name}</h2>
      <p className="trip-summary__dates">{props.start_date} – {props.end_date}</p>
      <RiIcons.RiDeleteBinLine className="trip-summary__delete-button" onClick={deleteTripCheck}/>
    </div>
  );
}

export default TripSummary;
