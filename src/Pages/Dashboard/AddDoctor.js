import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {
    const { data: services, isLoading } = useQuery('services', () => fetch('https://stormy-coast-73546.herokuapp.com/services').then(res => res.json()));

    const imgStorageKey = '44c00107c3165ea55694ef31825644d3';

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        const image = data?.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    const imgUrl = result?.data?.url;
                    const doctorInfo = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: imgUrl,
                    }

                    // send to my database :
                    fetch('https://stormy-coast-73546.herokuapp.com/doctors', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctorInfo)
                    })
                        .then(res => res.json())
                        .then(doctorResult => {
                            if (doctorResult.insertedId) {
                                toast.success('Doctor added successfully !!');
                                reset();
                            }
                            else {
                                toast.error('Failed to add the doctor !!')
                            }
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='px-4 md:px-10 flex justify-center mt-5 md:mt-20'>
            <div className="card w-full md:w-[385px] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto">Add a New Doctor</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Doctor's Name"
                                className="input input-bordered focus:outline-none w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className='text-red-400'>{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Doctor's Email"
                                className="input input-bordered focus:outline-none w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                                        ,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className='text-red-400'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-400'>{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Specialty</span>
                            </label>
                            <select
                                className="select select-bordered w-full max-w-xs focus:outline-none mb-4"
                                {...register("specialty")}>
                                {
                                    services?.map(service => <option
                                        key={service._id}
                                        value={service.name}
                                    >{service.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <div className='py-[4px] border rounded-lg border-[rgba(51,51,51,0.2)]'>
                                <input
                                    type="file"
                                    className="input focus:outline-none h-auto w-full max-w-xs"
                                    {...register("photo", {
                                        required: {
                                            value: true,
                                            message: 'Photo is required'
                                        }
                                    })}
                                />
                            </div>
                            <label className="label">
                                {errors.photo?.type === 'required' && <span className='text-red-400'>{errors.photo.message}</span>}
                            </label>
                        </div>
                        <input className='btn w-full' type="submit" value='Add Now' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;