import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './ImagesZoomIn.css';
import img1 from '../../../assets/nature/1.jpeg';
import img2 from '../../../assets/nature/2.jpeg';
import img3 from '../../../assets/nature/3.jpeg';  
import img4 from '../../../assets/nature/4.jpeg';
import img5 from '../../../assets/nature/5.jpeg';
import img6 from '../../../assets/nature/6.jpeg';

const CardZoomIn = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const slides = gsap.utils.toArray<HTMLElement>(".slide");
    const activeSlideImages = gsap.utils.toArray<HTMLElement>(".active-slide img");

    const getInitialZ = (slide: HTMLElement) => {
      const style = window.getComputedStyle(slide);
      const matrix = style.transform.match(/^matrix3d\((.+)\)/);

      return matrix ? parseFloat(matrix[1].split(", ")[14]) : 0;
    };

    const mapRange = (
      value: number,
      inMin: number,
      inMax: number,
      outMin: number,
      outMax: number
    ) => ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

    slides.forEach((slide, index) => {
      const initialZ = getInitialZ(slide);

      ScrollTrigger.create({
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const zIncrement = progress * 12500;
          const currentZ = initialZ + zIncrement;

          let opacity;

          if (currentZ > -2500) {
            opacity = mapRange(currentZ, -2500, 0, 0.5, 1);
          } else {
            opacity = mapRange(currentZ, -5000, -2500, 0, 0.5);
          }

          slide.style.opacity = opacity.toString();
          slide.style.transform = `translate(-50%, -50%) translateZ(${currentZ}px)`;

          if (currentZ < 100) {
            gsap.to(activeSlideImages[index], 1.5, {
              opacity: 1,
              ease: "power3.out",
            });
          } else {
            gsap.to(activeSlideImages[index], 1.5, {
              opacity: 0,
              ease: "power3.out",
            });
          }
        },
      });
    });
  }, []);

  return (
    <div className="card-zoom-in">
      <div className="container">
        <div className="active-slide">
          {[img1, img2, img3, img4, img5, img6].map((image, index) => (
            <img src={image} alt="" key={index} />
          ))}
        </div>

        <div className="slider">
          {[img1, img2, img3, img4, img5, img6].map((image, index) => (
            <div className="slide" id={`slide-${index + 1}`} key={index}>
              <div className="slide-img">
                <img src={image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardZoomIn;