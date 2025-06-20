import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import './index.css';
import { Game } from './Game.tsx';

const rootElement = document.getElementById('root');

createRoot(rootElement!).render(
  <StrictMode>
    <Provider store={store}>
      <Game />
    </Provider>
  </StrictMode>
);
