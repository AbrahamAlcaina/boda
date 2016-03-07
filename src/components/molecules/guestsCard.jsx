import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { browserHistory } from 'react-router';
import Card from 'material-ui/lib/card/card';
import Men from 'material-ui/lib/svg-icons/social/group-add';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import Colors from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';
import { FormattedMessage } from 'react-intl';
import CardActions from 'material-ui/lib/card/card-actions';
import Link from 'material-ui/lib/svg-icons/navigation/arrow-forward';
import style from './card.style';

class GuestsCard extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  onClick = () => browserHistory.push('/guests');

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
              id: 'home.guests',
              default: 'Convidats'
            })}
            subtitle={
              formatMessage({
                id: 'home.guestsSubtile',
                default: 'Tot el que necesiteu saber'
              })
            }
            style={style.cardHeader}
          />
          <CardMedia>
            <Men
              style={{
                height: 200,
                width: 200
              }}
              color={Colors.grey800}
            />
          </CardMedia>
          <CardActions>
            <FlatButton
              style={{
                margin: 12, float: 'right'
              }}
              label={
                <FormattedMessage id="go" />
              }
              primary
              icon={
                <Link color={Colors.pinkA400} />
              }
              labelPosition="before"
            />
          </CardActions>
        </Card>
      </div>
      );
  }
}

export default injectIntl(GuestsCard);
