import React from 'react';

const InfoCard = ({ img, title, descrip, bgColor }) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgColor} text-white md:px-4 py-4 md:py-0`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{descrip}</p>
            </div>
        </div>
    );
};

export default InfoCard;