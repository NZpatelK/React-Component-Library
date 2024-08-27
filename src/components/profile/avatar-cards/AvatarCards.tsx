import profile1 from '../../../assets/profileImg/profile2.jpg';
import profile2 from '../../../assets/profileImg/profile3.jpg';
import profile3 from '../../../assets/profileImg/profile 4.jpg';
import profile4 from '../../../assets/profileImg/profile5.jpeg';

import './AvatarCards.css';

export default function AvatarCards() {
    const profiles = [
        { img: profile1 },
        { img: profile2 },
        { img: profile3 },
        { img: profile4 },
        { img: profile1 },
    ];

    return (
        <div className='avatar-container'>
            {renderAvatarGroup(profiles, false)}
            {renderAvatarGroup(profiles, true)}
        </div>
    );
}

function renderAvatarGroup(profiles: { img: string }[], isPopup: boolean) {
    return (
        <div className="avatar-group">
            <div className="avatar-hidden">
                +10
            </div>
            {profiles.map((profile, index) => (
                <div key={index} className={`avatar ${isPopup ? 'popup' : ''}`}>
                    <img src={profile.img} alt="" />
                </div>
            ))}
        </div>
    );
}
