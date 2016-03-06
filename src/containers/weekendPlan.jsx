import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Place from 'material-ui/lib/svg-icons/maps/place';

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
          <p>
            <FormattedMessage
              id="weekendPlan.welcomeP2"
            />
            &nbsp;
            <a href="/sleep-place">
              <FormattedMessage
                id="home.sleepPlace"
              />
            </a>
            &nbsp;
            <FormattedMessage
              id="weekendPlan.welcomeP3"
            />
          </p>
          <h2>
            <FormattedMessage
              id="weekendPlan.weeding"
            />&nbsp;
            <small>
              <a target="_blank" href="http://maps.google.com/?q=casa%20sisquet">
                <Place />
                <FormattedMessage
                  id="weekendPlan.Map"
                />
              </a>
            </small>
          </h2>
          <p clasName="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <FormattedMessage
              id="weekendPlan.weedingP"
            />
            <br />
            <FormattedMessage
              id="weekendPlan.weedingP2"
            />
          </p>
          <h2>
            <FormattedMessage
              id="weekendPlan.celebration"
            />
            &nbsp;
            <small>
              <a target="_blank" href="http://maps.google.com/?q=camping%20senterada">
                <Place />
                <FormattedMessage
                  id="weekendPlan.Map"
                />
              </a>
            </small>
          </h2>
          <p>
            <FormattedMessage
              id="weekendPlan.celebrationP"
            />
            <br />
            <FormattedMessage
              id="weekendPlan.celebrationP2"
            />
          </p>
          <h2>
            <FormattedMessage
              id="weekendPlan.Comiat"
            />
          </h2>
          <p>
            <FormattedMessage
              id="weekendPlan.ComiatP"
            />
          </p>
          <p>
            <FormattedMessage
              id="weekendPlan.ComiatP2"
            />
          </p>
        </div>
      </div>
    );
  }
}

export default WeekendPlan;
