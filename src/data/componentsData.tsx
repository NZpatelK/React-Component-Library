//------------------- Components -------------------//

//Cards
import CardTiltEffect from '../components/cards/3d-card-tilt-effect/cardTiltEffect';
import FlipCard3dEffects from '../components/cards/3d-flip-card-hover-effects/FlipCardHover3dEffects';
import CardFlippingAnimation from '../components/cards/card-flipping-animation/CardFlippingAnimation';
import CardSlideUp from '../components/cards/card-slide-up/CardSlideUp';
import ExtensionCardHover from '../components/cards/extension-card-hover/ExtensionCardHover';
import GlassmorphismCardHoverEffects from '../components/cards/glassmorphism-card-hover-effects/GlassmorphismCardHoverEffects';
import SubCardPopUp from '../components/cards/subCard-popup/SubCardPopUp';
import LoadingCard from '../components/cards/loading-card/LoadingCard';
import LoadingBorderCard from '../components/cards/loading-border-card/LoadingBorderCard';

//Images Animation
import ImagesZoomIn from '../components/images-animation/images-zoom-in/ImagesZoomIn';

//Text Animation
import { CalligraphyStrokeAnimation } from '../components/texts/calligraphyStrokeAnimation/CalligraphyStrokeAnimation';
import LetterRotating from '../components/texts/letterRotating/LetterRotating';
import { StrokeSvgAnimation } from '../components/texts/strokeSvgAnimation/StrokeSvgAnimation';
import { TextSvgAnimation } from '../components/texts/TextSvgAnimation/TextSvgAnimation';
import ZoomBySwitch from '../components/texts/ZoomBySwitch/ZoomBySwitch';
import ZoomBySwitch2 from '../components/texts/ZoomBySwitch/ZoomBySwitch2';

//Profile
import AvatarCards from '../components/profile/avatar-cards/AvatarCards';
import AvatarCardsTooltip from '../components/profile/avatar-cards-tooltip/AvatarCardsTooltip';

//Social Media
import ButtonsWithToolTipHover from '../components/social-media/buttons-with-tooltip-on-hover/ButtonsWithToolTipHover';


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
import subCardPopup from '../assets/mainImages/subCardPopup.gif';
import avatarCards from '../assets/mainImages/avatarCard.gif';
import socialMediaTooltip from '../assets/mainImages/socialMediaTooltip.gif'
import avatarCardsTooltip from '../assets/mainImages/avatarCardTooltip.gif'
import loadingCard from '../assets/mainImages/loadingCard.gif'
import loadingBorderCard from '../assets/mainImages/borderCardLoading.gif'

//Images 
import cardtilteffectImg from '../assets/mainImages/3D-card-tilt.jpg'
import flipCardHoverEffectsImg from '../assets/mainImages/3dFlipCardgif.jpg'
import cardFlippingAnimationImg from '../assets/mainImages/flippingCard.jpg'
import cardSlideUpImg from '../assets/mainImages/slideUpCard.jpg'
import extensionCardHoverImg from '../assets/mainImages/extendCard.jpg'
import CalligraphyStrokeImg from '../assets/mainImages/CalligraphyStrokeGif.jpg'
import imageSlideImg from '../assets/mainImages/imageZoom.jpg'
import letterRotatingImg from '../assets/mainImages/letterRotating.jpg'
import strokeSvgAnimationImg from '../assets/mainImages/strokeGif.jpg'
import textSvgAnimationImg from '../assets/mainImages/textSvgGif.jpg'
import zoomBySwitchButtonImg from '../assets/mainImages/textSlideByButtonGif.jpg'
import zoomBySwitchScrollImg from '../assets/mainImages/textSlideByScrollGif.jpg'
import subCardPopupImg from '../assets/mainImages/subCardPopup.jpg'
import avatarCardsImg from '../assets/mainImages/avatarCard.jpg'
import socialMediaTooltipImg from '../assets/mainImages/socialMediaTooltip.jpg'
import avatarCardsTooltipImg from '../assets/mainImages/avatarCardTooltip.jpg'
import loadingCardImg from '../assets/mainImages/loadingCard.jpg'
import loadingBorderCardImg from '../assets/mainImages/borderCardLoading.jpg'


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
    },
    {
        "name": "Sub Card Pop Up",
        "gif": subCardPopup,
        "img": subCardPopupImg,
        "link": "sub-card-popup",
        "type": "card",
        "component": SubCardPopUp
    },
    {
        "name": "Avatar Cards",
        "gif": avatarCards,
        "img": avatarCardsImg,
        "link": "avatar-cards",
        "type": "profile",
        "component": AvatarCards
    },
    {
        "name": "Social Media Buttons With ToolTip Hover",
        "gif": socialMediaTooltip,
        "img": socialMediaTooltipImg,
        "link": "buttons-with-tooltip-on-hover",
        "type": "social-media",
        "component": ButtonsWithToolTipHover
    },
    {
        "name": "Avatar Cards Tooltip",
        "gif": avatarCardsTooltip,
        "img": avatarCardsTooltipImg,
        "link": "avatar-cards-tooltip",
        "type": "profile",
        "component": AvatarCardsTooltip
    },
    {
        "name": "Loading Card",
        "gif": loadingCard,
        "img": loadingCardImg,
        "link": "loading-card",
        "type": "card",
        "component": LoadingCard
    },
    {
        "name": "Loading Border Card",
        "gif": loadingBorderCard,
        "img": loadingBorderCardImg,
        "link": "loading-border-card",
        "type": "card",
        "component": LoadingBorderCard
    },

]
