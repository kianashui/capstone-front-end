function Home(props: any) {
  return (
    <div className="home">
      <h1>Home</h1>
      {props.loadingCallback()}
    </div>
  );
}

export default Home;
