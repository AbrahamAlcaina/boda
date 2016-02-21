import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import AutoResponsive from 'autoresponsive-react';


import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';



class Home extends Component {
  static displayName = 'Home';
  static propTypes = {
  };
  constructor(props) {
    super(props);
    this.state = {
      containerWidth: 1900
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        containerWidth: React.findDOMNode(this.refs.container).clientWidth
      });
    }, false);
  }

  getAutoResponsiveProps = () =>
  ({
    itemMargin: 10,
    containerWidth: this.state.containerWidth,
    itemClassName: 'item',
    gridWidth: 100,
    transitionDuration: '.5'
  });


  render() {
    return (
      <div>
        <Helmet title="Home"/>
          <AutoResponsive ref="container" {...this.getAutoResponsiveProps()} >
              <div className="item" itemClassName="item" style={{ width: 900, height: 540 }} >
                <Card style={{
                    width: '100%'
                  }}>
                  <CardHeader
                    title="Ens casem!"
                    subtitle="28 de maig de 2016"
                  />
                <CardMedia>
                  <img src="/img/pont.jpg" />
                </CardMedia>
              </Card>
              </div>
          </AutoResponsive>
      </div>);
  }
}
const selector = createSelector(
  [state => state.get('navigation')],
  state => ({ navigation: state.get('navigation') })
);

const actions = Object.assign({}, {});

export default connect(selector, actions)(Home);
