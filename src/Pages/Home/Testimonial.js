import React from 'react';
import quite from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';


const Testimonial = () => {
    const reviews = [
        {
            _id: "1",
            img: people1,
            name: "Winson Herry",
            location: "California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: "2",
            img: people2,
            name: "Winson Herry",
            location: "California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: "3",
            img: people3,
            name: "Winson Herry",
            location: "California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        }
    ]
    return (
        <div className='px-4 md:px-12  mb-20'>
            <div className='flex justify-between items-center py-12'>
                <div>
                    <h3 className='text-secondary font-semibold text-md  md:text-lg mb-1 md:mb-2'>Testimonial</h3>
                    <h2 className='font-semibold text-2xl md:text-3xl mt-1 md:mt-2'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-20 md:w-44' src={quite} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;