import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import { browserHistory } from 'react-router';
import style from './card.style';

class FriendsBDNCard extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  onClick = () => browserHistory.push('/guests-list/friends-bdn');

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
            id: 'guest.friendsBDN'
          })}
          style={style.cardHeader}
        />
        <CardMedia>
          <img src="img/friendsBDN.jpg" className="img-responsive"/>
        </CardMedia>
      </Card>
    </div>
      );
  }
}

export default injectIntl(FriendsBDNCard);
