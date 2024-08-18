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
        const activeSlide = gsap.utils.toArray<HTMLElement>(".active-slide img");

        const getInitialTranslateZ = (slide: any) => {
            const style = window.getComputedStyle(slide);
            const matrix = style.transform.match(/^matrix3d\((.+)\)/);

            if (matrix) {
                const values = matrix[1].split(', ');
                return parseFloat(values[14]) || 0;
            }

            return 0;
        }

        const mapRange = (value: any, inMin: any, inMax: any, outMin: any, outMax: any) => {
            return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
        }

        slides.forEach((slide, index) => {
            const initialZ = getInitialTranslateZ(slide);

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

                    slide.style.opacity = opacity
                    slide.style.transform = `translate(-50%, -50%) translateZ(${currentZ}px)`;

                    if (currentZ < 100) {
                        gsap.to(activeSlide[index], 1.5, {
                            opacity: 1,
                            ease: "power3.out"
                        });
                    } else {
                        gsap.to(activeSlide[index], 1.5, {
                            opacity: 0,
                            ease: "power3.out"
                        });
                    }
                }
            });
        });
    }, []);


    return (
        <div className='card-zoom-in'>
            <div className="container">
                <div className="active-slide">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                </div>

                <div className="slider">
                    <div className="slide" id="slide-1">
                        <div className="slide-img">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <div className="slide" id="slide-2">
                        <div className="slide-img">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                    <div className="slide" id="slide-3">
                        <div className="slide-img">
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    <div className="slide" id="slide-4">
                        <div className="slide-img">
                            <img src={img4} alt="" />
                        </div>
                    </div>
                    <div className="slide" id="slide-5">
                        <div className="slide-img">
                            <img src={img5} alt="" />
                        </div>
                    </div>
                    <div className="slide" id="slide-6">
                        <div className="slide-img">
                            <img src={img6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardZoomIn;