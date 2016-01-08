import global from 'react-global';
/**
 * Uses the global object FB to send analitycs events.
 * https://developers.facebook.com/docs/reference/javascript/FB.AppEvents.LogEvent#events
 */
export default () => next => action => {
  if (__DEVELOPMENT__ || !__CLIENT__) {
    return next(action);
  }

  const FB = global.get('FB');
  if (!FB || !action.type) {
    return next(action);
  }

  try {
    FB.AppEvents.logEvent(action.type, void 0, ...action.payload);
  } catch (exception) {
    console.log(exception);
  } finally {
    return next(action);
  }
};
