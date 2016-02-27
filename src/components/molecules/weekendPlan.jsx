import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import style from './card.style';

class WeekendPlan extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2" style={style.container}>
        <Card
          style={style.card}
        >
          <CardHeader
            title={formatMessage({
              id: 'home.WeekendPlan',
              default: 'Pla del finde'
            })}
            subtitle={
              formatMessage({
                id: 'home.WeekendPlanSubtitle',
                default: 'Com anirá la cosa'
              })
            }
          />
          <CardMedia>
            <img src="img/weekendPlan.jpg" />
          </CardMedia>
          </Card>
        </div>
      );
  }
}

export default injectIntl(WeekendPlan);
