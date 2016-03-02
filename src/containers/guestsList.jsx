import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Checkbox from 'material-ui/lib/checkbox';
import * as guestActions from '../reducers/guests';


class GuestList extends Component {
    static propTypes = {
      guests: PropTypes.any,
      params: PropTypes.shape({
        group: PropTypes.string
      }),
      changeAttend: PropTypes.func,
      changeNeedPlace: PropTypes.func
    };
    onChangeAttend = (id, attend) => this.props.changeAttend(id, attend);
    onChangePlace = (id, attend) => this.props.changeNeedPlace(id, attend);
    render() {
      const group = this.props.params.group;
      const guests = (this.props.guests || [])
        .filter(guest => guest.get('group') === group);
      return (
          <div>
              <Helmet title="guests" />
              <h1>
                <FormattedMessage
                  id={`guest.${group}`}
                />
              </h1>
              <div className="row">
                <List>
                  {guests.map(guest =>
                    (<List key={guest.get('name')} subheader={guest.get('name')}>
                        <ListItem
                          primaryText={
                            <FormattedMessage id="guestList.attend" />
                          }
                          leftCheckbox={
                            <Checkbox
                              checked={guest.get('attend')}
                              onCheck={this.onChangeAttend.bind(this, guest.get('id'), !guest.get('attend'))}
                            />
                          }
                        />
                        <ListItem
                          primaryText={
                            <FormattedMessage id="guestList.needPlace" />
                          }
                          leftCheckbox={
                            <Checkbox
                              checked={guest.get('needPlace')}
                              onCheck={this.onChangePlace.bind(this, guest.get('id'), !guest.get('needPlace'))}
                            />
                          }
                        />
                      <Divider />
                    </List>
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

const actions = Object.assign({}, guestActions);

export default connect(selector, actions)(GuestList);
