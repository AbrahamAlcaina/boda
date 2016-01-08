const LOAD = 'HOME-LOAD';
const LOAD_SUCCESS = 'HOME-LOAD_SUCCESS';
const LOAD_FAIL = 'HOME-LOAD_FAIL';

const basicInfo = `
fragment basicInfo on User{
  name, fbid
}
`;

export const userQuery = `
${basicInfo}
query {
  users (fbid :"1522728974717584") {
    ...basicInfo,
    friends {
      edges {
        node {
          ...basicInfo
        }
      }
    },
    machines {
      name, image, feature, featured
    }
  }
}`;

function loadSucces(state, action) {
  const home = action.result.data.users[0];
  return {
    ...state,
    loading: false,
    loaded: true,
    ...home
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
    promise: (client) => client.post('', { data: userQuery })
  };
};
