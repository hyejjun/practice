import { useTodoStore } from '../../store/TodoList';

import TodoListItem from './TodoListItem';

export default function TodoList() {
  const todoList = useTodoStore((state) => state.todoList);

  const deleteTodoItem = useTodoStore((state) => state.deleteTodoItem);

  return (
    <div>
      {
        todoList?.map((v) => (
          <div key={v.id} style={{ display: 'flex', gap: '10px' }}>
            <TodoListItem item={v} />
            <button
              type="button"
              onClick={() => {
                deleteTodoItem(v.id);
              }}
            >
              X
            </button>
          </div>
        ))
      }
    </div>

  );
}
