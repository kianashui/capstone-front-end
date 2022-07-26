import {useParams} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from "axios";

function Trip() {
    const defaultTrip = {
        _id: "",
        name: "",
        start_date: "",
        end_date: "",
        itinerary_entries: []
    }
    const [trip, setTrip] = useState(defaultTrip);
    const tripId = useParams().tripId;
    const URL = "https://capstone-trip-planner.herokuapp.com/trips";
    
    const getOneTrip = () => {
		axios.get(`${URL}/${tripId}`).then((response) => {
			const tripData = response.data[0];
			setTrip(tripData);
		}).catch((err) => {console.log(err);});
	}

    useEffect(getOneTrip, [tripId]);

    return (
        <div className="trip">
            <h2>Trip ID: {trip._id}</h2>
            <h2>Trip Name: {trip.name} </h2>
            <h2>Start Date: {trip.start_date} </h2>
            <h2>End Date: {trip.end_date} </h2>
            <h2>Itinerary Entries: {trip.itinerary_entries}</h2>
        </div>
    );
}

export default Trip;