import TodoList from './TodoList';
import AddTodoItem from './AddTodoItem';

export default function TodoListWrap() {
  return (
    <div>
      <h2>TO DO LIST</h2>
      <TodoList />
      <AddTodoItem />
    </div>
  );
}
