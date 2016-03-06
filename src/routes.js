import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as containers from './containers';

export default (
    <Route path="/" component={containers.App}>
        <IndexRoute component={containers.Home} />
        <Route path="/weekend-plan" component= {containers.WeekendPlan} />
        <Route path="/weeding-place" component= {containers.Weeding} />
        <Route path="/place" component= {containers.Place} />
        <Route path="/sleep-place" component= {containers.SleepPlace} />
        <Route path="/guests" component= {containers.Guests} />
        <Route path="/guests-list/:group" component= {containers.GuestsList} />
        <Route path="/our-history" component= {containers.OurHistory} />
        <Route path="/honey-moon" component= {containers.WeedingList} />
        <Route path="*" component={containers.NoMatch} />
    </Route>
);
