import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import './ButtonsWithToolTipHover.css';


const ButtonsWithToolTipHoverPage = () => {
    const socialMediaList = [
        { name: 'facebook', icon: faFacebookF, tooltip: 'Facebook' },
        { name: 'x-twitter', icon: faXTwitter, tooltip: 'X' },
        { name: 'instagram', icon: faInstagram, tooltip: 'Instagram' },
        { name: 'github', icon: faGithub, tooltip: 'GitHub' },
        { name: 'youtube', icon: faYoutube, tooltip: 'YouTube' },
    ];
    return (
        <div className='social-media-tooltip-container'>
            <div className="social-media-tooltip-wrapper">
                {socialMediaList.map((socialMedia) => (
                    <div key={socialMedia.name} className={`icon ${socialMedia.name}`}>
                        <div className="tooltip">{socialMedia.tooltip}</div>
                        <span> <FontAwesomeIcon className='social-icon' icon={socialMedia.icon} /> </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ButtonsWithToolTipHoverPage;
