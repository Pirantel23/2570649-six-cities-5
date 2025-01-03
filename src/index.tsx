import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/components/app/app';
import { Config } from '@/const';
import { offers } from '@/mocks/offers'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placeAmount={Config.placeAmount} offers={offers}/>
  </React.StrictMode>
);
