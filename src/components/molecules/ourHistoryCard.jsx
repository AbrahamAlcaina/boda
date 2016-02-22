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
      <Card
        className="col-xs-12 col-sm-2 col-md-4 col-lg-4"
        style={style.container}
      >
          <CardMedia>
            <img src="/img/praga.jpg" />
          </CardMedia>

          <CardTitle title={formatMessage({
            id: 'home.ourHistory',
            default: 'Our history'
          })}
          subtitle={
            formatMessage({
              id: 'home.ourHistorySubtile',
              default: 'All about us'
            })
          } />
        </Card>
      );
  }
};

export default injectIntl(OurHistoryCard);
