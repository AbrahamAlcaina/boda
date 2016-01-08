const LOAD = 'SHOP-LOAD';
const LOAD_SUCCESS = 'SHOP-LOAD_SUCCESS';
const LOAD_FAIL = 'SHOP-LOAD_FAIL';
const BUY = 'SHOP-BUY';
const BUY_SUCCESS = 'SHOP-BUY_SUCCESS';
const BUY_FAIL = 'SHOP-BUY_FAIL';
import { APIPROTOCOL, APISERVER } from 'config';

const productQuery = `
query {
  products {
    id, type, title, description, url, image
  }
}`;

function loadSucces(state, action) {
  const products = action.result.data.products;
  return {
    ...state,
    loading: false,
    loaded: true,
    products
  };
}

const initialSte = {
  loaded: false
};

export default function reducer(state = initialSte, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return loadSucces(state, action);
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const load = () => {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.post('', { data: productQuery })
  };
};

export const buyProduct = (url, quantity = 1) => {
  return {
    types: [BUY, BUY_SUCCESS, BUY_FAIL],
    fb: (FB) => new Promise((resolve, reject) => {
      const product = `${APIPROTOCOL}://${APISERVER}${url}`;
      console.log(product);
      FB.ui(
        {
          method: 'pay',
          action: 'purchaseitem',
          product,
          quantity
        },
        (data) => {
          console.log(data);
          if (!data || data.error) {
            return reject();
          }
          return resolve(data.data);
        }
      );
    })
  };
};
