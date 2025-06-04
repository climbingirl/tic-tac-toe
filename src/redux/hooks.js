import { useEffect, useState } from 'react';
import { store } from './store';

export function useReduxSelector(selector) {
  const [selectedState, setSelectedState] = useState(() => selector(store.getState()));

  useEffect(() => {
    let prevState = selector(store.getState());

    const unsubscribe = store.subscribe(() => {
      const newState = selector(store.getState());
      if (newState !== prevState) {
        setSelectedState(newState);
        prevState = newState;
      }
    });

    return unsubscribe;
  }, [selector]);

  return selectedState;
}
