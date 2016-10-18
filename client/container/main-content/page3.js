import React from 'react';
import { Link } from 'react-router';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Icon, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';

export default function Page3() {
  return (
    <ScrollOverPack scrollName="page3" className="content-wrapper page" playScale={1} replay
      hideProps={{ image: { reverse: true } }}
    >
      <TweenOne key="image" className="image3 image-wrapper"
        animation={{ x: 0, opacity: 1, duration: 550 }}
        style={{ transform: 'translateX(-100px)', opacity: 0 }}
      />
      <QueueAnim className="text-wrapper text-wrapper-shifu" delay={300} key="text" duration={550}
        leaveReverse style={{ top: '40%' }}
      >
        <div className="content-wrapper-shifu">金洪流<span className="content-wrapper-shifu-des" style={{ maxWidth: 280 }}>严诚流空手道/少林拳流</span></div>
        <p>1992年开始学习少林武术、散手，武道生涯26年，多次获得国际级跆拳道、空手道、散打、拳击比赛冠军，培养了很多国际武道高手。</p>
        <p>2006年赴日本深造在「厳誠流空手道」本部任中国武术散手教练。</p>
        <p>2009年回国至今，开创洪流武道馆，任武道总教练。</p>
      </QueueAnim>
    </ScrollOverPack>
  );
}
