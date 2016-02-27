import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { browserHistory } from 'react-router';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardActions from 'material-ui/lib/card/card-actions';
import FlatButton from 'material-ui/lib/raised-button';
import style from './card.style';

class GuestsCard extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  onClick = () => browserHistory.push('/guests');

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2" style={style.container}>
        <Card
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
          />
          <CardMedia>
            <img src="img/guests.jpg" />
          </CardMedia>
          <CardActions>
            <FlatButton primary label={formatMessage({
              id: 'home.guests.confirm',
              default: 'Confirmar assistencia'
            })}
            />
          </CardActions>
        </Card>
      </div>
      );
  }
}

export default injectIntl(GuestsCard);
