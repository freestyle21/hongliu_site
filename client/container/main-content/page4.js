import React from 'react';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

export default function Page4() {
  return (
    <ScrollOverPack scrollName="page4" className="content-wrapper page"
      playScale={1} hideProps={{ image: { reverse: true } }}
    >
      <QueueAnim className="text-wrapper-bottom" delay={300} key="text" duration={550}
        leaveReverse type="bottom"
      >
        <div className="content-wrapper-shifu">郑青扬<span className="content-wrapper-shifu-des" style={{ maxWidth: 280 }}>严诚流空手道/少林拳流</span></div>
        <p className="content-wrapper-zhengjiao">金师傅得意弟子之一，作为一名搏击运动员，完全要靠拳脚征服观众来证明自己，拼的是实力，虽然他还很年轻，但在诸多实战表演中表现惊人！可见他绝对是一位实力派搏击手，非凡实力加上帅气外型，值得期待！</p>
      </QueueAnim>
      <TweenOne key="image" className="image4 bottom-wrapper" animation={{ y: 0, opacity: 1, duration: 550, delay: 550 }}
        style={{ transform: 'translateY(50px)', opacity: 0 }}
      />
    </ScrollOverPack>
  );
}
