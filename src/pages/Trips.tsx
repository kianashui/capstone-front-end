import {useState, useEffect} from "react";
import axios from "axios";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import TripSummary from "../components/TripSummary";
import TripForm from "../components/TripForm";
import "./Trips.css"
import { Link, Outlet } from "react-router-dom";
import DeleteTripForm from "../components/DeleteTripForm";

function Trips() {
  const [tripFormActive, setTripFormActive] = useState(false);
  const [deleteTripFormActive, setDeleteTripFormActive] = useState(false);
	const [tripList, setTripList] = useState([]);
  const [tripOrder, setTripOrder] = useState(0);
  const [selectedTripId, setSelectedTripId] = useState("");
	const URL = "https://capstone-trip-planner.herokuapp.com/trips";

  const showTripForm = () => {
    setTripFormActive(!tripFormActive);
  };

  const showDeleteTripForm = () => {
    setDeleteTripFormActive(!deleteTripFormActive);
  };

	const getTrips = () => {
		axios.get(URL).then((response) => {
			const newTrips = response.data.map((trip: any) => {
				return {
					trip_id: trip._id,
					name: trip.name,
					start_date: trip.start_date,
					end_date: trip.end_date,
					itinerary_entries: trip.itinerary_entries
				};
			});
			setTripList(newTrips);
		}).catch((err) => {console.log(err);});
	}

  const addTrip = (tripInfo: any) => {
    console.log("add trip");
    console.log(tripInfo);
    axios
      .post(URL, tripInfo)
      .then((response) => {
        console.log(response);
        getTrips();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTripConfirm = (tripId: string) => {
    showDeleteTripForm();
    setSelectedTripId(tripId);
  }

	const deleteTrip = (tripId: string) => {
    axios
      .delete(`${URL}/${tripId}`)
      .then((response) => {
        console.log(response);
        getTrips();
      })
      .catch((err) => {console.log(err)})
	}
  
  const sortTripSummaries = (tripOrder: number) => {
    if (tripOrder === 0) {
      tripList.sort((a: any, b: any) => a.start_date.localeCompare(b.start_date));
    } else if (tripOrder === 1) {
      tripList.sort((a: any, b: any) => b.start_date.localeCompare(a.start_date));
    } else if (tripOrder === 2) {
      tripList.sort((a: any, b: any) => a.name.localeCompare(b.name));
    }
  }

  const sortTripsByUpcoming = () => {
    setTripOrder(0);
    sortTripSummaries(0);
  }

  const sortTripsByFurthestOut = () => {
    setTripOrder(1);
    sortTripSummaries(1);
  }

  const sortTripsByName = () => {
    setTripOrder(2);
    sortTripSummaries(2);
  }

	const tripSummaryComponents = tripList.map((trip: any) => {
		return (
      <Link to={`/trips/${trip.trip_id}`} key={trip.trip_id}>
        <li className="trip-summary-item" key={trip.trip_id}>
          <TripSummary
            id={trip.trip_id}
            name={trip.name}
            start_date={trip.start_date}
            end_date={trip.end_date}
            deleteTripConfirmCallback={deleteTripConfirm}
          />
        </li>
      </Link>
		);
	});

	useEffect(getTrips, [])

	return (
		<div className="trips">
			<h1>Trips</h1>
			<IoIcons.IoMdAddCircle className="new-trip-button" onClick={showTripForm}/>
      <TripForm
        addTripCallback={addTrip}
        showTripFormCallback={showTripForm}
        tripFormActive={tripFormActive}
      ></TripForm>
      <DeleteTripForm deleteTripFormActive={deleteTripFormActive} deleteTripCallback={deleteTrip} showDeleteTripFormCallback={showDeleteTripForm} selectedTripId={selectedTripId}></DeleteTripForm>
      <div className="trip-list">
        <FaIcons.FaSortAlphaDown className="trip-sort-button" onClick={sortTripsByName}/>
        <FaIcons.FaSortAmountDownAlt className="trip-sort-button" onClick={sortTripsByUpcoming}/>
        <FaIcons.FaSortAmountDown className="trip-sort-button" onClick={sortTripsByFurthestOut}/>
        <ul id="trip-summary-components">{tripSummaryComponents}</ul>
      </div>
      <Outlet/>
		</div>
	);
}

export default Trips;
