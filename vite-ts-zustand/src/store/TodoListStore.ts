import { create } from 'zustand';

import type { TodoListItem } from '@type/TodoList';

interface TodoState {
  todoList: TodoListItem[],
  addTodoItem: (val: string) => void;
  deleteTodoItem: (id: string) => void;
  updateTodoItem: (list: TodoListItem[]) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todoList: [],
  addTodoItem: (val) => set((state) => ({
    todoList: [
      ...state.todoList,
      { contents: val, id: new Date().getMilliseconds() + val },
    ],
  })),
  deleteTodoItem: (id) => set((state) => (
    { todoList: state.todoList.filter((e) => e.id !== id) }
  )),
  updateTodoItem: (newList) => set(() => ({
    todoList: [...newList],
  })),
}));
