import { BrowserRouter } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { Toaster } from "react-hot-toast";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const main = useRef();
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      const directions = ['left', 'right', 'top', 'bottom'];

      boxes.forEach((box, index) => {
        const direction = directions[index % directions.length];
        let x = 0, y = 0;

        switch (direction) {
          case 'left':
            x = -150;
            break;
          case 'right':
            x = 150;
            break;
          case 'top':
            y = -150;
            break;
          case 'bottom':
            y = 150;
            break;
          default:
            break;
        }

        gsap.fromTo(box, { x, y }, {
          x: 0,
          y: 0,
          scrollTrigger: {
            trigger: box,
            start: 'top bottom',
            end: 'top 20%',
            scrub: true,
            // markers: true,
          },
        });
      });
    },
    { scope: main }
  );

  return (
    <BrowserRouter>
      <Toaster
        toastOptions={{
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <StarsCanvas />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar className="navbar" />
          <Hero className="hero animate-section" />
        </div>
        <div className="section flex-center column" ref={main}>
          <About className="box" />
          <Experience className="box" />
          <Tech className="box" />
          <Works className="box" />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact className="box" />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
