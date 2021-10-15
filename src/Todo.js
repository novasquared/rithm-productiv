import React from "react";

/** Simple presentation component for a todo.
 * 
 * State - none
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo( { todo } ) {
  return (
      <div className="Todo">
        <div><b>Title</b> <small>(priority: 1)</small></div>
        <div><small>Description.</small></div>
      </div>
  );
}

export default Todo;
