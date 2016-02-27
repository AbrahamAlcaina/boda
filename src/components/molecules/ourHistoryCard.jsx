import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardMedia from 'material-ui/lib/card/card-media';
import style from './card.style';

class OurHistoryCard extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4" style={style.container}>
        <Card
          style={style.card}
        >
          <CardMedia>
            <img src="/img/praga.jpg" />
          </CardMedia>
          <CardTitle title={formatMessage({
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
        </Card>
      </div>
      );
  }
}

export default injectIntl(OurHistoryCard);
