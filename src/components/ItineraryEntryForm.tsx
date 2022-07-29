import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import "./ItineraryEntryForm.css";

function ItineraryEntryForm(props: any) {
  // set default form to empty form and disable submit
  const defaultItineraryEntryForm = {
    name: "",
    start_time: "",
    end_time: "",
    activity_type: "",
    price: 0,
    location: "",
  };

  const [itineraryEntryFormData, setitineraryEntryFormData] = useState(
    defaultItineraryEntryForm
  );
  const [disableSubmit, setDisableSubmit] = useState(true);

  const onFormChange = (event: any) => {
    // get info from form about changed data
    const stateName: any = event.target.name;
    let inputValue: any = event.target.value;
    if (stateName === "price") {
      inputValue = Number(inputValue);
    }
    // replace form data
    const newFormData: any = { ...itineraryEntryFormData };
    newFormData[stateName] = inputValue;
    setitineraryEntryFormData(newFormData);
    console.log(newFormData);

    // if required fields have not been filled out or start date is after end date, disable submitting
    if (
      newFormData.name === "" ||
      !newFormData.start_time ||
      !newFormData.end_time ||
      newFormData.start_time > newFormData.end_time ||
      !newFormData.activity_type
    ) {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  };

  const handleSubmit = (event: any) => {
    closeForm(event);
    props.addItineraryEntryCallback(itineraryEntryFormData);

    // reset form
    setitineraryEntryFormData(defaultItineraryEntryForm);
  };

  const closeForm = (event: any) => {
    event.preventDefault();
    props.showItineraryEntryFormCallback();
  };

  return (
    <form
      className={
        props.itineraryEntryFormActive
          ? "itinerary-entry-form active"
          : "itinerary-entry-form"
      }
      onSubmit={handleSubmit}
    >
      <AiIcons.AiOutlineClose
        className="close-form-button"
        onClick={closeForm}
      />
      <h2>Add a New Itinerary Entry</h2>
      {/* <label htmlFor="trip name">Trip Name</label> */}
      <input
        type="text"
        name="name"
        placeholder="Itinerary Entry Name"
        value={itineraryEntryFormData.name}
        onChange={onFormChange}
      ></input>
      <br />
      <label htmlFor="start_date">Start Time</label>
      <input
        type="datetime-local"
        name="start_time"
        placeholder="Start Time"
        value={itineraryEntryFormData.start_time.toString()}
        onChange={onFormChange}
      ></input>
      <br />
      <label htmlFor="end_date">End Time</label>
      <input
        type="datetime-local"
        name="end_time"
        placeholder="End Time"
        value={itineraryEntryFormData.end_time.toString()}
        onChange={onFormChange}
      ></input>
      <select name="activity_type" required onChange={onFormChange}>
        <option value="">--Choose Activity Type--</option>
        <option value="Accommodations">Accommodations</option>
        <option value="Activity">Activity</option>
        <option value="Flight">Flight</option>
        <option value="Food">Food</option>
        <option value="Miscellaneous">Miscellaneous</option>
      </select>
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={itineraryEntryFormData.price}
        onChange={onFormChange}
      ></input>
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={itineraryEntryFormData.location}
        onChange={onFormChange}
      ></input>
      <input
        id="itinerary-entry-form-submit-button"
        type="submit"
        value="Add Itinerary Entry"
        disabled={disableSubmit}
      ></input>
    </form>
  );
}

export default ItineraryEntryForm;
