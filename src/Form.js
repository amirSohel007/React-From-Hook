import React, { useState, Fragment } from 'react'
import { useForm } from "react-hook-form";

export const FromArea = () => {
    const [userDetails, setUserDetails] = useState()

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => setUserDetails(data);
    return (
        <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="first_name" placeholder="first name" ref={register({required: true})}/>
            {errors.first_name && <p className="text-danger">First name is required</p>}

            <input name="last_name" placeholder="last name" ref={register({required: true})} />
            {errors.last_name && <p className="text-danger">Last name is required</p>}

            <input name="email" placeholder="email name" ref={register({required: true, pattern: /^([\-\_\.0-9a-zA-Z]+)@([\-\_\.0-9a-zA-Z]+)\.([a-z]){2,7}$/ })} />
            {errors.email?.type === "required" && <p className="text-danger">Email is required</p>}
            {errors.email?.type === "pattern" && <p className="text-danger">Enter a valid email</p>}
            <button type="submit">Submit Form</button>
        </form>
        {userDetails&& 
        <div className="user_details">
            <h2>Hello {userDetails?.first_name} {userDetails?.last_name} Welcome !</h2>
            <p>{userDetails?.email}</p>
        </div>
         }
        </Fragment>
    )
}
