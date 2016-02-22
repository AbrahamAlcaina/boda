import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

class WeddingCard extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  render() {
    const { formatMessage, formatTime } = this.props.intl;
    return (
      <Card
          className="col-xs-12 col-sm-10 col-md-6 col-lg-6"
          style={{
            padding:0,
            margin: 10
          }}
        >
          <CardHeader
            title={formatMessage({
              id:'home.wedding',
              default: 'other'
            })}
            subtitle={
              formatTime(new Date(2016,5,28), {
                day:'numeric',
                month:'long',
                year:'numeric'
              })
            }
          />
          <CardMedia>
            <img src="/img/pont.jpg" />
          </CardMedia>
        </Card>
      );
  }
};

export default injectIntl(WeddingCard);
