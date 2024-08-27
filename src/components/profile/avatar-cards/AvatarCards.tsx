import profile1 from '../../../assets/profileImg/profile2.jpg';
import profile2 from '../../../assets/profileImg/profile3.jpg';
import profile3 from '../../../assets/profileImg/profile 4.jpg';
import profile4 from '../../../assets/profileImg/profile5.jpeg';

import './AvatarCards.css';




export default function AvatarCards() {
    return (
        <div className='avatar-container'>
            <div className="avatar-group">
                <div className="avatar-hidden">
                    +10
                </div>
                <div className="avatar"><img src={profile1} alt="" /></div>
                <div className="avatar"><img src={profile2} alt="" /></div>
                <div className="avatar"><img src={profile3} alt="" /></div>
                <div className="avatar"><img src={profile4} alt="" /></div>
                <div className="avatar"><img src={profile1} alt="" /></div>
            </div>
            <div className="avatar-group">
                <div className="avatar-hidden">
                    +10
                </div>
                <div className="avatar popup"><img src={profile1} alt="" /></div>
                <div className="avatar popup"><img src={profile2} alt="" /></div>
                <div className="avatar popup"><img src={profile3} alt="" /></div>
                <div className="avatar popup"><img src={profile4} alt="" /></div>
                <div className="avatar popup"><img src={profile1} alt="" /></div>
            </div>
        </div>
    );
}
