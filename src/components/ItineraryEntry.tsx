import * as RiIcons from "react-icons/ri";
// import "./TripSummary.css";

function ItineraryEntry(props: any) {
  const selectEntry = () => {
    console.log(props.id, "entry clicked");
  };

  const deleteEntryCheck = (event: any) => {
    // ask if user is sure they want to delete the trip
    event.preventDefault();
    // if (deleteTrip === true) {
    //   props.deleteTripCallback(props.id);
    // } else {}

    // with no check:
    // props.deleteTripCallback(props.id);
    console.log("delete entry with id ", props.id);
  }

  return (
    <div className="itinerary-entry">
      <h2 className="itinerary-entry__name" onClick={selectEntry}>{props.name}</h2>
      <p className="itinerary-entry__times">{props.start_time} - {props.end_time}</p>
      <RiIcons.RiDeleteBinLine className="itinerary-entry__delete-button" onClick={deleteEntryCheck}/>
    </div>
  );
}

export default ItineraryEntry;
