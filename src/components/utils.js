const getGlobal = (name) => {
  if (!window) {
    return void 0;
  }
  return window[name];
};

export const fbInstance = (state) => {
  state.FB = getGlobal('FB'); // eslint-disable-line no-param-reassign
};
