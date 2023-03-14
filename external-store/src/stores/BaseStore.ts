import { singleton } from 'tsyringe';

export type Action<Payload> = {
  type : string;
  payload?: Payload
}

type Reducer<State, Payload> = (state: State, action: Action<Payload>) => State;

type Reducers<State> = Record<string, Reducer<State, any>>;

type Listener = () => void;

@singleton()
export default class BaseStore<State> {
  state : State;

  reducer : Reducer<State, any>; // payload를 미리 알 수 없음. action 마다 다를 수 있음

  listeners = new Set<Listener>();

  constructor(initialState: State, reducers: Reducers<State>) {
    this.state = initialState;

    this.reducer = (state: State, action: Action<unknown>) => {
      const reducer = Reflect.get(reducers, action.type);
      if (!reducer) return state;
      return reducer(state, action);
    };
  }

  dispatch(action: Action<any>) {
    this.state = this.reducer(this.state, action);
    this.publish();
  }

  // 발행
  publish() {
    this.listeners.forEach((listener) => {
      listener();
    });
  }

  addListener(listener: Listener) {
    this.listeners.add(listener);
  }

  removeListener(listener: Listener) {
    this.listeners.delete(listener);
  }
}
