import './index.less';
import React from 'react';
import { Link } from 'react-router';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import { Select, Menu, Row, Col, Icon, Button } from 'antd';

const Option = Select.Option;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.onScroll = debounce(() => {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop >= clientHeight) {
        this.setState({ isFirstFrame: false });
      } else {
        this.setState({ isFirstFrame: true });
      }
    }, 100);

    this.onDocumentClick = (e) => {
      if (document.querySelector('#header .row').contains(e.target)) {
        return;
      }
      this.setState({
        menuVisible: false,
      });
    };

    this.state = {
      menuVisible: false,
      menuMode: 'horizontal',
      isFirstFrame: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);

    document.addEventListener('click', this.onDocumentClick);
    document.addEventListener('touchstart', this.onDocumentClick);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    document.removeEventListener('click', this.onDocumentClick);
    document.removeEventListener('touchstart', this.onDocumentClick);
  }

  render() {
    const { location, picked } = this.props;

    let activeMenuItem = 'home';
    // if (activeMenuItem === 'components' || location.pathname === 'changelog') {
    //   activeMenuItem = 'docs/react';
    // }


    const headerClassName = classNames({
      clearfix: true,
      'home-nav-white': !this.state.isFirstFrame,
    });

    return (
      <header id="header" className={headerClassName}>
        <Row>
          <Col lg={4} md={6} sm={7} xs={24}>
            <Link to="/" id="logo">
              <img alt="logo" src="./logo.png" />
              <span>洪流武道馆</span>
            </Link>
          </Col>
          <Col className={`header-nav ${this.state.menuVisible ? 'nav-show' : ''}`}
            lg={20} md={18} sm={17} xs={0} style={{ display: 'block' }}
          >
            <Link to="/main" activeClassName="header-nav-active">
              首页
            </Link>
            <Link to="/description" activeClassName="header-nav-active">
              道馆
            </Link>
            <Link to="/signup" activeClassName="header-nav-active">
              咨询
            </Link>
          </Col>
        </Row>
      </header>
    );
  }
}
