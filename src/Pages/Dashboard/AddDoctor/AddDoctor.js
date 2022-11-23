import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Loading from './../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
   const navigate =  useNavigate()
    const imgHostKey = process.env.REACT_APP_imgbb_Key

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-one-azure.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data =>{
        console.log(data.img)
        const img = data.img[0]
        const formData = new FormData();
        formData.append('image',img)
        const url  = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            console.log(imgData)
            if(imgData.success){
               
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }
                console.log(doctor) 

                fetch('https://doctors-portal-server-one-azure.vercel.app/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/manageDoctors')
                })
            }
            

        })
    }

    if(isLoading){
        return <Loading></Loading>
    }
   
    return (
        <div className='w-96 p-7'>
            <h2 className='text-3xl font-bold'>Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold">Specialty</span></label>
                        <select {...register("specialty", {
                            required: true
                        })}
                         className="select input-bordered w-full max-w-xs" >

                            {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                           }
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold">Photo</span></label>
                        <input type="file" {...register("img", {
                            required: "Photo is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Add A Doctor" type="submit" />
                </form>
        </div>
    );
};

export default AddDoctor;