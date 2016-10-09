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
            <h2>GitHub</h2>
            <div>
              <a target="_blank " href="https://github.com/ant-design/ant-design">
                repo
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/antd-init">antd-init</a> -
              scaffold
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://ant-tool.github.io">ant-tool</a> - dev-tools
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva">dva</a> - dva
            </div>
          </li>
          <li>
            <h2>links</h2>
            <div><a href="http://mobile.ant.design">Ant Design Mobile</a> -
              mobile
            </div>
            <div><a href="https://g2.alipay.com/">G2</a> -
              data-vis
            </div>
            <div><a href="https://antv.alipay.com/">AntV</a> -
              data-vis-spec
            </div>
            <div><a href="http://motion.ant.design">Ant Motion</a> -
              motion
            </div>
            <div><a href="http://ux.ant.design">Ant UX</a> -
              material
            </div>
          </li>
          <li>
            <h2>community</h2>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="/changelog">
                change-log
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/ant-design/issues">
                feedback
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/ant-design/ant-design">
                discuss
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/ant-design/issues/new">
                bug-report
              </a>
            </div>
          </li>
          <li>
            <div>©2016 author</div>
            <div>Powered by <a href="https://github.com/benjycui/bisheng">BiSheng</a></div>
            <div style={{ marginTop: 10 }}>
              version
              、
            </div>
          </li>
        </ul>
      </footer>
    );
  }
}