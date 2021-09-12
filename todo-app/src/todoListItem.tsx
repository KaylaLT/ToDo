import React from 'react';

/* to-do item will be a text-string */
interface Todo {
  text: string;
  complete: boolean;
}
/*to-do items will be used as a prop*/
interface Props {
  todo: Todo;
}
/* content for the list item*/ 
export const TodoListItem: React.FC<Props> = ({todo}) => {
  return (
    <li>
      <label
        style={{textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input type="checkbox" checked={todo.complete} /> {todo.text}
      </label>
    </li>
  )};

