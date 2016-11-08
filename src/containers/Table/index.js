import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../reducers';
import { removeItem } from '../../actions';
import { processKids } from '../../utils';
import Row from '../../components/Row';

import styles from './styles.css';

const mapStateToProps = (state, ownProps) => {
  const { kids } = ownProps;
  const { title, type, ids } = processKids(kids);

  return {
    rows: getItems(state[type], ids),
    title,
    type,
  }
}

export const TableView = ({ rows, title, type = 'patients', parentId, dispatch }) => (
  <table className={styles.table}>
    { title && <caption>{title}</caption> }
    <thead>
      <tr>
        <th></th>
        { Object.keys(rows[0].data).map((value, i) => <th key={i}>{value}</th>) }
        <th></th>
      </tr>
    </thead>
    { rows.map((row, i) => <Row {...row} removeItem={() => dispatch(removeItem({ type, parentId, index: i }))} key={row.id} />) }
  </table>
);

TableView.propTypes = {
  rows: T.array.isRequired,
  title: T.string,
  type: T.string,
  parentId: T.number,
  dispatch: T.func.isRequired,
};

const Table = connect(
  mapStateToProps
)(TableView)

export default Table;