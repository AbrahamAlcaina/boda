import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { browserHistory } from 'react-router';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import style from './card.style';
import YouTube from 'react-youtube';

class WeddingPlaceCard extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  onClick = () => browserHistory.push('/place');

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4" style={style.container}>
        <Card
          style={style.card}
          onTouchTap={this.onClick}
        >
          <CardHeader
            title={formatMessage({
              id: 'home.weddingPlace',
              default: 'Celebració de la boda'
            })}
            subtitle={
              formatMessage({
                id: 'home.weddingPlaceSubtitle',
                default: 'On es la gresca!'
              })
            }
          />
          <CardMedia>
            <YouTube
              videoId="8a0mTUbaGOc"
            />
          </CardMedia>
        </Card>
      </div>
      );
  }
}

export default injectIntl(WeddingPlaceCard);
