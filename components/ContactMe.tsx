import React from 'react'
import {PhoneIcon,MapPinIcon,EnvelopeIcon} from '@heroicons/react/24/outline'
import {useForm, SubmitHandler} from 'react-hook-form'
type Inputs = {
    name:string; 
    email:string;
    subject:string;
    message:string;
}
type Props = {}

export default function ContactMe({}: Props) {
    const { register, handleSubmit, } = useForm<Inputs>();
    const onSubmit:SubmitHandler<Inputs>= (formData)=> {
        window.location.href =`mailto:nejc.lampic@gmail?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message}`
        {formData.email}
    }
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl" >
            Contact
        </h3>
        
        
        
        <div className="flex flex-col space-y-10 ">
            <h4 className="text-4xl font-semibold text-center">
                <span className="decoration-[#F53]/50 underline"></span>
            </h4>
            <div className="space-y-10">
               
           
                <div className="flex  items-center space-x-5  justify-center">
                    <EnvelopeIcon className="text-[#db9b11] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">nejc.lampic@gmail.com</p>
                </div>
                <div className="flex  items-center space-x-5  justify-center">
                    <MapPinIcon className="text-[#db9b11] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">Prištinska ulica 18 <span>1000 Ljubljana</span></p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto" action="">
                    <div className="flex space-x-2">
                        <input {...register('name')} className="contactInput" type="text" placeholder="Name"/>
                        <input {...register('email')} className="contactInput" type="text" placeholder="Email" />
                    </div>
                    <input {...register('subject')} placeholder="Subject" className="contactInput" type="text"/>
                    <textarea {...register('message')} className="contactInput"/>
                    <button className="bg-[#cf952879] py-5 px-10 rounded-md test-black font-bold text-lg">Submit</button>
                </form>
            </div>
        </div>
        </div>
  )
}