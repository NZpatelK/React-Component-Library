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
import Toast from '../components/notifications/toast/Toast';

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

//Images 
import cardtilteffectImg from '../assets/mainImages/3D-card-tilt.jpg'
import flipCardHoverEffectsImg from '../assets/mainImages/3dFlipCardgif.jpg'
import cardFlippingAnimationImg from '../assets/mainImages/flippingCard.jpg'
import cardSlideUpImg from '../assets/mainImages/slideUpCard.jpg'
import extensionCardHoverImg from '../assets/mainImages/extendCard.jpg'
import CalligraphyStrokeImg from '../assets/mainImages/CalligraphyStrokeGif.jpg'
import glassmorphismCardImg from '../assets/mainImages/GlassmorphismCardHoverEffectsGif.jpg'
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
        "img": cardtilteffectImg,
        "link": "3d-card-tilt-effect",
        "type": "card",
        "component": CardTiltEffect
    },
    {
        "name": "3D Flip Card Hover Effects",
        "img": flipCardHoverEffectsImg,
        "link": "3d-flip-card-hover-effects",
        "type": "card",
        "component": FlipCard3dEffects
    },
    {
        "name": "Card Flipping Animation",
        "img": cardFlippingAnimationImg,
        "link": "card-flipping-animation",
        "type": "card",
        "component": CardFlippingAnimation
    },
    {
        "name": "Card Slide Up",
        "img": cardSlideUpImg,
        "link": "card-slide-up",
        "type": "card",
        "component": CardSlideUp
    },
    {
        "name": "Extension Card Hover",
        "img": extensionCardHoverImg,
        "link": "extension-card-hover",
        "type": "card",
        "component": ExtensionCardHover
    },
    {
        "name": "Glassmorphism Card Hover Effects",
        "img": glassmorphismCardImg,
        "link": "glassmorphism-card-hover-effects",
        "type": "card",
        "component": GlassmorphismCardHoverEffects
    },
    {
        "name": "Images Zoom In",
        "img": imageSlideImg,
        "link": "images-zoom-in",
        "type": "image",
        "component": ImagesZoomIn
    },
    {
        "name": "Calligraphy Stroke Animation",
        "img": CalligraphyStrokeImg,
        "link": "calligraphy-stroke-animation",
        "type": "text",
        "component": CalligraphyStrokeAnimation
    },
    {
        "name": "Letter Rotating",
        "img": letterRotatingImg,
        "link": "letter-rotating",
        "type": "text",
        "component": LetterRotating
    },
    {
        "name": "Stroke Svg Animation",
        "img": strokeSvgAnimationImg,
        "link": "stroke-svg-animation",
        "type": "text",
        "component": StrokeSvgAnimation
    },
    {
        "name": "Text Svg Animation",
        "img": textSvgAnimationImg,
        "link": "text-svg-animation",
        "type": "text",
        "component": TextSvgAnimation
    },
    {
        "name": "Zoom By Switch",
        "img": zoomBySwitchButtonImg,
        "link": "zoom-by-switch",
        "type": "text",
        "component": ZoomBySwitch
    },
    {
        "name": "Zoom By Scroll",
        "img": zoomBySwitchScrollImg,
        "link": "zoom-by-switch-2",
        "type": "text",
        "component": ZoomBySwitch2
    },
    {
        "name": "Sub Card Pop Up",
        "img": subCardPopupImg,
        "link": "sub-card-popup",
        "type": "card",
        "component": SubCardPopUp
    },
    {
        "name": "Avatar Cards",
        "img": avatarCardsImg,
        "link": "avatar-cards",
        "type": "profile",
        "component": AvatarCards
    },
    {
        "name": "Social Media Buttons With ToolTip Hover",
        "img": socialMediaTooltipImg,
        "link": "buttons-with-tooltip-on-hover",
        "type": "social-media",
        "component": ButtonsWithToolTipHover
    },
    {
        "name": "Avatar Cards Tooltip",
        "img": avatarCardsTooltipImg,
        "link": "avatar-cards-tooltip",
        "type": "profile",
        "component": AvatarCardsTooltip
    },
    {
        "name": "Loading Card",
        "img": loadingCardImg,
        "link": "loading-card",
        "type": "card",
        "component": LoadingCard
    },
    {
        "name": "Loading Border Card",
        "img": loadingBorderCardImg,
        "link": "loading-border-card",
        "type": "card",
        "component": LoadingBorderCard
    },
    {
        "name": "Toast Notification",
        // "img": toastImg,
        "link": "toast-notification",
        "type": "notification",
        "component": Toast
    }

]
