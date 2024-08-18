
import React,  {useState } from 'react';
import './ExtensionCardHover.css';
import { useResponsiveTSX } from '../../../useResponsiveTSX';

const ExtensionCardHover: React.FC = () => {
    // const [isMobile, setIsMobile] = useState(window.innerWidth <= 1025);
    const isMobile = useResponsiveTSX([600, 900, 1200]) <= 1;

    const [selectedId, setSelectedId] = useState(1);
    const data = [{
        "id": 1,
        "title": "world",
        "description": "Quisque at erat in urna consequat ultricies. Sed et erat vitae ligula sodales vulputate. Integer et sapien vehicula, ornare elit id, vulputate lectus. Duis nec est vel erat congue sodales. Pellentesque non nisi vitae dolor elementum facilisis. Fusce interdum turpis ut lectus aliquam, non volutpat nisl fermentum. Morbi ut justo ut est convallis suscipit. Nulla facilisi. Aliquam erat volutpat. Ut laoreet ullamcorper ligula, vel molestie erat lacinia ut. Sed in orci nec purus sollicitudin luctus. Suspendisse potenti. Etiam varius purus at vehicula ullamcorper. Mauris consectetur, nisl et elementum malesuada, libero odio scelerisque risus, non sodales ligula orci nec nisi.",
    },
    {
        "id": 2,
        "title": "greetings",
        "description": "Aliquam erat volutpat. Phasellus imperdiet odio id arcu commodo, ut aliquam magna efficitur. Ut posuere augue nec augue vulputate, eget accumsan leo luctus. Pellentesque vulputate velit id nisi blandit, ut malesuada lorem lobortis. Sed venenatis velit quis ligula vehicula, a lacinia augue eleifend. Duis vestibulum augue vitae vehicula congue. Nulla facilisi. Praesent ac risus id arcu fermentum pharetra. Etiam consequat nulla sit amet magna ultricies, ut malesuada justo dignissim. Vivamus non justo vel mi aliquam faucibus. Nam tempor libero et neque vestibulum, non egestas turpis pretium. Nullam vehicula magna ac ipsum vestibulum gravida. Sed a augue a nisi convallis gravida.",
    },
    {
        "id": 3,
        "title": "update",
        "description": "Sed auctor sapien ut lacus pellentesque, nec tempor augue tincidunt. Mauris eu arcu id turpis gravida suscipit. Suspendisse congue est et velit gravida, at dapibus magna pharetra. Integer ac erat at risus sollicitudin tincidunt. Donec ac felis ultricies, tincidunt libero eget, consectetur nisl. Nullam id orci ultricies, ullamcorper nisi vel, molestie tortor. Ut pharetra, justo non condimentum interdum, justo turpis interdum quam, at suscipit ante nisi sed purus. Nam sit amet orci eget odio ullamcorper tempor. Phasellus vehicula ligula ut velit fringilla sagittis. Nullam eget libero nec risus sagittis sollicitudin. Integer tristique tellus ut neque vulputate bibendum.",
    },
    {
        "id": 4,
        "title": "news",
        "description": "Maecenas convallis, enim vel ultricies tempus, risus justo ultricies elit, a lacinia turpis libero vel odio. Suspendisse tempor enim ac mauris interdum faucibus. In a magna magna. Ut non justo non enim auctor fringilla non ut libero. Donec euismod orci ut malesuada efficitur. Etiam at enim vel eros vulputate sollicitudin sit amet non purus. Donec sodales felis et scelerisque ullamcorper. Nullam sollicitudin neque sed dui varius, sit amet commodo odio lacinia. Nulla facilisi. Integer eget metus et nulla euismod fermentum nec sed arcu. Sed vulputate nibh id felis varius, non viverra libero suscipit. Vivamus accumsan justo ut ipsum commodo varius.",
    },
    {
        "id": 5,
        "title": "announcement",
        "description": "Sed facilisis lorem vitae augue aliquam feugiat. Nullam sit amet augue eget libero accumsan gravida at ac justo. In ut justo vel felis ullamcorper vehicula. Cras ut ex et libero malesuada consectetur. Integer euismod felis ac est fringilla, ac cursus elit fermentum. Donec eleifend augue a neque elementum varius. Suspendisse scelerisque risus eu urna convallis, eget convallis justo dignissim. Nullam mollis orci nec purus condimentum, id tristique odio convallis. Praesent consequat felis in justo fringilla, at ultricies nisl volutpat. Integer suscipit ex sed metus suscipit facilisis. Vivamus auctor dolor eget lectus molestie, vel feugiat urna venenatis. Aenean dapibus nisi vel orci tristique vehicula.",
    },
    {
        "id": 6,
        "title": "event",
        "description": "Praesent auctor justo vitae sem fermentum, et tempor libero interdum. Cras non metus nec neque vehicula dictum. Etiam faucibus enim ut elit pharetra, sed lacinia magna eleifend. Donec scelerisque elit ac leo lobortis tincidunt. Aliquam ac orci sit amet est ullamcorper eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas vehicula metus id est ultricies, et venenatis risus cursus. Donec dapibus orci non nunc varius, sed pharetra leo malesuada. Integer a velit ut erat condimentum volutpat nec ut nisi. Nullam vitae nisl at ipsum aliquet sagittis. Pellentesque varius velit a magna scelerisque luctus.",
    },]

    return (
        <>
            {/* Desktop version */}
            <div className='extension-page' style={isMobile ? { display: "none" } : undefined}>
                <div className="extension-wrapper">
                    <div className="extension-container">
                        {data.map((item) => (
                            <div className='extension-box'>
                                <h1 className='header'>{item.title}</h1>
                                <div className="extension-content">
                                    <h1 className="title">{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile version */}
            <div className='accordion-page'>
                <ul className="accordion" style={!isMobile ? { display: "none" } : undefined}>
                    {data.map((item) => (
                        <li>
                            <input
                                type="radio"
                                name="accorrdion"
                                id={`item${item.id}`}
                                checked={selectedId === item.id}
                                onChange={() => setSelectedId(item.id)}
                            />
                            <label htmlFor={`item${item.id}`}>{item.title}</label>
                            <div className="content">
                                <p>{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
};

export default ExtensionCardHover;
