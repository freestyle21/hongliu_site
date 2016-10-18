import './index.less'
import { Pagination } from 'antd'

import React, {Component, PropTypes} from 'react'

export default class lastest extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="lastest">
                <div className="content-title">
                    最新资讯
                </div>
                <div className="content-sub-title">
                武道馆相关的新闻
                </div>

                <div className="content-item content-item-lastest">
                    <div className="content-item-title"></div>
                    <div className="content-item-content">
                        <ul className="content-item-student-list">
                            <li className="content-item-student-item">
                                <a href="javascript:void(0);"> >> 洪流武道馆第15届户外集训开启！</a>
                            </li>
                            <li className="content-item-student-item">
                                <a href="javascript:void(0);"> >> 2016年寒假短期提升班开始报名啦！</a>
                            </li>
                            <li className="content-item-student-item">
                                <a href="javascript:void(0);"> >> 青少年儿童洪流武道散打格斗培养班</a>
                            </li>
                            <li className="content-item-student-item">
                                <a href="javascript:void(0);"> >> 洪流武道馆举行第3届考带比赛</a>
                            </li>
                            <li className="content-item-student-item">
                                <a href="javascript:void(0);"> >> 洪流武道馆第14届户外集训开启!</a>
                            </li>
                            <li className="content-item-student-item">
                                <a href="javascript:void(0);"> >> 洪流武道馆第13届户外集训开启!</a>
                            </li>
                            <li className="content-item-student-item">
                                <a href="javascript:void(0);"> >> 洪流武道馆第12届户外集训开启!</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content-item-lastest-controll">
                    <Pagination size="small" total={50} />
                </div>
            </div>
        )
    }
}
