import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../hooks/useToken';
import Loading from '../Shared/Loading/Loading';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser);

    // react hook form
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data);
        signInWithEmailAndPassword(data?.email, data?.password);
    }

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, navigate, token]);

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-400 mb-3'><small>{error?.message || gError?.message}</small></p>
    }


    return (
        <div className='px-4 md:px-10 flex justify-center mt-5 md:mt-32'>
            <div className="card w-full md:w-[385px] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto">Login</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>

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
                        <input className='btn w-full' type="submit" value='Login' />
                    </form>
                    <div>
                        <small>New to Doctors Portal? <Link className='text-secondary' to="/signup">Create new account</Link></small>
                    </div>


                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </div>
    );
};

export default Login;