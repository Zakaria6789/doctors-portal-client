import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../hooks/useToken';
import Loading from '../Shared/Loading/Loading';

const SignUp = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const [token] = useToken(user || gUser);

    // react hook form
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        // console.log(data);
        await createUserWithEmailAndPassword(data?.email, data?.password);
        await updateProfile({ displayName: data?.name });
    }


    useEffect(() => {
        if (token) {
            navigate('/appointment');
        }
    }, [navigate, token]);


    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }



    let signInError;
    if (error || gError || updateError) {
        signInError = <p className='text-red-400 mb-3'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }




    return (
        <div className='px-4 md:px-10 flex justify-center mt-5 md:mt-20'>
            <div className="card w-full md:w-[385px] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto">Sign Up</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
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
                                placeholder="Your Email"
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
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered focus:outline-none w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 charecters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className='text-red-400'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-400'>{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full' type="submit" value='Sign Up' />
                    </form>
                    <div>
                        <small>Already have an account? <Link className='text-secondary' to="/login">Please Login</Link></small>
                    </div>


                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </div>
    );
};

export default SignUp;