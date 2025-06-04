import { useEffect, useState } from 'react';
import { store } from './store';
import { GameState } from './types';

export function useReduxSelector<T>(selector: (state: GameState) => T): T {
  const [selectedState, setSelectedState] = useState<T>(() => selector(store.getState()));

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
