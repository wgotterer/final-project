import React, { useState } from "react";

function EditFormClass({
  oneOnlineClass,
  setShowEditForm,
  classToDisplay,
  setClassToDisplay,
}) {
  // create a form state to have a controlled form
  const [dataEditForm, setDataEditForm] = useState(oneOnlineClass);

  //  onChange form function that makes a shallow copy of the class being edited
  // then changes the value pertaining to the name of the input field
  function handleChangeEdit(e) {
    setDataEditForm({ ...dataEditForm, [e.target.name]: e.target.value });
  }

  //  submits the form and makes a patch request
  function handleSubmitEdit(e) {
    e.preventDefault();
    fetch(`/api/online_classes/${dataEditForm.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: dataEditForm.name,
        price: dataEditForm.price,
        difficulty: dataEditForm.difficulty,
        description: dataEditForm.description,
      }),
    })
      .then((resp) => resp.json())
      .then((updatedClass) => {
        // allows state to reset and re-render the page
        // allowing us to see the changes made
        setClassToDisplay(() => {
          const allClasses = [...classToDisplay];
          return allClasses.map((oneClass) => {
            if (oneClass.id === updatedClass.id) {
              return updatedClass;
            } else {
              return oneClass;
            }
          });
        });
      });
    setShowEditForm(false);
  }

  return oneOnlineClass && dataEditForm ? (
    <div className="popup">
      <div className="popup-inner">
        <div>
          <form className="form_edit" onSubmit={handleSubmitEdit}>
            <label> Name: </label>
            <label>
              <input
                type="text"
                name="name"
                // using what is currently in state to populate the input field
                value={dataEditForm.name}
                onChange={handleChangeEdit}
                placeholder="hello"
              />
            </label>
            <label> Price: </label>
            <label>
              <input
                type="price"
                name="price"
                value={dataEditForm.price}
                onChange={handleChangeEdit}
              />
            </label>
            <label> Difficulty: </label>
            <label>
              <input
                type="text"
                name="difficulty"
                value={dataEditForm.difficulty}
                onChange={handleChangeEdit}
              />
            </label>
            <label> Description: </label>
            <label>
              <input
                type="text"
                name="description"
                value={dataEditForm.description}
                onChange={handleChangeEdit}
              />
            </label>
            <label>
              <input type="submit" />
            </label>
          </form>
        </div>
      </div>
    </div>
  ) : null;
}

export default EditFormClass;
