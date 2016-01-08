import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { load } from 'redux/modules/shop';
import connectData from 'helpers/connectData';
import { BasicLayout } from 'components/templates';
import { Products } from 'components/organisms';
import * as shopActions from 'redux/modules/shop';

class Shop extends Component {

  static propTypes = {
    auth: PropTypes.object.isRequired,
    shop: PropTypes.object.isRequired,
    buyProduct: PropTypes.func.isRequired
  };

  static contextTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const shop = this.props.shop;
    return (
      <BasicLayout>
        <h2>
          shop
        </h2>
        <Products { ...shop } buyProduct={ this.props.buyProduct } />
      </BasicLayout>
    );
  }
}

function fetchData(getState, dispatch) {
  const { shop } = getState();
  if (shop && shop.loaded) {
    return Promise.resolve();
  }
  return dispatch(load());
}

const connectedDataShop = connectData(fetchData)(Shop);
const connectedShop = connect(
  state => ({ shop: state.shop, auth: state.auth }), shopActions)(connectedDataShop);
export default connectedShop;
