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
      <div
        className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1"
        style={style.container}
      >
        <Card
          style={style.cardBig}
        >
        <CardHeader
          title={formatMessage({
            id: 'home.wedding',
            default: 'other'
          })}
          subtitle={
            formatTime(new Date(2016, 4, 28), {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })
          }
          style={style.cardHeader}
        />
        <CardMedia>
          <img src="/img/pont2.jpg" className="img-responsive"/>
        </CardMedia>
      </Card>
    </div>
      );
  }
}

export default injectIntl(WeddingCard);
