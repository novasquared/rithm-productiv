import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todos
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({todos, update, remove}) {
  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit(evt) { 
    setIsEditing((isEditing) ? false : true);
  }

  /** Call remove fn passed to this. */
  function handleDelete(evt) { 
    setTodos(currTodos => currTodos.filter(todo => { 
      console.log("id is ", id, "todo is ", todo); 
      return id !== todo.id})
    );
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) { 
    update(formData);
    toggleEdit(formData.id);
  }

  return (
      <div className="EditableTodo">

          {isEditing  
                ? <TodoForm />
                : <div className="mb-3">
                  <div className="float-right text-sm-right">
                    <button
                        className="EditableTodo-toggle btn-link btn btn-sm"
                        onClick={toggleEdit}>
                      Edit
                    </button>
                    <button
                        className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                        onClick={handleDelete}>
                      Del
                    </button>
                  </div>
                  <Todo />
                </div>
}
      </div>
  );
}

export default EditableTodo;
