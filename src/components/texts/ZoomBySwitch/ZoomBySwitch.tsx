import React, { useState } from 'react';
import { ZoomData } from './Data/ZoomData';
// import backButton from '../../assets/turn-back.png';
import './ZoomBySwitch.css';
// import { useNavigate } from 'react-router-dom';

const ZoomBySwitch: React.FC = () => {
    const [content, setContent] = useState(ZoomData);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [index, setIndex] = useState(content.filter((data) => data.TransitionStatus === "textEnter")[0].id);
    // const navigate = useNavigate();

    // This function is used to handle the switch button click event.
    // The direction parameter is used to determine the direction of the switch.
    // The direction parameter can be either 'left' or 'right'.
    const handleSwitch = (direction: string) => {
        if (direction === 'left') {
            setIndex(index - 1);

            const updatedContent = content.map((data) => {
                if (data.id === index) {
                    data.TransitionStatus = 'leftTextExit';
                }

                if (data.id === index - 1) {
                    data.TransitionStatus = 'textEnter';
                }
                return data;
            });
            setContent(updatedContent);

        } else {
            setIndex(index + 1);
            const updatedContent = content.map((data) => {
                if (data.id === index) {
                    data.TransitionStatus = 'rightTextExit';
                }

                if (data.id === index + 1) {
                    data.TransitionStatus = 'textEnter';
                }
                return data;
            });
            setContent(updatedContent);
        }

        setIsButtonDisabled(true);
    };


    // 194116420442
    // ---------------------------------------------------------------------------------------------------//

    return (
        <div className='switchContainer'>
            {/* <div onClick={() => navigate(-1)}><img className='backBtn' src={backButton} alt="" /></div> */}
            {content.map((data, index) => {
                return (<h1 key={index} className={'centered ' + data.TransitionStatus} onTransitionEnd={() => setIsButtonDisabled(false)}> {data.label} </h1>);
            })}

            <div className="switchButton">
                <div className="leftButton" onClick={() => !isButtonDisabled ? handleSwitch('left') : null}>Left</div>
                <div className="rightButton" onClick={() => !isButtonDisabled ? handleSwitch('right') : null}>Right</div>
            </div>
        </div>
    );
};

export default ZoomBySwitch;