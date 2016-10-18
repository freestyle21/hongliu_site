import "./index.less";
import React from 'react';
import { Select, Modal } from 'antd';

const Option = Select.Option;

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <ul>
          <li>
            <h2>了解更多</h2>
            <div>
              <a target="_blank " href="http://weibo.com/cnhongliu">
                微博
              </a>
            </div>
            <div>
              <a target="_blank " href="/">
                官网
              </a>
            </div>
            <div>
              <a target="_blank " href="/">
                扫码关注
              </a>
            </div>
            <div>
              <img className="footer-weixin" src="/client/styles/img/weixin.png" />
            </div>
          </li>
          <li>
            <h2>友链</h2>
            <div><a target="_blank" href="http://www.zjws.net/">浙江省武术协会</a>
            </div>
            <div><a target="_blank" href="http://wushu.sport.org.cn/">中国武术协会</a>
            </div>
            <div><a target="_blank" href="http://www.sport.org.cn/">中华全国体育总会</a>
            </div>
            <div><a target="_blank" href="http://www.kunlunjue.com/">昆仑决</a>
            </div>
            <div><a target="_blank" href="http://www.mmafighting.com/">MMA</a>
            </div>
          </li>
          <li>
            <div>Copyright © 2001 - 2016 洪流武道</div>
            <div>地址:德胜路312号德胜巷1号清水公寓</div>
            <div>手机/微信: 13456807950</div>
            <div>Powered by <a href="/">洪流武道</a></div>
          </li>
        </ul>
      </footer>
    );
  }
}
