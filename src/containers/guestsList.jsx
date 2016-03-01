import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Checkbox from 'material-ui/lib/checkbox';
import * as navigationActions from '../reducers/navigation';


class GuestList extends Component {
    static propTypes = {
      intl: intlShape.isRequired,
      guests: PropTypes.array
    };
    render() {
      const guests = this.props.guests || [];
      return (
          <div>
              <Helmet title="guests" />
              <h1>
                <FormattedMessage
                  id="home.guests"
                />
              </h1>
              <div className="row">
                <List>
                  {guests.map(guest =>
                    (<div key={guest.get('name')}>
                        <ListItem
                          primaryText={guest.get('name')}
                        >
                          <div>
                            <Checkbox />
                            <Checkbox />
                          </div>
                        </ListItem>
                      <Divider />
                    </div>
                    )
                  )}
              </List>
              </div>
          </div>
      );
    }
}

const selector = createSelector(
  [state => state.get('guests')],
  state => ({ guests: state.get('guests') })
);

const actions = Object.assign({}, navigationActions);

export default connect(selector, actions)(GuestList);
