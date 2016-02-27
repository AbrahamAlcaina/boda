import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import { browserHistory } from 'react-router';
import style from './card.style';

class PlaceCard extends Component {
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
              id: 'home.placePlace',
              default: 'Allotjament'
            })}
            subtitle={
              formatMessage({
                id: 'home.placeSubtitle',
                default: 'On durmim'
              })
            }
          />
          <CardMedia>
            <img src="img/bungalows.jpg" />
          </CardMedia>
          </Card>
        </div>
      );
  }
}

export default injectIntl(PlaceCard);
