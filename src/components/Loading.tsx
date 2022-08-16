import { RotatingLines } from "react-loader-spinner";
import "./Loading.css";

function Loading(props: any) {
  return (
    <div className={props.loadingActive ? "loading active" : "loading"}>
      <RotatingLines
        strokeColor="#61dafb"
        animationDuration=".75"
        width="100"
      />
      <p
        className={
          props.loadingActive ? "loading__name active" : "loading__name"
        }
      >
        Loading...
      </p>
    </div>
  );
}

export default Loading;
