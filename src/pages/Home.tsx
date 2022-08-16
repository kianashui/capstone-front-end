import { useEffect } from "react";

function Home(props: any) {
  useEffect(props.loadingCallback, []);

  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
}

export default Home;
