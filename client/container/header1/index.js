import './index.less'
import React, {Component, PropTypes} from 'react'
import { Select, Menu, Row, Col, Icon, Button } from 'antd';
import { Link } from 'react-router'

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="header">
                <Row>
                  <Col lg={4} md={6} sm={7} xs={24} className="header-logo">
                    <Link to="/" id="logo">
                      <img alt="logo" src="./logo.jpg" />
                      <span>洪流武道</span>
                    </Link>
                  </Col>
                    <div className="header-nav">
                        <Link className="header-nav-item" activeClassName="header-nav-item-active" to="/main">
                          首页
                        </Link>
                        <Link className="header-nav-item" activeClassName="header-nav-item-active" to="/a">
                          道馆风采
                        </Link>
                        <Link className="header-nav-item" activeClassName="header-nav-item-active" to="/b">
                          咨询报名
                        </Link>
                    </div>
                </Row>
            </div>
        )
    }
}