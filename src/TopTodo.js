import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 * 
 * State - none
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({todos}) {
  // lowest-priority # is the highest priority
  // let top = todos.reduce(
  //     (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  return <Todo  />;
}

export default TopTodo;