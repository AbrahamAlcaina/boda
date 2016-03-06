import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { browserHistory } from 'react-router';
import Place from 'material-ui/lib/svg-icons/maps/place';
import Colors from 'material-ui/lib/styles/colors';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import Link from 'material-ui/lib/svg-icons/navigation/arrow-forward';
import style from './card.style';
import FlatButton from 'material-ui/lib/flat-button';
import { FormattedMessage } from 'react-intl';
import CardActions from 'material-ui/lib/card/card-actions';

class WeddingPlaceCard extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  onClick = () => browserHistory.push('/weeding-place');

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
              id: 'home.weddingPlace',
              default: 'Celebració de la boda'
            })}
            subtitle={
              formatMessage({
                id: 'home.weddingPlaceSubtitle',
                default: 'On es la gresca!'
              })
            }
            style={style.cardHeader}
          />
          <CardMedia>
            <Place
              style={{
                width: 200,
                height: 200
              }}
              color={Colors.grey800}
            />
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

export default injectIntl(WeddingPlaceCard);
