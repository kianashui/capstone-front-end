import moment from "moment-timezone";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import "./TripForm.css";

function TripForm(props: any) {
  // set default form to empty form and disable submit
  const defaultTripForm = {
    name: "",
    start_date: moment
      .tz(
        new Date().setHours(0, 0, 0, 0),
        Intl.DateTimeFormat().resolvedOptions().timeZone
      )
      .format(),
    end_date: moment
      .tz(
        new Date().setHours(0, 0, 0, 0),
        Intl.DateTimeFormat().resolvedOptions().timeZone
      )
      .format(),
  };

  const [tripFormData, setTripFormData] = useState(defaultTripForm);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const onFormChange = (event: any) => {
    // get info from form about changed data
    const stateName: any = event.target.name;
    let inputValue: any = event.target.value;

    if (stateName === "start_date" || stateName === "end_date") {
      // add current user's timezone so time doesn't enter back end as time agnostic/UTC time
      inputValue = moment
        .tz(inputValue, Intl.DateTimeFormat().resolvedOptions().timeZone)
        .format();
    }

    // replace form data
    const newFormData: any = { ...tripFormData };
    newFormData[stateName] = inputValue;
    setTripFormData(newFormData);

    // if required fields have not been filled out or start date is after end date, disable submitting
    if (
      newFormData.name === "" ||
      !newFormData.start_date ||
      !newFormData.end_date ||
      newFormData.start_date > newFormData.end_date
    ) {
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
      <label htmlFor="name">Trip Name</label>
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
        value={moment(tripFormData.start_date).format("YYYY-MM-DD")}
        onChange={onFormChange}
      ></input>
      <br />
      <label htmlFor="end_date">Trip End Date</label>
      <input
        type="date"
        name="end_date"
        placeholder="End Date"
        value={moment(tripFormData.end_date).format("YYYY-MM-DD")}
        onChange={onFormChange}
      ></input>
      <input
        id="trip-form-submit-button"
        type="submit"
        value="Add Trip"
        disabled={disableSubmit}
      ></input>
    </form>
  );
}

export default TripForm;
