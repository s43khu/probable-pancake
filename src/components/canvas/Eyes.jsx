import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

const FollowEyes = () => {
  const sketch = (p) => {
    p.setup = () => {
      p.createCanvas(400, 400);
      p.colorMode(p.HSB);
      p.angleMode(p.DEGREES);
      p.noStroke();
    };

    p.draw = () => {
      p.clear();

      const eyeSize = 50; 
      const pupilSize = 25; 
      const eyeOffsetX = 50; 
      const eyeY = 200; 

      const leftX = 150;
      const leftY = eyeY;

      const leftAngle = p.atan2(p.mouseY - leftY, p.mouseX - leftX);

      p.push();
      p.translate(leftX, leftY);
      p.fill(255);
      p.ellipse(0, 0, eyeSize, eyeSize);
      p.rotate(leftAngle);
      p.fill(0);
      p.ellipse(eyeSize / 4, 0, pupilSize, pupilSize);
      p.pop();

      const rightX = 250;
      const rightY = eyeY;

      const rightAngle = p.atan2(p.mouseY - rightY, p.mouseX - rightX);

      p.push();
      p.translate(rightX, rightY);
      p.fill(255);
      p.ellipse(0, 0, eyeSize, eyeSize);
      p.rotate(rightAngle);
      p.fill(0);
      p.ellipse(eyeSize / 4, 0, pupilSize, pupilSize);
      p.pop();
    };

    p.windowResized = () => {
      p.resizeCanvas(400, 400);
    };
  };

  return <ReactP5Wrapper sketch={sketch} />;
};

export default FollowEyes;
