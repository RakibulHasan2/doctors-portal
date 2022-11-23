import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from './../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
const AvailableAppointments = ({selectedDate}) => {

//   const [appointmentOptions, setAppointmentOptions] = useState([]);
   const [treatment, setTreatment] = useState(null);
   const date = format(selectedDate, 'PP')
   const {data : appointmentOptions = [], refetch, isLoading} = useQuery({
    queryKey:  ['appointmentOptions', date],
    queryFn: async () =>{   
         const res = await fetch(`https://doctors-portal-server-one-azure.vercel.app/appointmentOption?date=${date}`)
         const data = await res.json()
         return data
    }
  })
    // useEffect(() => {
    //     fetch('https://doctors-portal-server-one-azure.vercel.app/appointmentOption')
    //     .then(res => res.json())
    //     .then(data => setAppointmentOptions(data))
    // } , [])
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <section className='my-16'>
            <p className='text-center text-2xl text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch = {refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;