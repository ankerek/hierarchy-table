import React, { PropTypes as T } from 'react';

import styles from './styles.css';

const Arrow = ({ collapsed }) => (
  <div className={styles.collapsible + ' ' + (collapsed && styles.collapsed)}></div>
)

Arrow.propTypes = {
  collapsed: T.bool.isRequired,
}

export default Arrow;