import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { browserHistory } from 'react-router';
import Card from 'material-ui/lib/card/card';
import Colors from 'material-ui/lib/styles/colors';
import Fly from 'material-ui/lib/svg-icons/action/flight-takeoff';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import style from './card.style';

class WeekendPlan extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  onClick = () => browserHistory.push('/weeding-list');

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
              id: 'home.weedingList'
            })}
            subtitle={
              formatMessage({
                id: 'home.weedingListSubtitle'
              })
            }
            style={style.cardHeader}
          />
          <CardMedia>
            <Fly
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

export default injectIntl(WeekendPlan);
