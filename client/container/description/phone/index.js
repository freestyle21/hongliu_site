import './index.less'

import React, {Component, PropTypes} from 'react'

export default class phone extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="phone">
                <div className="content-title">
                    道观照片
                </div>
                <div className="content-sub-title">
                纪录武道馆的日常训练照片，及照片背后的故事。
                </div>

                <div className="content-item">
                    <div className="content-item-title">野外训练</div>
                    <div className="content-item-content">
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <img src="/client/styles/img/gallary/outside/1.jpg" />
                            </div>
                            <span className="content-item-img-des">野外训练-合影</span>
                        </div>
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <img src="/client/styles/img/gallary/outside/2.jpg" />
                            </div>
                            <span className="content-item-img-des">野外训练-体能</span>
                        </div>
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <img src="/client/styles/img/gallary/outside/3.jpg" />
                            </div>
                            <span className="content-item-img-des">野外训练-合影</span>
                        </div>
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <img src="/client/styles/img/gallary/outside/4.jpg" />
                            </div>
                            <span className="content-item-img-des">野外训练-推小车</span>
                        </div>
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <img src="/client/styles/img/gallary/outside/6.jpg" />
                            </div>
                            <span className="content-item-img-des">野外训练－爬山</span>
                        </div>
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <img src="/client/styles/img/gallary/outside/7.jpg" />
                            </div>
                            <span className="content-item-img-des">野外训练－背同伴短跑</span>
                        </div>
                    </div>
                </div>

                <div className="content-item">
                    <div className="content-item-title">道馆训练</div>
                    <div className="content-item-content">
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <img src="/client/styles/img/gallary/daoguan/1.jpg" />
                            </div>
                            <span className="content-item-img-des">道馆训练-pose</span>
                        </div>
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <img src="/client/styles/img/gallary/daoguan/2.jpg" />
                            </div>
                            <span className="content-item-img-des">道馆训练-下叉</span>
                        </div>
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <img src="/client/styles/img/gallary/daoguan/3.jpg" />
                            </div>
                            <span className="content-item-img-des">道馆训练-师傅示范</span>
                        </div>
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <img src="/client/styles/img/gallary/daoguan/4.jpg" />
                            </div>
                            <span className="content-item-img-des">道馆训练-合影</span>
                        </div>
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <img src="/client/styles/img/gallary/daoguan/6.jpg" />
                            </div>
                            <span className="content-item-img-des">道馆训练-师姐练拳</span>
                        </div>
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <img src="/client/styles/img/gallary/daoguan/7.jpg" />
                            </div>
                            <span className="content-item-img-des">道馆训练-师傅练拳后</span>
                        </div>
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <img src="/client/styles/img/gallary/daoguan/8.jpg" />
                            </div>
                            <span className="content-item-img-des">道馆训练-一对五实战</span>
                        </div>
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <img src="/client/styles/img/gallary/daoguan/9.jpg" />
                            </div>
                            <span className="content-item-img-des">道馆训练-压腿</span>
                        </div>
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <img src="/client/styles/img/gallary/daoguan/10.jpg" />
                            </div>
                            <span className="content-item-img-des">道馆训练-前手直拳</span>
                        </div>
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <img src="/client/styles/img/gallary/daoguan/11.jpg" />
                            </div>
                            <span className="content-item-img-des">道馆训练-训练后合影</span>
                        </div>
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <img src="/client/styles/img/gallary/daoguan/12.jpg" />
                            </div>
                            <span className="content-item-img-des">道馆训练-横叉</span>
                        </div>
                    </div>
                </div>

                <div className="content-item">
                    <div className="content-item-title">训练视频</div>
                    <div className="content-item-content">
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                <embed src="http://player.youku.com/player.php/sid/XMTYyNDg3MDY2MA==/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
                            </div>
                            <span className="content-item-img-des">师兄训练视频</span>
                        </div>
                    </div>
                    <div className="content-item-content">
                        <div className="content-item-img-gallary">
                            <div className="content-item-img-wrap">
                                更多尽情期待。。。
                            </div>
                            <span className="content-item-img-des">更多尽情期待</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
