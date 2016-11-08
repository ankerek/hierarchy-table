import React, { PropTypes as T } from 'react';
import { withState } from 'recompose';
import { processKids } from '../../utils';
import Table from '../../containers/Table';
import Arrow from '../Arrow';
import styles from './styles.css';

const RowView = ({ id, data, kids, removeItem, collapsed, handleCollapse }) => {
  const { haveKids } = processKids(kids);
  const cols = Object.keys(data).length + 2; // + collapse, remove cols
  
  return (
    <tbody>
      <tr className={styles.tr}>
        <td className={styles.open} onClick={ haveKids && (() => handleCollapse(open => !open)) }>
          { haveKids && <Arrow collapsed={collapsed} /> }
        </td>
        { Object.values(data).map((value, i) => <td key={i} className={styles.td}>{value}</td>) } 
        <td className={styles.remove} onClick={() => removeItem()}>X</td>   
      </tr>
      { haveKids && collapsed && 
        <tr>
          <td colSpan={cols} className={styles.nested}>
            <Table kids={kids} parentId={id} />
          </td>
        </tr> 
      }
    </tbody>
  )
}

RowView.propTypes = {
  id: T.number.isRequired,
  data: T.object.isRequired,
  kids: T.object,
  removeItem: T.func.isRequired,
  collapsed: T.bool.isRequired,
  handleCollapse: T.func.isRequired,
}

const Row = withState(
  'collapsed', 'handleCollapse', false
)(RowView)

export default Row;