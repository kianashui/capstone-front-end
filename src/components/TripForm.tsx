import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import "./TripForm.css";

const defaultTripForm = {
  name: "",
  start_date: "",
  end_date: "",
};

function TripForm(props: any) {

  const [tripFormData, setTripFormData] = useState(defaultTripForm);

  const onFormChange = (event: any) => {
    const stateName: any = event.target.name;
    const inputValue: any = event.target.value;

    const newFormData: any = { ...tripFormData };
    newFormData[stateName] = inputValue;
    setTripFormData(newFormData);
  };

  const handleSubmit = (event: any) => {
    closeForm(event);
    props.addTripCallback(tripFormData);
    // event.preventDefault();

    // reset form
    setTripFormData(defaultTripForm);
  };

  const closeForm = (event: any) => {
    event.preventDefault();
    props.showTripFormCallback();
  };

  return (
    <form
      className={props.tripFormActive ? "trip-form active" : "trip-form"}
      onSubmit={handleSubmit}
    >
      <AiIcons.AiOutlineClose
        className="close-form-button"
        onClick={closeForm}
      />
      <h2>Add a New Trip</h2>
      {/* <label htmlFor="trip name">Trip Name</label> */}
      <input
        type="text"
        name="name"
        placeholder="Trip Name"
        value={tripFormData.name}
        onChange={onFormChange}
      ></input>
      <br />
      <label htmlFor="start_date">Trip Start Date</label>
      <input
        // type="date"
        type="text"
        name="start_date"
        placeholder="Start Date"
        value={tripFormData.start_date}
        onChange={onFormChange}
      ></input>
      <br />
      <label htmlFor="end_date">Trip End Date</label>
      <input
        // type="date"
        type="text"
        name="end_date"
        placeholder="End Date"
        value={tripFormData.end_date}
        onChange={onFormChange}
      ></input>
      <input type="submit" value="Add Trip"></input>
    </form>
  );
}

export default TripForm;
