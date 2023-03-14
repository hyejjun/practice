import { container } from 'tsyringe';

import { useEffect, useRef, useState } from 'react';

import useForceUpdate from './useForceUpdate';

import Store, { State } from '../stores/Store';

type Selector<T> = (state: State)=> T;

export default function useSelector<T>(selector: Selector<T>): T {
  const store = container.resolve(Store);

  // 하나의 스토어 - 상태변화 영향 미침 - 각각의 상태
  const state = useRef(selector(store.state));

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const update = () => {
      // 특정조건이 맞으면 forceUpdate
      const newState = selector(store.state);
      // selector 결과가 객체인 경우 처리 필요함
      if (newState !== state.current) {
        forceUpdate();
        state.current = (newState);
      }
    };
    store.addListener(update);

    return () => {
      store.removeListener(update);
    };
  }, [forceUpdate, store]);

  return selector(store.state);
}
