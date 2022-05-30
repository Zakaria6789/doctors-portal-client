import React from 'react';

const Service = ({ service }) => {
    const { img, name, description } = service;
    return (
        <div className="card mx-4 md:mx-0 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-[113px] h-[115px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;