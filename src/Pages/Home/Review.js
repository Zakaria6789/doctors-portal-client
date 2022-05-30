import React from 'react';

const Review = ({ review }) => {
    const { img, name, description, location } = review;
    return (
        <div className='shadow-2xl p-8 rounded-xl'>
            <div className='mb-8'>
                {description}
            </div>
            <div className='flex items-center'>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                        <img src={img} alt="review" />
                    </div>
                </div>
                <div>
                    <h4>{name}</h4>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;