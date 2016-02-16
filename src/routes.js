import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as containers from './containers';

export default (
    <Route path="/" component={containers.App}>
        <IndexRoute component={containers.Home} />
        <Route path="*" component={containers.NoMatch} />
    </Route>
);
