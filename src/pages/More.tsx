import { useEffect } from "react";

function More(props: any) {
  useEffect(props.loadingCallback, []);
  return (
    <div className="more">
      <h1>More</h1>
    </div>
  );
}

export default More;
