import {RotatingLines} from 'react-loader-spinner';
import "./Loading.css"

function Loading() {
    return (
        <div className="loading">
            <RotatingLines strokeColor="#61dafb" animationDuration=".75" width="100"/>
            <p className="loading__name">Loading...</p>
        </div>
    );
}

export default Loading;