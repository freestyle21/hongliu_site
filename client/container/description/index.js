import './index.less'
import { Link } from 'react-router';

import React, {Component, PropTypes} from 'react'

export default class Description extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="description">
                <div className="description-block">
                    <div className="description-left">
                        <ul className="description-left-list">
                            <li className="description-left-list-item">
                                <Link to="/description/base" activeClassName="description-left-list-item-active">道馆介绍</Link>
                            </li>
                            <li className="description-left-list-item">
                                <Link to="/description/phone" activeClassName="description-left-list-item-active">道馆照片</Link>
                            </li>
                            <li className="description-left-list-item">
                                <Link to="/description/student" activeClassName="description-left-list-item-active">学员感受</Link>
                            </li>
                            <li className="description-left-list-item">
                                <Link to="/description/lastest" activeClassName="description-left-list-item-active">最新资讯</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="description-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
