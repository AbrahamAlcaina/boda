import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import Place from 'material-ui/lib/svg-icons/maps/place';
import Colors from 'material-ui/lib/styles/colors';
import style from './card.style';

class PlaceCard extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <Card
        className="col-xs-12 col-sm-10 col-md-6 col-lg-6"
        style={style.container}
      >
        <CardHeader
          title={formatMessage({
            id: 'home.placePlace',
            default: 'other'
          })}
          subtitle={
            formatMessage({
              id: 'home.placeSubtitle',
              default: 'other'
            })
          }
        />
        <CardMedia>
          <Place color={Colors.blue500} style={{
            width: 300,
            heigth: 300
          }}
          />
        </CardMedia>
        </Card>
      );
  }
}

export default injectIntl(PlaceCard);
