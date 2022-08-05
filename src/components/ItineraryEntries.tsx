import ItineraryEntry from "./ItineraryEntry";
import "./ItineraryEntries.css";
import { useEffect, useState } from "react";
import axios from "axios";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import ItineraryEntryForm from "./ItineraryEntryForm";

function ItineraryEntries(props: any) {
  const [itineraryEntryList, setItineraryEntryList] = useState([]);
  const [entryOrder, setEntryOrder] = useState(0);
  const [itineraryEntryFormActive, setItineraryEntryFormActive] =
    useState(false);

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

  const addItineraryEntry = (entryInfo: any) => {
    console.log("add itinerary entry");
    console.log(entryInfo);
    axios
      .post(`${URL}/${tripId}`, entryInfo)
      .then((response) => {
        console.log(response);
        getItineraryEntries();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  const showItineraryEntryForm = () => {
    setItineraryEntryFormActive(!itineraryEntryFormActive);
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
    <div className="itinerary">
      <div className="itinerary-entry-list">
        <IoIcons.IoMdAddCircle
          className="itinerary-entries__add-button"
          onClick={showItineraryEntryForm}
        />
        <FaIcons.FaSortAlphaDown
          className="itinerary-entries__sort-button"
          onClick={sortByName}
        />
        <FaIcons.FaSortAmountDownAlt
          className="itinerary-entries__sort-button"
          onClick={sortByUpcoming}
        />
        <FaIcons.FaSortAmountDown
          className="itinerary-entries__sort-button"
          onClick={sortByFurthestOut}
        />
        <ul id="itinerary-entry-components">{itineraryEntryComponents}</ul>
        <ItineraryEntryForm
          className=""
          addItineraryEntryCallback={addItineraryEntry}
          showItineraryEntryFormCallback={showItineraryEntryForm}
          itineraryEntryFormActive={itineraryEntryFormActive}
        ></ItineraryEntryForm>
      </div>
    </div>
  );
}

export default ItineraryEntries;
