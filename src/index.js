import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { normalize } from 'normalizr';
import { arrayOfPatients } from './schema';
import configureStore from './utils/store';
import data from '../data/data-1.json';

import Root from './containers/Root';

const payload = normalize(data, arrayOfPatients);
const { entities: { patients, relatives, phones }, result } = payload;

const preloadedState = {
  patientsIds: result,
  patients,
  relatives,
  phones,
}

const rootEl = document.getElementById('root');
const store = configureStore(preloadedState);

function renderApp(RootComponent) {
  return ReactDOM.render(
    <AppContainer>
      <RootComponent store={store} />
    </AppContainer>,
    rootEl
  );
}

if (module.hot) {
  module.hot.accept('./containers/Root', () => renderApp(Root));
}

renderApp(Root);