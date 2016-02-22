import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardActions from 'material-ui/lib/card/card-actions';
import AccountBox from 'material-ui/lib/svg-icons/action/account-box';
import FlatButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';
import style from './card.style';

class GuestsCard extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <Card
        className="col-xs-12 col-sm-2 col-md-2 col-lg-2"
        style={style.container}
      >
        <CardHeader
          title={formatMessage({
            id: 'home.guests',
            default: 'Guests'
          })}
          subtitle={
            formatMessage({
              id: 'home.guestsSubtile',
              default: 'All about us'
            })
          }
        />
        <CardMedia>
          <AccountBox color={Colors.blue500} style={{
            width: 300,
            heigth: 300
          }}
          />
        </CardMedia>
        <CardActions>
          <FlatButton primary label={formatMessage({
            id: 'home.guests.confirm',
            default: 'Confirm'
          })}
          />
        </CardActions>
      </Card>
      );
  }
}

export default injectIntl(GuestsCard);
