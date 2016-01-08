import React from 'react';
import { RaisedButton } from 'material-ui';
import { ActionShoppingCart } from 'material-ui/lib/svg-icons';
import { Link } from 'react-router';
const styles = {
  shop: {
    verticalAlign: 'middle',
    paddingLeft: '0.5em'
  }
};

const navMenu = ({}) => {
  return (
    <Link to="/shop">
      <RaisedButton primary label="Shop" labelPosition="after">
        <ActionShoppingCart style={styles.shop} />
      </RaisedButton>
    </Link>
  );
};

export default navMenu;
