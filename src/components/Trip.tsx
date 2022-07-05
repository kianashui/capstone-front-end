import React from "react";
import * as RiIcons from "react-icons/ri";
import "./Trip.css";

function Trip(props: any) {
  const selectTrip = () => {
    console.log(props.id, "trip clicked");
  };

  const deleteTrip = () => {
    props.deleteTripCallback(props.id);
  }

  return (
    <div className="trip">
      <h2 className="trip__name" onClick={selectTrip}>{props.name}</h2>
      <p className="trip__dates">{props.start_date}-{props.end_date}</p>
      <RiIcons.RiDeleteBinLine className="delete-button" onClick={deleteTrip}/>
    </div>
  );
}

export default Trip;
