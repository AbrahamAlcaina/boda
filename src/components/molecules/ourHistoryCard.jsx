import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { browserHistory } from 'react-router';
import Colors from 'material-ui/lib/styles/colors';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import Heart from 'material-ui/lib/svg-icons/action/favorite-border';
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
            <Heart
              style={{
                height: 200,
                width: 200
              }}
              color={Colors.pink500}
            />
          </CardMedia>
        </Card>
      </div>
      );
  }
}

export default injectIntl(OurHistoryCard);
