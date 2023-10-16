import { useState } from 'react';
import dollCloth1 from '../../../assets/images/dollCloth/dollCloth1.png'
import dollCloth2 from '../../../assets/images/dollCloth/dollCloth2.png'
import dollCloth3 from '../../../assets/images/dollCloth/dollCloth3.png'
import dollCloth4 from '../../../assets/images/dollCloth/dollCloth4.png'

import './DollCloth.css'

const DollCloth = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div>
            <h2 className="text-4xl font-bold pt-8 text-center text-gray-600">Cloth and accessories for your dolls</h2>

            <div className="lg:grid lg:grid-cols-4 gap-2 rounded-lg">
                <img
                    className={`m-5 w-60 h-60 border-4 border-pink-300 rounded-lg running-animation ${isHovered ? 'paused' : ''}`}
                    src={dollCloth1}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <img
                    className={`m-5 w-60 h-60 border-4 border-pink-300 rounded-lg running-animation ${isHovered ? 'paused' : ''}`}
                    src={dollCloth2}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <img
                    className={`m-5 w-60 h-60 border-4 border-pink-300 rounded-lg running-animation ${isHovered ? 'paused' : ''}`}
                    src={dollCloth3}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <img
                    className={`m-5 w-60 h-60 border-4 border-pink-300 rounded-lg running-animation ${isHovered ? 'paused' : ''}`}
                    src={dollCloth4}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </div>
        </div>
    );
};

export default DollCloth;