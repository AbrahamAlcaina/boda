import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import style from './card.style';
import Relative from 'material-ui/lib/svg-icons/notification/event-available';
import Colors from 'material-ui/lib/styles/colors';

class CountDown extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };
  render() {
    const { formatMessage, formatRelative } = this.props.intl;
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
            id: 'home.countdown',
            default: 'other'
          })}
          subtitle={
            formatRelative(new Date(2016, 4, 28), {
              units: 'day'
            })
          }
          style={style.cardHeader}
        />

        <CardMedia>
          <Relative
            style={{
              height: 200,
              width: 200
            }}
            color={Colors.grey800}
          />
        </CardMedia>

      </Card>
    </div>
      );
  }
}

export default injectIntl(CountDown);
