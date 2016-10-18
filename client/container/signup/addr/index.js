import './index.less'

import React, {Component, PropTypes} from 'react'

export default class Addr extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    componentDidMount() {
        var map = new AMap.Map('signup-map', {
            center: [120.1536913472, 30.2935580371],
            zoom: 15
        });
        map.plugin(["AMap.ToolBar"], function() {
            map.addControl(new AMap.ToolBar());
        });
        var marker = new AMap.Marker({
            position: [120.1536913472, 30.2935580371],
            title: "洪流武道馆",
            map: map
        });
        marker.on('click', openInfo)

        var infoWindow = new AMap.InfoWindow({
            offset: new AMap.Pixel(0, -25),
            content: '洪流武道馆'
        });
        infoWindow.open(map, [120.1536913472, 30.2935580371]);
        function openInfo() {
            infoWindow.open(map, [120.1536913472, 30.2935580371]);
        }
    }

    render() {
        return (
            <div className="addr">
                <div className="content-title">
                    道馆地址
                </div>
                <div className="content-item">
                    <div className="content-item-title">地址</div>
                    <div className="content-item-content">
                        <p>杭州市拱墅区德胜路312号德胜巷1号清水公寓</p>
                    </div>
                    <div className="content-item-title">服务区域</div>
                    <div className="content-item-content">
                        <div className="content-item-map" id="signup-map"></div>
                    </div>
                </div>
            </div>
        )
    }
}
