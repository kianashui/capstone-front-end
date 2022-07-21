import {useParams} from "react-router-dom";

function Trip() {
    const params = useParams();
    return (
        <div>
            <h2>Trip: {params.trip_id}</h2>
        </div>
    );
}

export default Trip;