import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import Place from 'material-ui/lib/svg-icons/maps/place';
import Colors from 'material-ui/lib/styles/colors';

class WeddingPlaceCard extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <Card
        className="col-xs-12 col-sm-10 col-md-6 col-lg-6"
        style={{
          padding: 0,
          margin: 10
        }}
      >
        <CardHeader
          title={formatMessage({
            id: 'home.weddingPlace',
            default: 'other'
          })}
          subtitle={
            formatMessage({
              id: 'home.weddingPlaceSubtitle',
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

export default injectIntl(WeddingPlaceCard);
