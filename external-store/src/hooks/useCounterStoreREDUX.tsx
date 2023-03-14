import { container } from 'tsyringe';

import { useEffect } from 'react';

import useForceUpdate from './useForceUpdate';

import CounterStore from '../stores/CounterStore';
import ObjectStore from '../stores/ObjectStore';

// 사실 얘네는 한 묶음이다. useStore로 묶어준다.

export default function useCounterStore(store: ObjectStore) {
  const store = container.resolve(CounterStore);

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    store.addListener(forceUpdate);

    return () => {
      store.removeListener(forceUpdate);
    };
  }, [forceUpdate, store]);
  return store;
}
