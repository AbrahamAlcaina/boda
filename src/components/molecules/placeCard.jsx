import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import Hotel from 'material-ui/lib/svg-icons/maps/local-bar';
import Colors from 'material-ui/lib/styles/colors';
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
      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3" style={style.container}>
        <Card
          style={style.cardSmall}
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
            style={style.cardHeader}
          />
          <CardMedia>
            <Hotel
              style={{
                height: 200,
                width: 200
              }}
              color={Colors.grey800}
            />
          </CardMedia>
          </Card>
        </div>
      );
  }
}

export default injectIntl(PlaceCard);
