import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import style from './card.style';

class WeddingCard extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  render() {
    const { formatMessage, formatTime } = this.props.intl;
    return (
      <Card
        className="col-xs-12 col-sm-12 col-md-12 col-lg-10"
        style={style.container}
      >
        <CardHeader
          title={formatMessage({
            id: 'home.wedding',
            default: 'other'
          })}
          subtitle={
            formatTime(new Date(2016, 5, 28), {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })
          }
        />
        <CardMedia>
          <img src="/img/pont.jpg" />
        </CardMedia>
      </Card>
      );
  }
}

export default injectIntl(WeddingCard);
