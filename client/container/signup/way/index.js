import './index.less'

import React, {Component, PropTypes} from 'react'

export default class Way extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="way">
                <div className="content-title">
                    联系方式
                </div>
                <div className="content-item">
                    <div className="content-item-title">报名方式</div>
                    <div className="content-item-content">
                        <p>QQ: 649660059</p>
                        <p>电话: 13456807950</p>
                        <p>微信: 13456807950</p>
                        <p>微博: <a href="http://weibo.com/cnhongliu" target="_blank">http://weibo.com/cnhongliu</a></p>
                        <p>服务区域: 大杭州区域(杭州市区、滨江、萧山、余杭、转塘、绍兴)</p>
                    </div>
                </div>
            </div>
        )
    }
}
