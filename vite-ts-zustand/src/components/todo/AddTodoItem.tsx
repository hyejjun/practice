import { useState } from 'react';

import { useTodoStore } from '@store/TodoListStore';

import Button from '@ui/Button';

export default function AddTodoItem() {
  const [value, setValue] = useState('');

  const addTodoItem = useTodoStore((state) => state.addTodoItem);

  const addItem = () => {
    addTodoItem(value);
    setValue('');
  };

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="write your todo list"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => activeEnter(e)}
      />
      <Button onClick={() => { addItem(); }}>
        Save
      </Button>
    </div>
  );
}
