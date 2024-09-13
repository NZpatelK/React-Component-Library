import profile1 from '../../../assets/profileImg/profile2.jpg';
import profile2 from '../../../assets/profileImg/profile3.jpg';
import profile3 from '../../../assets/profileImg/profile 4.jpg';
import profile4 from '../../../assets/profileImg/profile5.jpeg';

import './AvatarCardsTooltip.css';

export default function AvatarCards() {
    const profiles = [
        { name: 'James Bond', img: profile1 },
        { name: 'Nisha Bond', img: profile2 },
        { name: 'Bhumi Bond', img: profile3 },
        { name: 'Jack Bond', img: profile4 },
        { name: 'Tim Bond', img: profile1 }
    ];

    return (
        <div className='avatar-container'>
            <div className="avatar-group">
                <div className="avatar-hidden">
                    +10
                </div>
                {profiles.map(({ name, img }) => (
                    <div key={name} className="avatar-card">
                        <div className='avatar-tooltip'>{name}</div>
                        <div className="avatar-popup">
                            <img src={img} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
