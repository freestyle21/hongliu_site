import './index.less'
import { Link } from 'react-router';

import React, {Component, PropTypes} from 'react'

export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="signup">
                <div className="signup-block">
                    <div className="signup-left">
                        <ul className="signup-left-list">
                            <li className="signup-left-list-item">
                                <Link to="/signup/addr" activeClassName="signup-left-list-item-active">道馆地址</Link>
                            </li>
                            <li className="signup-left-list-item">
                                <Link to="/signup/way" activeClassName="signup-left-list-item-active">联系方式</Link>
                            </li>
                            <li className="signup-left-list-item">
                                <Link to="/signup/online" activeClassName="signup-left-list-item-active">在线报名</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="signup-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
