import { useState } from 'react';

import { TodoListItem as TodoListItemType } from '../../type/TodoList';

import { useTodoStore } from '../../store/TodoListStore';

type TodoListItemProps = {
  item : TodoListItemType
}

export default function TodoListItem({
  item,
}: TodoListItemProps) {
  const todoList = useTodoStore((state) => state.todoList);

  const updateTodoItem = useTodoStore((state) => state.updateTodoItem);

  const [editItem, setEditItem] = useState('');
  const [editId, setEditId] = useState('');

  const onClick = (id:string, contents:string) => {
    setEditId(id);
    setEditItem(contents);
  };

  const onSave = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const list = [...todoList];
      list.forEach((v, k) => {
        if (v.id === editId) list[k].contents = editItem;
      });

      updateTodoItem(list);
      setEditId('');
    }
  };

  return (
    <div>
      {
        item.id !== editId
          ? (
            <span
              role="presentation"
              onClick={() => { onClick(item.id, item.contents); }}
            >
              {item.contents}
            </span>
          )
          : (
            <input
              value={editItem}
              onChange={(e) => {
                setEditItem(e.target.value);
              }}
              onKeyDown={(e) => onSave(e)}
            />
          )
      }
    </div>
  );
}
