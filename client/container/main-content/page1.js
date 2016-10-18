import React from 'react';
import { Link } from 'react-router';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Icon, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';

const clientHeight = document.documentElement.clientHeight;
function onScrollEvent(e) {
  const header = document.getElementById('header');
  if (e.pageY >= clientHeight) {
    if (header.className.indexOf('home-nav-bottom') < 0) {
      header.className += ' home-nav-bottom';
    }
  } else if (header.className.indexOf('home-nav-bottom') >= 0) {
    header.className = header.className.replace(/home-nav-bottom/ig, '');
  }
}

export default function Page1() {
  return (
    <ScrollOverPack scrollName="page1" className="content-wrapper page"
      playScale={1} replay scrollEvent={onScrollEvent}
      hideProps={{ image: { reverse: true } }}
    >
      <TweenOne key="image" className="image1 image-wrapper"
        animation={{ x: 0, opacity: 1, duration: 550 }}
        style={{ transform: 'translateX(-100px)', opacity: 0 }}
      />
      <QueueAnim className="text-wrapper" delay={300} key="text" duration={550} leaveReverse>
        <h2 key="h2">武道</h2>
        <p key="p" style={{ maxWidth: 410 }}>是一种执着追求，是格斗的一种方式。</p>
        <p key="n" style={{ maxWidth: 410 }}>不拘泥于任何固定的套路招式，以最终击倒或战胜对手为目的。</p>
        <p key="f" style={{ maxWidth: 410 }}>武道是心和身体的锻炼，不仅是一种具有高度攻击力的技术，特别注重礼节 精神（勇气，努力的结果）.</p>
        <p key="q" style={{ maxWidth: 410 }}>在杭州就有一家练习自由搏击的武道馆，名叫洪流武道馆。</p>
      </QueueAnim>
    </ScrollOverPack>
  );
}
