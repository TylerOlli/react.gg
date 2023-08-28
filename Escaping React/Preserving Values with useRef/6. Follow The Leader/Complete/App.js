import * as React from "react";

function animateBox({ box, startX, startY, targetX, targetY }) {
  const distanceX = targetX - startX;
  const distanceY = targetY - startY;
  const frames = 30;
  let currentFrame = 0;

  const animate = () => {
    if (currentFrame <= frames) {
      const newX = startX + (distanceX * currentFrame) / frames;
      const newY = startY + (distanceY * currentFrame) / frames;
      box.style.transform = `translate(${newX}px, ${newY}px)`;
      currentFrame++;
      requestAnimationFrame(animate);
    }
  };

  animate();
}

export default function FollowTheLeader() {
  const boxRef = React.useRef();

  const handleClick = ({ clientX, clientY }) => {
    const box = boxRef.current;
    const rect = box.getBoundingClientRect();

    animateBox({
      box,
      startX: rect.left,
      startY: rect.top,
      targetX: clientX - rect.width / 2,
      targetY: clientY - rect.height / 2
    });
  };

  return (
    <div className="wrapper" onClick={handleClick}>
      <div ref={boxRef} className="box" />
    </div>
  );
}