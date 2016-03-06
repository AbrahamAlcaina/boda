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
import { Snackbar } from '../components/organism';
import OK from 'material-ui/lib/svg-icons/social/mood';
import KO from 'material-ui/lib/svg-icons/social/mood-bad';
import Place from 'material-ui/lib/svg-icons/places/room-service';
import NoPlace from 'material-ui/lib/svg-icons/social/whatshot';
import Colors from 'material-ui/lib/styles/colors';

const attendNode = (
  <div>
    <OK color={Colors.pink500} />
    <FormattedMessage id="Snackbar.attend" />
  </div>);
const noattendNode = (
  <div>
    <KO color={Colors.pink500} />
    <FormattedMessage id="Snackbar.noattend" />
  </div>);
const placeNode = (
  <div>
    <Place color={Colors.pink500} />
    <FormattedMessage id="Snackbar.place" />
  </div>);
const noplaceNode = (
  <div>
    <NoPlace color={Colors.pink500} />
    <FormattedMessage id="Snackbar.noplace" />
  </div>);
let message = attendNode;

class GuestList extends Component {
    static propTypes = {
      guests: PropTypes.any,
      params: PropTypes.shape({
        group: PropTypes.string
      }),
      changeAttend: PropTypes.func,
      changeNeedPlace: PropTypes.func,
      loadGuests: PropTypes.func
    };

    componentWillMount() {
      if (!this.props.guests) {
        this.props.loadGuests();
      }
    }

    onChangeAttend = (id, attend) => {
      this.props.changeAttend(id, attend);
      message = attend ? attendNode : noattendNode;
      this.refs.snackbar.handleTouchTap();
    };

    onChangePlace = (id, attend) => {
      this.props.changeNeedPlace(id, attend);
      message = attend ? placeNode : noplaceNode;
      this.refs.snackbar.handleTouchTap();
    };

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
                    (<List key={guest.get('name')} subheader={<h2>{guest.get('name')}</h2>}>
                        <ListItem
                          primaryText={<FormattedMessage id="guestList.attend" />}
                          leftIcon={
                              <Checkbox
                                checked={guest.get('attend')}
                                onCheck={this.onChangeAttend.bind(this, guest.get('id'), true)}
                              />}
                        />
                        <ListItem
                          primaryText={<FormattedMessage id="guestList.noattend" />}
                          leftIcon={
                              <Checkbox
                                checked={guest.get('attend') === false}
                                onCheck={this.onChangeAttend.bind(this, guest.get('id'), false)}
                              />
                          }
                        />
                        <ListItem
                          primaryText={
                            <FormattedMessage id="guestList.needPlace" />
                          }
                          leftIcon={
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
              <Snackbar ref={'snackbar'} message={message} />
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
