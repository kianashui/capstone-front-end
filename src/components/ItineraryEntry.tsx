import moment from "moment";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as GrIcons from "react-icons/gr";
import "./ItineraryEntry.css";

function ItineraryEntry(props: any) {
  const deleteEntryConfirm = (event: any) => {
    event.preventDefault();
    console.log("delete entry confirm");
    // props.deleteEntryConfirmCallback(props.id);
  };

  const editEntryConfirm = (event: any) => {
    event.preventDefault();
    console.log("edit entry confirm");
    // props.deleteEntryConfirmCallback(props.id);
  };

  const activityTypeIcon = () => {
    if (props.activity_type === "Accommodations") {
      return (
        <>
          <FaIcons.FaBed />
        </>
      );
    } else if (props.activity_type === "Activity") {
      return (
        <>
          <FaIcons.FaTicketAlt />
        </>
      );
    } else if (props.activity_type === "Flight") {
      return (
        <>
          <FaIcons.FaPlaneDeparture />
        </>
      );
    } else if (props.activity_type === "Food") {
      return (
        <>
          <GiIcons.GiMeal />
        </>
      );
    } else if (props.activity_type === "Miscellaneous") {
      return (
        <>
          <FaIcons.FaListUl />
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className="itinerary-entry">
      <GrIcons.GrDrag className="itinerary-entry__drag-button" />
      <h3 className="itinerary-entry__name">{props.name}</h3>
      <p className="itinerary-entry__times">
        {moment(props.start_time).format("h:mmA")} -{" "}
        {moment(props.end_time).format("h:mmA")}
      </p>
      <div className="itinerary-entry__activity-icon">{activityTypeIcon()}</div>
      <p className="itinerary-entry__price">{props.price}</p>
      <p className="itinerary-entry__location">{props.location}</p>
      <FaIcons.FaRegEdit
        className="itinerary-entry__edit-button"
        onClick={editEntryConfirm}
      />
      <RiIcons.RiDeleteBinLine
        className="itinerary-entry__delete-button"
        onClick={deleteEntryConfirm}
      />
    </div>
  );
}

export default ItineraryEntry;
