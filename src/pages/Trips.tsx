import React, {useState, useEffect} from "react";
import axios from "axios";
import * as IoIcons from "react-icons/io";
import Trip from "../components/Trip";
import "./Trips.css"

function Trips() {
	const [tripList, setTripList] = useState([]);
	const URL = "https://capstone-trip-planner.herokuapp.com/trips";

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

	const deleteTrip = (tripInfo: any) => {
		console.log("delete trip");
	}

	const tripComponents = tripList.map((trip: any) => {
		return (
			<li className="trip-item">
				<Trip
					key={trip.trip_id}
					id={trip.trip_id}
					name={trip.name}
					start_date={trip.start_date}
					end_date={trip.end_date}
					itinerary_entries={trip.itinerary_entries}
					deleteTripCallback={deleteTrip}
				/>
			</li>
		);
	});

	useEffect(getTrips, [])

	return (
		<div className="trips">
			<h1>Trips</h1>
			<IoIcons.IoMdAddCircle className="trip-add-button"/>
			<ul>{tripComponents}</ul>
		</div>
	);
}

export default Trips;
