import "./ItineraryEntry.css";
import * as RiIcons from "react-icons/ri";

function ItineraryEntry(props: any) {
  const deleteEntryConfirm = (event: any) => {
    event.preventDefault();
    // props.deleteEntryConfirmCallback(props.id);
  };

  return (
    <div className="itinerary-entry">
      <p className="itinerary-entry__name">{props.name}</p>
      <p className="itinerary-entry__times">
        {props.start_time} - {props.end_time}
      </p>
      <p className="itinerary-entry__activity_type">{props.activity_type}</p>
      <p className="itinerary-entry__price">{props.price}</p>
      <p className="itinerary-entry__location">{props.location}</p>
      <RiIcons.RiDeleteBinLine
        className="itinerary-entry__delete-button"
        onClick={deleteEntryConfirm}
      />
    </div>
  );
}

export default ItineraryEntry;
