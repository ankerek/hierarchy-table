import React, { PropTypes as T } from 'react';
import { Provider } from 'react-redux';

import App from '../App';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
)

Root.propTypes = {
  store: T.object.isRequired,
}

export default Root;