import { singleton } from 'tsyringe';
import BaseStore, { Action } from './BaseStore';

const initialState = {
  count: 0,
  name: 'hyejun',
};

export type State = typeof initialState

const reducers = {

  // 리듀서가 하나였는데 여러개의 리듀서로 나누는것
  increase(state: State, action: Action<number>) {
    return {
      ...state,
      count: state.count + (action.payload ?? 1),
    };
  },

  decrease(state: State, action: Action<number>) {
    return {
      ...state,
      count: state.count - (action.payload ?? 1),
      name: `${state.name}.`,
    };
  },

};

// action creator
export function increase(step?: number) {
  return { type: 'increase', payload: step };
}

export function decrease(step?: number) {
  return { type: 'decrease', payload: step };
}

@singleton()
export default class Store extends BaseStore<State> {
  constructor() {
    super(initialState, reducers); // reducers를 통으로 준다
  }
}
