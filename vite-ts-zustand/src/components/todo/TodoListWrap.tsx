import TodoList from './TodoList';
import AddTodoItem from './AddTodoItem';

export default function TodoListWrap() {
  return (
    <div>
      <h2>TO DO LIST</h2>
      <div>
        <TodoList />
        <AddTodoItem />
      </div>
    </div>
  );
}
