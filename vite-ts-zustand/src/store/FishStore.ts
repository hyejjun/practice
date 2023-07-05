/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { create as _create, StateCreator } from 'zustand';

const storeResetFns = new Set<() => void>();

const create = (<T extends unknown>(f: StateCreator<T> | undefined) => {
  if (f === undefined) return create;
  const store = _create(f);
  const initialState = store.getState();
  storeResetFns.add(() => {
    store.setState(initialState, true);
  });
  return store;
}) as typeof _create;

export const resetAllStores = () => {
  console.log(storeResetFns);

  storeResetFns.forEach((resetFn) => {
    resetFn();
  });
};

// define types for state values and actions separately
type StateSalmon = {
  salmon: number;
};

type ActionsSalmon = {
  addSalmon: (qty: number) => void;
  resetSalmon: () => void;
};

// define the initial state
const initialStateSalmon: StateSalmon = {
  salmon: 0,
};

// create store
export const useSalmon = create<StateSalmon & ActionsSalmon>()((set, get) => ({
  ...initialStateSalmon,

  addSalmon: (qty: number) => {
    set({ salmon: get().salmon + qty });
  },

  resetSalmon: () => {
    set(initialStateSalmon);
  },
}));

// define types for state values and actions separately
type StateTuna = {
  tuna: number;
};

type ActionsTuna = {
  addTuna: (qty: number) => void;
  resetTuna: () => void;
};

// define the initial state
const initialStateTuna: StateTuna = {
  tuna: 0,
};

// create store
export const useTuna = create<StateTuna & ActionsTuna>((set, get) => ({
  ...initialStateTuna,

  addTuna: (qty: number) => {
    set({ tuna: get().tuna + qty });
  },

  resetTuna: () => {
    set(initialStateTuna);
  },
}));
