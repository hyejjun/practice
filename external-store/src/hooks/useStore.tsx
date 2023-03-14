import { container } from 'tsyringe';

import { useEffect } from 'react';

import useForceUpdate from './useForceUpdate';

import Store from '../stores/Store';

export default function useCounterStore() {
  const store = container.resolve(Store);

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    store.addListener(forceUpdate);

    return () => {
      store.removeListener(forceUpdate);
    };
  }, [forceUpdate, store]);
  return store;
}
