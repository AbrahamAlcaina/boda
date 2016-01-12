import React from 'react';
import { Nav } from '../organisms';
import { Paper } from 'material-ui';
const styles = require('./basicLayout.scss');


const BasicLayout = ({ children }) => {
  return (
    <div className={styles.home}>
      <Nav />
      <div className={styles.masthead}>
        <Paper>
          {children}
        </Paper>
      </div>
    </div>
  );
};

export default BasicLayout;
