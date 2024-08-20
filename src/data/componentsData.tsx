//------------------- Components -------------------//

//Cards
import CardTiltEffect from '../components/cards/3d-card-tilt-effect/CardTiltEffect';
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


//------------------- Homepage Display -------------------//

//Gifs
import cardTiltEffectGif from '../assets/mainImages/3D-card-tilt.gif';
import flipCardHoverEffectsGif from '../assets/mainImages/3dFlipCardgif.gif';
import cardFlippingAnimationGif from '../assets/mainImages/flippingCard.gif';
import cardSlideUpGif from '../assets/mainImages/slideUpCard.gif';
import glassmorphismCard from '../assets/mainImages/GlassmorphismCardHoverEffectsGif.gif'
import extensionCardHover from '../assets/mainImages/extendCard.gif'
import CalligraphyStroke from '../assets/mainImages/CalligraphyStrokeGif.gif';
import imageSlide from '../assets/mainImages/imageZoom.gif';
import letterRotatingGif from '../assets/mainImages/letterRotating.gif';
import strokeSvgAnimationGif from '../assets/mainImages/strokeGif.gif';
import textSvgAnimationGif from '../assets/mainImages/textSvgGif.gif';
import zoomBySwitchButton from '../assets/mainImages/textSlideByButtonGif.gif';
import zoomBySwitchScroll from '../assets/mainImages/textSlideByScrollGif.gif';

//Images 
import cardtilteffectImg from '../assets/mainImages/3D-card-tilt.jpeg'
import flipCardHoverEffectsImg from '../assets/mainImages/3dFlipCardgif.jpeg'
import cardFlippingAnimationImg from '../assets/mainImages/flippingCard.jpeg'
import cardSlideUpImg from '../assets/mainImages/slideUpCard.jpeg'
import extensionCardHoverImg from '../assets/mainImages/extendCard.jpeg'
import CalligraphyStrokeImg from '../assets/mainImages/CalligraphyStrokeGif.jpeg'
import imageSlideImg from '../assets/mainImages/imageZoom.jpeg'
import letterRotatingImg from '../assets/mainImages/letterRotating.jpeg'
import strokeSvgAnimationImg from '../assets/mainImages/strokeGif.jpeg'
import textSvgAnimationImg from '../assets/mainImages/textSvgGif.jpeg'
import zoomBySwitchButtonImg from '../assets/mainImages/textSlideByButtonGif.jpeg'
import zoomBySwitchScrollImg from '../assets/mainImages/textSlideByScrollGif.jpeg'


export const componentsData = [
    {
        "name": "3D Card Tilt Effect",
        "gif": cardTiltEffectGif,
        "img": cardtilteffectImg,
        "link": "3d-card-tilt-effect",
        "type": "card",
        "component": CardTiltEffect
    },
    {
        "name": "3D Flip Card Hover Effects",
        "gif": flipCardHoverEffectsGif,
        "img": flipCardHoverEffectsImg,
        "link": "3d-flip-card-hover-effects",
        "type": "card",
        "component": FlipCard3dEffects
    },
    {
        "name": "Card Flipping Animation",
        "gif": cardFlippingAnimationGif,
        "img": cardFlippingAnimationImg,
        "link": "card-flipping-animation",
        "type": "card",
        "component": CardFlippingAnimation
    },
    {
        "name": "Card Slide Up",
        "gif": cardSlideUpGif,
        "img": cardSlideUpImg,
        "link": "card-slide-up",
        "type": "card",
        "component": CardSlideUp
    },
    {
        "name": "Extension Card Hover",
        "gif": extensionCardHover,
        "img": extensionCardHoverImg,
        "link": "extension-card-hover",
        "type": "card",
        "component": ExtensionCardHover
    },
    {
        "name": "Glassmorphism Card Hover Effects",
        "gif": glassmorphismCard,
        "img": glassmorphismCard,
        "link": "glassmorphism-card-hover-effects",
        "type": "card",
        "component": GlassmorphismCardHoverEffects
    },
    {
        "name": "Images Zoom In",
        "gif": imageSlide,
        "img": imageSlideImg,
        "link": "images-zoom-in",
        "type": "image",
        "component": ImagesZoomIn
    },
    {
        "name": "Calligraphy Stroke Animation",
        "gif": CalligraphyStroke,
        "img": CalligraphyStrokeImg,
        "link": "calligraphy-stroke-animation",
        "type": "text",
        "component": CalligraphyStrokeAnimation
    },
    {
        "name": "Letter Rotating",
        "gif": letterRotatingGif,
        "img": letterRotatingImg,
        "link": "letter-rotating",
        "type": "text",
        "component": LetterRotating
    },
    {
        "name": "Stroke Svg Animation",
        "gif": strokeSvgAnimationGif,
        "img": strokeSvgAnimationImg,
        "link": "stroke-svg-animation",
        "type": "text",
        "component": StrokeSvgAnimation
    },
    {
        "name": "Text Svg Animation",
        "gif": textSvgAnimationGif,
        "img": textSvgAnimationImg,
        "link": "text-svg-animation",
        "type": "text",
        "component": TextSvgAnimation
    },
    {
        "name": "Zoom By Switch",
        "gif": zoomBySwitchButton,
        "img": zoomBySwitchButtonImg,
        "link": "zoom-by-switch",
        "type": "text",
        "component": ZoomBySwitch
    },
    {
        "name": "Zoom By Scroll",
        "gif": zoomBySwitchScroll,
        "img": zoomBySwitchScrollImg,
        "link": "zoom-by-switch-2",
        "type": "text",
        "component": ZoomBySwitch2
    }

]
