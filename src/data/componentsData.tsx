//------------------- Components -------------------//

//Cards
import CardTiltEffect from '../components/cards/3d-card-tilt-effect/cardTiltEffect';
import FlipCard3dEffects from '../components/cards/3d-flip-card-hover-effects/FlipCardHover3dEffects';
import CardFlippingAnimation from '../components/cards/card-flipping-animation/CardFlippingAnimation';
import CardSlideUp from '../components/cards/card-slide-up/CardSlideUp';
import ExtensionCardHover from '../components/cards/extension-card-hover/ExtensionCardHover';
import GlassmorphismCardHoverEffects from '../components/cards/glassmorphism-card-hover-effects/GlassmorphismCardHoverEffects';

//Images Animation
import ImagesZoomIn from '../components/images-animation/images-zoom-in/ImagesZoomIn';

//Text Animation
import { CalligraphyStrokeAnimation } from '../components/texts/calligraphyStrokeAnimation/CalligraphyStrokeAnimation';
import LetterRotating from '../components/texts/letterRotating/LetterRotating';
import { StrokeSvgAnimation } from '../components/texts/strokeSvgAnimation/StrokeSvgAnimation';
import { TextSvgAnimation } from '../components/texts/TextSvgAnimation/TextSvgAnimation';
import ZoomBySwitch from '../components/texts/ZoomBySwitch/ZoomBySwitch';
import ZoomBySwitch2 from '../components/texts/ZoomBySwitch/ZoomBySwitch2';


//------------------- Gifs -------------------//

//Gifs
import cardTiltEffectGif from '../assets/3D-card-tilt.gif';
import flipCardHoverEffectsGif from '../assets/3dFlipCardgif.gif';
import cardFlippingAnimationGif from '../assets/flippingCard.gif';
import cardSlideUpGif from '../assets/slideUpCard.gif';
import glassmorphismCard from '../assets/GlassmorphismCardHoverEffectsGif.gif'
import extensionCardHover from '../assets/extendCard.gif'
import CalligraphyStroke from '../assets/CalligraphyStrokeGif.gif';
import imageSlide from '../assets/imageZoom.gif';
import letterRotatingGif from '../assets/letterRotating.gif';
import strokeSvgAnimationGif from '../assets/strokeGif.gif';
import textSvgAnimationGif from '../assets/textSvgGif.gif';
import zoomBySwitchButton from '../assets/textSlideByButtonGif.gif';
import zoomBySwitchScroll from '../assets/textSlideByScrollGif.gif';


export const componentsData = [
    {
        "name": "3D Card Tilt Effect",
        "image": cardTiltEffectGif,
        "link": "3d-card-tilt-effect",
        "type": "card",
        "component": CardTiltEffect
    },
    {
        "name": "3D Flip Card Hover Effects",
        "image": flipCardHoverEffectsGif,
        "link": "3d-flip-card-hover-effects",
        "type": "card",
        "component": FlipCard3dEffects
    },
    {
        "name": "Card Flipping Animation",
        "image": cardFlippingAnimationGif,
        "link": "card-flipping-animation",
        "type": "card",
        "component": CardFlippingAnimation
    },
    {
        "name": "Card Slide Up",
        "image": cardSlideUpGif,
        "link": "card-slide-up",
        "type": "card",
        "component": CardSlideUp
    },
    {
        "name": "Extension Card Hover",
        "image": extensionCardHover,
        "link": "extension-card-hover",
        "type": "card",
        "component": ExtensionCardHover
    },
    {
        "name": "Glassmorphism Card Hover Effects",
        "image": glassmorphismCard,
        "link": "glassmorphism-card-hover-effects",
        "type": "card",
        "component": GlassmorphismCardHoverEffects
    },
    {
        "name": "Images Zoom In",
        "image": imageSlide,
        "link": "images-zoom-in",
        "type": "image",
        "component": ImagesZoomIn
    },
    {
        "name": "Calligraphy Stroke Animation",
        "image": CalligraphyStroke,
        "link": "calligraphy-stroke-animation",
        "type": "text",
        "component": CalligraphyStrokeAnimation
    },
    {
        "name": "Letter Rotating",
        "image": letterRotatingGif,
        "link": "letter-rotating",
        "type": "text",
        "component": LetterRotating
    },
    {
        "name": "Stroke Svg Animation",
        "image": strokeSvgAnimationGif,
        "link": "stroke-svg-animation",
        "type": "text",
        "component": StrokeSvgAnimation
    },
    {
        "name": "Text Svg Animation",
        "image": textSvgAnimationGif,
        "link": "text-svg-animation",
        "type": "text",
        "component": TextSvgAnimation
    },
    {
        "name": "Zoom By Switch",
        "image": zoomBySwitchButton,
        "link": "zoom-by-switch",
        "type": "text",
        "component": ZoomBySwitch
    },
    {
        "name": "Zoom By Scroll",
        "image": zoomBySwitchScroll,
        "link": "zoom-by-switch-2",
        "type": "text",
        "component": ZoomBySwitch2
    }

]
