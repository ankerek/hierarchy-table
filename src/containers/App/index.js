import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { getPatients } from '../../reducers';
import { TableView } from '../Table';

import './styles.css';

const mapStateToProps = (state) => ({
  items: getPatients(state),
})

const AppView = ({ items, dispatch }) => (
  <div>
    { items.length 
      ? <TableView rows={items} dispatch={dispatch} />
      : 'No data'
    }
  </div>
)

AppView.propTypes = {
  items: T.array,
  dispatch: T.func.isRequired,
}

const App = connect(
  mapStateToProps
)(AppView)

export default App;