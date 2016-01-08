import React from 'react';
import styles from './basicLayout.scss';
import { Nav } from '../organisms';

const BasicLayout = ({ children }) => {
  return (
    <div className={styles.home}>
      <Nav />
      <div className={styles.masthead}>
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BasicLayout;
