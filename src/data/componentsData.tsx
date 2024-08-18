//Components
import CardTiltEffect from '../components/cards/3d-card-tilt-effect/CardTiltEffect';
import FlipCard3dEffects from '../components/cards/3d-flip-card-hover-effects/FlipCardHover3dEffects';
import CardFlippingAnimation from '../components/cards/card-flipping-animation/CardFlippingAnimation';
import CardSlideUp from '../components/cards/card-slide-up/CardSlideUp';
import ExtensionCardHover from '../components/cards/extension-card-hover/ExtensionCardHover';
import GlassmorphismCardHoverEffects from '../components/cards/glassmorphism-card-hover-effects/GlassmorphismCardHoverEffects';

//Images
import cardTiltEffectGif from '../assets/3D-card-tilt.gif';
import flipCardHoverEffectsGif from '../assets/3dFlipCardgif.gif';
import cardFlippingAnimationGif from '../assets/flippingCard.gif';
import cardSlideUpGif from '../assets/slideUpCard.gif';
import glassmorphismCard from '../assets/GlassmorphismCardHoverEffectsGif.gif'
import extensionCardHover from '../assets/extendCard.gif'

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
    }

]
