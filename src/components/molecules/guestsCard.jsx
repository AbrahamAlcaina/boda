import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import AccountBox from 'material-ui/lib/svg-icons/action/account-box';
import Colors from 'material-ui/lib/styles/colors';

class GuestsCard extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  render() {
    const { formatMessage, formatTime } = this.props.intl;
    return (
      <Card
          className="col-xs-12 col-sm-2 col-md-1 col-lg-1"
          style={{
            padding:0,
            margin: 10
          }}
        >
          <CardHeader
            title={formatMessage({
              id:'home.guest',
              default: 'Guests'
            })}
            subtitle={
              formatMessage({
                id:'home.guestsSubtile',
                default: 'All about us'
              })
            }
          />
          <CardMedia>
            <AccountBox color={Colors.blue500} style={{
              width: 300,
              heigth: 300
            }}/>
          </CardMedia>
        </Card>
      );
  }
};

export default injectIntl(GuestsCard);
