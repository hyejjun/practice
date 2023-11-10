import { styled } from 'styled-components';

import { useTodoStore } from '@store/TodoListStore';

import Button from '@ui/Button';

import TodoListItem from './TodoListItem';

const TodoListWrap = styled.div`
  & > div {
    display: flex;
    gap: 1rem;
  }
`;

export default function TodoList() {
  const todoList = useTodoStore((state) => state.todoList);

  const deleteTodoItem = useTodoStore((state) => state.deleteTodoItem);

  return (
    <TodoListWrap>
      {
        todoList?.map((v) => (
          <div key={v.id}>
            <TodoListItem item={v} />
            <Button
              onClick={() => { deleteTodoItem(v.id); }}
            >
              X
            </Button>
          </div>
        ))
      }
    </TodoListWrap>
  );
}
