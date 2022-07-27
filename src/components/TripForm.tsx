import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import "./TripForm.css";



function TripForm(props: any) {
  // set default form to empty form and disable submit
  const defaultTripForm = {
    name: "",
    start_date: "",
    end_date: "",
  };

  const [tripFormData, setTripFormData] = useState(defaultTripForm);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const onFormChange = (event: any) => {
    // get info from form about changed data
    const stateName: any = event.target.name;
    const inputValue: any = event.target.value;

    // replace form data
    const newFormData: any = { ...tripFormData };
    newFormData[stateName] = inputValue;
    setTripFormData(newFormData);

    // if required fields have not been filled out, disable submitting
    if (newFormData.name === "" || !newFormData.start_date || !newFormData.end_date) {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  };

  const handleSubmit = (event: any) => {
    closeForm(event);
    props.addTripCallback(tripFormData);

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
        type="date"
        name="start_date"
        placeholder="Start Date"
        value={tripFormData.start_date.toString()}
        onChange={onFormChange}
      ></input>
      <br />
      <label htmlFor="end_date">Trip End Date</label>
      <input
        type="date"
        name="end_date"
        placeholder="End Date"
        value={tripFormData.end_date.toString()}
        onChange={onFormChange}
      ></input>
      <input id="trip-form-submit-button" type="submit" value="Add Trip" disabled={disableSubmit}></input>
    </form>
  );
}

export default TripForm;
