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
      if (document.querySelector('#header .nav').contains(e.target)) {
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
              <img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
              <span>Ant Design</span>
            </Link>
          </Col>
          <Col className={`nav ${this.state.menuVisible ? 'nav-show' : ''}`}
            lg={20} md={18} sm={17} xs={0} style={{ display: 'block' }}
          >
            <Menu mode={this.state.menuMode} selectedKeys={[activeMenuItem]} id="nav">
              <Menu.Item key="home">
                <Link to="/main">
                  home
                </Link>
              </Menu.Item>
              <Menu.Item key="a">
                <Link to="/a">
                  practice
                </Link>
              </Menu.Item>
              <Menu.Item key="b">
                <Link to="b">
                  pattern
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </header>
    );
  }
}
