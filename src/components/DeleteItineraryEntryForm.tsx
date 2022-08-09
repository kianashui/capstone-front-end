import "./DeleteItineraryEntryForm.css";

function DeleteItineraryEntryForm(props: any) {
  const handleCancel = (event: any) => {
    closeForm(event);
  };
  const handleSubmit = (event: any) => {
    closeForm(event);
    props.deleteItineraryEntryCallback(props.selectedItineraryEntryId);
  };

  const closeForm = (event: any) => {
    event.preventDefault();
    props.showDeleteItineraryEntryFormCallback();
  };

  return (
    <form
      className={
        props.deleteItineraryEntryFormActive
          ? "delete-itinerary-entry-form active"
          : "delete-itinerary-entry-form"
      }
      onSubmit={handleSubmit}
    >
      <h2>Are you sure you want to delete this itinerary entry?</h2>
      <input
        id="delete-itinerary-entry-form-cancel-button"
        type="button"
        name="Cancel"
        value="Cancel"
        onClick={handleCancel}
      ></input>
      <input
        id="delete-itinerary-entry-form-submit-button"
        type="submit"
        value="Delete Entry"
      ></input>
    </form>
  );
}

export default DeleteItineraryEntryForm;
