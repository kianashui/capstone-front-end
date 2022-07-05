import React from "react";
import * as RiIcons from "react-icons/ri";

function Trip(props: any) {
  const selectTrip = () => {
    console.log(props.id, "trip clicked");
  };

  return (
    <div className="trip" onClick={selectTrip}>
      <h2 className="trip__name">{props.name}</h2>
      <p className="trip__dates">{props.start_date}-{props.end_date}</p>
      <RiIcons.RiDeleteBinLine className="delete-button" onClick={props.deleteTripCallback}/>
    </div>
  );
}

export default Trip;
