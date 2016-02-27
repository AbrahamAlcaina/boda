import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as containers from './containers';

export default (
    <Route path="/" component={containers.App}>
        <IndexRoute component={containers.Home} />
        <Route path="/contact" component= {containers.Contact} />
        <Route path="/weekendPlan" component= {containers.WeekendPlan} />
        <Route path="/history" component= {containers.history} />
        <Route path="*" component={containers.NoMatch} />
    </Route>
);
