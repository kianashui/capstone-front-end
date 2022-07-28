// import {useState} from "react";
import * as RiIcons from "react-icons/ri";
// import DeleteTripForm from "./DeleteTripForm";
import "./TripSummary.css";

function TripSummary(props: any) {
  const selectTrip = () => {
    console.log(props.id, "trip clicked");
  };

  const deleteTripConfirm = (event: any) => {
    event.preventDefault();
    props.deleteTripConfirmCallback(props.id);
  };

  return (
    <div className="trip-summary">
      <h2 className="trip-summary__name" onClick={selectTrip}>
        {props.name}
      </h2>
      <p className="trip-summary__dates">
        {props.start_date} - {props.end_date}
      </p>
      <RiIcons.RiDeleteBinLine
        className="trip-summary__delete-button"
        onClick={deleteTripConfirm}
      />
    </div>
  );
}

export default TripSummary;
