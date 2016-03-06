import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class WeekendPlan extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
          <h1>
            <FormattedMessage
              id="home.weddingPlace"
            /></h1>
          <h2>
            <FormattedMessage
              id="weekendPlan.welcome"
            />
          </h2>
          <p>
            <FormattedMessage
              id="weekendPlan.welcomeP"
            />
          </p>
          <h2>
            <FormattedMessage
              id="weekendPlan.weeding"
            />
          </h2>
          <p clasName="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <FormattedMessage
              id="weekendPlan.weedingP"
            />
            <a target="_blank" href="http://maps.google.com/?q=casa%20sisquet">
              <FormattedMessage
                id="weekendPlan.Map"
              />
            </a> <br />
            <FormattedMessage
              id="weekendPlan.weedingP2"
            />
          </p>
          <h2>
            <FormattedMessage
              id="weekendPlan.celebration"
            />
          </h2>
          <p>
            <FormattedMessage
              id="weekendPlan.celebrationP"
            />
            <a target="_blank" href="http://maps.google.com/?q=camping%20senterada">
              <FormattedMessage
                id="weekendPlan.Map"
              />
            </a> <br />
            <FormattedMessage
              id="weekendPlan.celebrationP2"
            />
          </p>
        </div>
      </div>
    );
  }
}

export default WeekendPlan;
