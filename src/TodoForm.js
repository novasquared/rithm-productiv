import React, { useState } from "react";


/** Form for adding.
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
 *
 * State:
 * - formData: {id, title, description, priority}
 * 
 * This returns an HTML form for adding a no ToDo
 * 
 * { TodoApp, EditableTodo } -> TodoForm
 */

const INITIAL_STATE = {
  id: "",
  title: "",
  description: "",
  priority: "",
}

function TodoForm( { addToDo } ) {
  const [formData, setFormData] = useState(INITIAL_STATE);


  /** Update form input. */
  function handleChange(evt) { 
    const { name, value } = evt.target;
    setFormData(fData => ({
        ...fData,
        [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("Check out state ->", formData);
    addTodo(formData);
    setFormData(INITIAL_STATE);
  }

  return (
      <form className="NewTodoForm" onSubmit={handleSubmit}>

        <div className="form-group">
          <input
              id="newTodo-title"
              name="title"
              className="form-control"
              placeholder="Title"
              onChange={handleChange}
              value="FIXME"
              aria-label="Title"
          />
        </div>

        <div className="form-group">
          <textarea
              id="newTodo-description"
              name="description"
              className="form-control"
              placeholder="Description"
              onChange={handleChange}
              value="FIXME"
              aria-label="Description"
          />
        </div>

        <div className="form-group d-flex justify-content-between">
          <div className="w-75 d-flex justify-content-between">
            <label htmlFor="newTodo-priority"
                  className="d-inline-flex">Priority:&nbsp;&nbsp;
            </label>
            <select id="newTodo-priority"
                    name="priority"
                    value="FIXME"
                    onChange={handleChange}
                    className="form-control form-control-sm d-inline-flex"
            >
              <option value={1}>Ultra-Über</option>
              <option value={2}>Über</option>
              <option value={3}>Meh</option>
            </select>
          </div>
          <button className="btn-primary rig btn btn-sm NewTodoForm-addBtn">
            Gø!
          </button>
        </div>

      </form>
  );
}

export default TodoForm;
