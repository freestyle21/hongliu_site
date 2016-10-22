import './index.less'

import React, {Component, PropTypes} from 'react'

export default class base extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="base">
                <div className="content-title">
                    道馆介绍
                </div>
                <div className="content-sub-title">
                习武修德 武者义也
                </div>
                <div className="content-item">
                    <div className="content-item-title">武道介绍</div>
                    <div className="content-item-content">
                        <p>武道：是一种执着追求，是格斗的一种方式。</p>
                        <p>不拘泥于任何固定的套路招式，以最终击倒或战胜对手为目的。</p>
                        <p>武道是心和身体的锻炼，不仅是一种具有高度攻击力的技术，特别注重礼节 精神（勇气，努力的结果。</p>
                        <p>在杭州就有一家练习自由搏击的武道馆，名叫洪流武道馆。</p>
                        <p>洪流武道馆，创立已有十余年，是广大习武爱好者的良好交流平台。</p>
                    </div>
                </div>

                <div className="content-item">
                    <div className="content-item-title">武道内容</div>
                    <div className="content-item-content">
                        <p>散打 拳击 自由搏击 综合格斗 空手道 跆拳道 女子防身术</p>
                    </div>
                </div>

                <div className="content-item">
                    <div className="content-item-title">武道精神</div>
                    <div className="content-item-content">
                        <p>武道，尊师重道，以礼始，以礼终，要劳记。</p>
                        <p>武道，以锻炼身体为主，不得随意攻击，要做到忍耐克己。</p>
                        <p>武道，坚持到底，全力以赴，达到心体技德锻炼，磨练出坚韧不拔的意志。</p>
                        <p>求至高人格，守忠诚之道，养努力精神，重尊卑已，融血气之勇。</p>
                        <p>我愿为武道做出应有的贡献，为发扬武道精神，全力以赴，今天我是最棒的！</p>
                    </div>
                </div>
            </div>
        )
    }
}
