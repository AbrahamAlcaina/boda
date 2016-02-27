import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { browserHistory } from 'react-router';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import style from './card.style';

class OurHistoryCard extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  onClick = () => browserHistory.push('/history');

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3" style={style.container}>
        <Card
          style={style.cardSmall}
          onTouchTap={this.onClick}
        >
          <CardHeader
            title={formatMessage({
              id: 'home.ourHistory',
              default: 'La nostra história'
            })}
            subtitle={
              formatMessage({
                id: 'home.ourHistorySubtile',
                default: 'Una mica d\'história'
              })
            }
          />
          <CardMedia>
            <img src="/img/ourHistory.jpg" />
          </CardMedia>
        </Card>
      </div>
      );
  }
}

export default injectIntl(OurHistoryCard);
