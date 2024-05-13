// import { useQuery } from 'react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import Loading from '../../Pages/Shared/Loading';

const AddBerbar = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handleAddBerbar = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                // console.log(imgData.data.url);
                const berbar = {
                    name: data.name, 
                    email: data.email,
                    phone: data?.phone,
                    profession: data?.profession,
                    education: data?.education,
                    work: data?.work,
                    image: imgData.data.url
                }

                // save berbar information to the database
                fetch('http://localhost:5000/berbars', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(berbar)
                })
                .then(res => res.json())
                .then(result =>{
                    // console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/')
                })
            }
        })
    }

    // if(isLoading){
    //     return <Loading></Loading>
    // }

    return (
        <div className='doctormid w-96 p-7'>
            <h2 className="text-4xl">Add A Barber</h2>
            <form onSubmit={handleSubmit(handleAddBerbar)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input text-red-500 input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input text-red-500 input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Phone Number</span></label>
                    <input type="text" {...register("phone", {
                        required: "Phone number is Required"
                    })} className="input text-red-500 input-bordered w-full max-w-xs" />
                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Profession</span></label>
                    <input type="text" {...register("profession", {
                        required: "Profession is Required"
                    })} className="input text-red-500 input-bordered w-full max-w-xs" />
                    {errors.profession && <p className='text-red-500'>{errors.profession.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Educational Details</span></label>
                    <input type="text" {...register("education", {
                        required: "Educational Details are Required"
                    })} className="input text-red-500 input-bordered w-full max-w-xs" />
                    {errors.education && <p className='text-red-500'>{errors.education.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Work Experience</span></label>
                    <input type="text" {...register("work", {
                        required: "Work experience is Required"
                    })} className="input text-red-500 input-bordered w-full max-w-xs" />
                    {errors.work && <p className='text-red-500'>{errors.work.message}</p>}
                </div>
               
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className=" text-white label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-primary w-full mt-4' value="Add Berbar" type="submit" />
            </form>
        </div>
    );
};


/**
 * Three places to store images
 * 1. Third party image hosting server 
 * 2. File system of your server
 * 3. mongodb (database)
*/

export default AddBerbar;