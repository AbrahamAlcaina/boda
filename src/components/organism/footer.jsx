import React, { Component } from 'react';
import Colors from 'material-ui/lib/styles/colors';
import Heart from 'material-ui/lib/svg-icons/action/favorite';
import style from './footer.style';

class Footer extends Component {
  static propTypes = {
  }

  render() {
    return (
      <footer style={style.container} className="navbar navbar-fixed-bottom">
        Hand crafted with <Heart
          style={{
            height: 20,
            width: 20,
            paddingTop: 8
          }}
          color={Colors.pink500}
        /> by &nbsp;
        <a href="mailto:nicolefiguera@gmail.com" style={style.link}>Nicole</a>
        &nbsp;
          <span style={{
            color: '#d81b60'
          }}
          >&amp;</span>&nbsp;
        <a href="mailto:abraham.alcaina@gmail.com" style={style.link}>Abraham</a>
      </footer>
    );
  }
}

export default Footer;
