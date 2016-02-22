import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

class OurHistoryCard extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  render() {
    const { formatMessage, formatTime } = this.props.intl;
    return (
      <Card
          className="col-xs-12 col-sm-2 col-md-1 col-lg-1"
          style={{
            padding:0,
            margin: 10
          }}
        >
          <CardHeader
            title={formatMessage({
              id:'home.OurHistory',
              default: 'Our history'
            })}
            subtitle={
              formatMessage({
                id:'home.ourHistorySubtile',
                default: 'All about us'
              })
            }
          />
          <CardMedia>
            <img src="/img/praga.jpg" />
          </CardMedia>
        </Card>
      );
  }
};

export default injectIntl(OurHistoryCard);
