import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import { browserHistory } from 'react-router';
import FlatButton from 'material-ui/lib/flat-button';
import { FormattedMessage } from 'react-intl';
import CardActions from 'material-ui/lib/card/card-actions';
import Colors from 'material-ui/lib/styles/colors';
import Link from 'material-ui/lib/svg-icons/navigation/arrow-forward';
import style from './card.style';

class FriendsTrempCard extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  onClick = () => browserHistory.push('/guests-list/friends-tremp');

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div
        className="col-xs-12 col-sm-12 col-md-5 col-lg-5"
        style={style.container}
      >
        <Card
          style={style.cardBig}
          onTouchTap={this.onClick}
        >
        <CardHeader
          title={formatMessage({
            id: 'guest.friends-tremp'
          })}
          style={style.cardHeader}
        />
        <CardMedia>
          <img src="img/friendsTremp.jpg" className="img-responsive"/>
        </CardMedia>
        <CardActions>
          <FlatButton
            style={{
              margin: 12, float: 'right'
            }}
            label={
              <FormattedMessage id="go" />
            }
            primary
            icon={
              <Link color={Colors.pinkA400} />
            }
            labelPosition="before"
          />
        </CardActions>
      </Card>
    </div>
      );
  }
}

export default injectIntl(FriendsTrempCard);
