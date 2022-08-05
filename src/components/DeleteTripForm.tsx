import "./DeleteTripForm.css";

function DeleteTripForm(props: any) {
  const handleCancel = (event: any) => {
    closeForm(event);
  };
  const handleSubmit = (event: any) => {
    closeForm(event);
    props.deleteTripCallback(props.selectedTripId);
  };

  const closeForm = (event: any) => {
    event.preventDefault();
    props.showDeleteTripFormCallback();
  };

  return (
    <form
      className={
        props.deleteTripFormActive
          ? "delete-trip-form active"
          : "delete-trip-form"
      }
      onSubmit={handleSubmit}
    >
      <h2>Are you sure you want to delete this trip?</h2>
      <input
        id="delete-trip-form-cancel-button"
        type="button"
        name="Cancel"
        value="Cancel"
        onClick={handleCancel}
      ></input>
      <input
        id="delete-trip-form-submit-button"
        type="submit"
        value="Delete Trip"
      ></input>
    </form>
  );
}

export default DeleteTripForm;
