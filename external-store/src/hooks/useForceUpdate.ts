import { useState, useCallback } from 'react';

export default function useForceUpdate() {
  const [, setState] = useState({});

  const forceUpdate = useCallback(() => {
    setState({});
  }, []);

  return forceUpdate;
}
