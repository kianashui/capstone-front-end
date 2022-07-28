import ItineraryEntry from "./ItineraryEntry";
import "./ItineraryEntries.css";
import { useEffect, useState } from "react";
import axios from "axios";
import * as FaIcons from "react-icons/fa";

function ItineraryEntries(props: any) {
  const [itineraryEntryList, setItineraryEntryList] = useState([]);
  const [entryOrder, setEntryOrder] = useState(0);
  // const itineraryEntryList: any = [
  //   { entry_id: 1, name: "test 1", start_time: "5:00pm", end_time: "6:00pm" },
  //   { entry_id: 2, name: "test 2", start_time: "7:00pm", end_time: "8:00pm" },
  // ];
  const tripId = props.trip_id;

  const URL = "https://capstone-trip-planner.herokuapp.com/itinerary_entries";

  const getItineraryEntries = () => {
    console.log(tripId);
    axios
      .get(`${URL}/${tripId}`)
      .then((response) => {
        console.log(response.data);
        const newItineraryEntries = response.data.map((entry: any) => {
          return {
            name: entry.name,
            start_time: entry.start_time,
            end_time: entry.end_time,
            activity_type: entry.activity_type,
            price: entry.price,
            location: entry.location,
          };
        });
        setItineraryEntryList(newItineraryEntries);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(getItineraryEntries, [tripId]);

  const sortItineraryEntries = (entryOrder: number) => {
    if (entryOrder === 0) {
      itineraryEntryList.sort((a: any, b: any) =>
        a.start_time.localeCompare(b.start_time)
      );
    } else if (entryOrder === 1) {
      itineraryEntryList.sort((a: any, b: any) =>
        b.start_time.localeCompare(a.start_time)
      );
    } else if (entryOrder === 2) {
      itineraryEntryList.sort((a: any, b: any) => a.name.localeCompare(b.name));
    }
  };

  const sortByUpcoming = () => {
    setEntryOrder(0);
    sortItineraryEntries(0);
  };

  const sortByFurthestOut = () => {
    setEntryOrder(1);
    sortItineraryEntries(1);
  };

  const sortByName = () => {
    setEntryOrder(2);
    sortItineraryEntries(2);
  };

  const itineraryEntryComponents = itineraryEntryList.map((entry: any) => {
    return (
      // <Link to={`/trips/${trip.trip_id}`} key={trip.trip_id}>
      <li className="itinerary-entry-item" key={entry.entry_id}>
        <ItineraryEntry
          id={entry.entry_id}
          name={entry.name}
          start_time={entry.start_time}
          end_time={entry.end_time}
          activity_type={entry.activity_type}
          price={entry.price}
          location={entry.location}
        />
      </li>
      // </Link>
    );
  });

  return (
    <div className="itinerary-entries">
      <div className="itinerary-entry-list">
        <FaIcons.FaSortAlphaDown
          className="itinerary-entry-sort-button"
          onClick={sortByName}
        />
        <FaIcons.FaSortAmountDownAlt
          className="itinerary-entry-sort-button"
          onClick={sortByUpcoming}
        />
        <FaIcons.FaSortAmountDown
          className="itinerary-entry-sort-button"
          onClick={sortByFurthestOut}
        />
        <ul id="itinerary-entry-components">{itineraryEntryComponents}</ul>
      </div>
    </div>
  );
}

export default ItineraryEntries;
