import React from "react";
import {TodoListItem} from './todoListItem';
import { Todo } from "./type.d";

const todos: Todo[] = [
  {
    text: 'Update App',
    complete: false,
  },
  {
    text: 'Test app',
    complete: false,
  },
];

function App() {
  return (
    <ul>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </ul>
  );
}
export default App;