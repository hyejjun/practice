import { useEffect } from 'react';

import useForceUpdate from './useForceUpdate';

import ObjectStore from '../stores/ObjectStore';

// T는 T인데 ObjectStore를 상속받아야함.
export default function useObjectStore<T extends ObjectStore>(store:T):T {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    store.addListener(forceUpdate);

    return () => {
      store.removeListener(forceUpdate);
    };
  }, [forceUpdate, store]);

  return store;
}
