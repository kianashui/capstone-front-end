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

    return (
        <div className="trip">
            <h2>Trip ID: {tripId}</h2>
            
            {/* <h2>Trip Name: {trip.name} </h2> */}
            {/* <h2>Trip Data: {trip} </h2> */}
        </div>
    );
}

export default Trip;