import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Colors from 'material-ui/lib/styles/colors';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import Hotel from 'material-ui/lib/svg-icons/maps/hotel';
import { browserHistory } from 'react-router';
import style from './card.style';

class SleepPlace extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  onClick = () => browserHistory.push('/sleep-place');

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
              id: 'home.sleepPlace',
              default: 'Allotjament'
            })}
            subtitle={
              formatMessage({
                id: 'home.sleepPlaceSubtitle',
                default: 'On durmim'
              })
            }
            style={style.cardHeader}
          />
          <CardMedia>
            <Hotel
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

export default injectIntl(SleepPlace);
