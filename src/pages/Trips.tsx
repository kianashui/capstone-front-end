import React, {useState, useEffect} from "react";
import axios from "axios";
import * as IoIcons from "react-icons/io";
import Trip from "../components/Trip";
import TripForm from "../components/TripForm";
import "./Trips.css"

function Trips() {
  const [tripFormActive, setTripFormActive] = useState(false);
	const [tripList, setTripList] = useState([]);
	const URL = "https://capstone-trip-planner.herokuapp.com/trips";

  const showTripForm = () => {
    setTripFormActive(!tripFormActive);
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
    getTrips();
  };

	const deleteTrip = (trip_id: string) => {
    axios
      .delete(`${URL}/${trip_id}`)
      .then((response) => {
        console.log(response);
        getTrips();
      })
      .catch((err) => {console.log(err)})
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
			<IoIcons.IoMdAddCircle className="trip-add-button" onClick={showTripForm}/>
			<ul>{tripComponents}</ul>
      <TripForm
        addTripCallback={addTrip}
        showTripFormCallback={showTripForm}
        tripFormActive={tripFormActive}
      ></TripForm>
		</div>
	);
}

export default Trips;
