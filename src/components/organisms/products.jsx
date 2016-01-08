import React, { PropTypes } from 'react';
import { List, ListItem, Avatar } from 'material-ui';
import { ActionAddShoppingCart } from 'material-ui/lib/svg-icons';

const Products = ({ products, buyProduct }) => {
  return (
    <List>
      {
        products.map(product => (
          <ListItem
            primaryText={product.title}
            secondaryText={product.description}
            secondaryTextLines={2}
            leftAvatar={<Avatar src={product.image} />}
            rightAvatar={<ActionAddShoppingCart />}
            onClick={buyProduct(product.url, 1)}
            key={product.id}
          />))
      }
    </List>
  );
};

Products.propTypes = {
  buyProduct: PropTypes.func.isRequired
};

export default Products;
