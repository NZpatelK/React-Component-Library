import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import './ButtonsWithToolTipHover.css';


const ButtonsWithToolTipHoverPage = () => {
    return (
        <div className='social-media-tooltip-container'>
            <div className="social-media-tooltip-wrapper">
                <div className="icon facebook">
                    <div className="tooltip">Facebook</div>
                    <span> <FontAwesomeIcon className='social-icon' icon={faFacebookF} /> </span>
                </div>
                <div className="icon x-twitter">
                    <div className="tooltip" style={{padding: '10px 50px'}}>X</div>
                    <span> <FontAwesomeIcon className='social-icon' icon={faXTwitter} /> </span>
                </div>
                <div className="icon instagram">
                    <div className="tooltip">Instagram</div>
                    <span> <FontAwesomeIcon className='social-icon' icon={faInstagram} /> </span>
                </div>
                <div className="icon github">
                    <div className="tooltip">GitHub</div>
                    <span> <FontAwesomeIcon className='social-icon' icon={faGithub} /> </span>
                </div>
                <div className="icon youtube">
                    <div className="tooltip">YouTube</div>
                    <span> <FontAwesomeIcon className='social-icon' icon={faYoutube} /> </span>
                </div>
            </div>
        </div>
    );
};

export default ButtonsWithToolTipHoverPage;
