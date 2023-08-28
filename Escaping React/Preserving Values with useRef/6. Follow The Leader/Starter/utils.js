export function animateBox({ box, startX, startY, targetX, targetY }) {
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