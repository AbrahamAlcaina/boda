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
      <div className="col-xs-12 col-sm-10 col-md-3 col-lg-4" style={style.container}>
        <Card
          style={style.card}
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
            <Place color={Colors.blue500} style={{
              height: '100%',
              with: '100%'
            }}
            />
          </CardMedia>
          </Card>
        </div>
      );
  }
}

export default injectIntl(PlaceCard);
