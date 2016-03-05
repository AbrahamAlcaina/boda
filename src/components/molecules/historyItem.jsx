import React, { Component, PropTypes } from 'react';
import Circle from 'material-ui/lib/svg-icons/action/check-circle';
import Event from 'material-ui/lib/svg-icons/action/event';
import Colors from 'material-ui/lib/styles/colors';
import { FormattedMessage, } from 'react-intl';

class HistoryItem extends Component {
  static propTypes = {
    color: PropTypes.any,
    title: PropTypes.any,
    date: PropTypes.any,
    text: PropTypes.any,
    imgSrc: PropTypes.any,
    inverted: PropTypes.bool
  }
  render() {
    const color = this.props.color || Colors.grey200;
    const title = this.props.title;
    const text = this.props.text;
    const imgSrc = this.props.imgSrc;
    return (
      <li className={this.props.inverted ? 'timeline-inverted' : '' }>
        <div className="timeline-badge" >
        <Event
          style={{
            marginTop: 14
          }}
          color={color}
        />
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4 className="timeline-title"><FormattedMessage id={title} /></h4>
            <p>
              <small className="text-muted">
              </small>
           </p>
          </div>
          <div className="timeline-body">
            <img className="img-responsive"
              src ={imgSrc}
            />
            <p>
              <FormattedMessage id={text} />
            </p>
          </div>
        </div>
      </li>
    );
  }
}
export default HistoryItem;
