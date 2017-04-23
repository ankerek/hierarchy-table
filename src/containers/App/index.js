import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { getPatients } from '../../reducers';
import { removeItem } from '../../actions';
import { TableView } from '../Table';

import './styles.css';

const mapStateToProps = (state) => ({
  items: getPatients(state),
})

const mapDispatchToProps = (dispatch) => ({
  handleRemoveItem({ type, parentId, index: i }) {
    dispatch(removeItem({ type, parentId, index: i }));
  }
});

const AppView = ({ items, handleRemoveItem }) => (
  <div>
    { items.length
      ? <TableView rows={items} handleRemoveItem={handleRemoveItem} />
      : 'No data'
    }
  </div>
)

AppView.propTypes = {
  items: T.array,
  handleRemoveItem: T.func.isRequired,
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppView)

export default App;