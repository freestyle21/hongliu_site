import React from 'react';
import { Link } from 'react-router';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';

export default class Banner extends React.Component {
  typeFunc(a) {
    if (a.key === 'line') {
      return 'right';
    } else if (a.key === 'button') {
      return 'bottom';
    }
    return 'left';
  }

  render() {
    return (
      <section id="banner">
        <ScrollElement scrollName="banner" className="page">
          <QueueAnim className="banner-text-wrapper" type={this.typeFunc} delay={300}>
            <h2 key="h2">洪流 <p>武道</p></h2>
            <p key="content">习武修德 武者义也</p>
            <span className="line" key="line" />
            <div key="button1" className="start-button clearfix">
              <Link to="/docs/spec/introduce">
                道馆介绍
              </Link>
              <Link to="/docs/spec/react">
                咨询报名
              </Link>
            </div>
          </QueueAnim>
          <Icon type="down" className="down" />
        </ScrollElement>
      </section>
    );
  }
}