// import moment from "moment";
import moment from "moment-timezone";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as GrIcons from "react-icons/gr";
import "./ItineraryEntry.css";

function ItineraryEntry(props: any) {
  const deleteEntryConfirm = (event: any) => {
    event.preventDefault();
    console.log("delete entry confirm");
    props.deleteItineraryEntryConfirmCallback(props.id);
  };

  const editEntryConfirm = (event: any) => {
    event.preventDefault();
    console.log("edit entry confirm");
    // props.deleteEntryConfirmCallback(props.id);
  };

  const convertedPrice = () => {
    const priceInCents: number = props.price;
    const priceInDollars: number = priceInCents / 100;
    return `$${priceInDollars}`;
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
        {moment
          .tz(
            props.start_time,
            Intl.DateTimeFormat().resolvedOptions().timeZone
          )
          .format("h:mmA")}{" "}
        -{" "}
        {moment
          .tz(props.end_time, Intl.DateTimeFormat().resolvedOptions().timeZone)
          .format("h:mmA")}
      </p>
      <div className="itinerary-entry__activity-icon">{activityTypeIcon()}</div>
      <p className="itinerary-entry__price">{convertedPrice()}</p>
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
