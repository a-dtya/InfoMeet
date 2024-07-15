"use client"
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Clock, MapPin } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function PreviewMeeting({formValue}) {
    const [date,setDate]=useState(new Date())

    //slot creation
    const [timeSlots,setTimeSlots]=useState()
    useEffect(()=>{
        formValue?.duration&&createTimeSlot(formValue?.duration)
    },[formValue])
    const createTimeSlot=(interval)=>{
        const startTime=8*60 // 8 am in mints
        const endTime=22*60 // 10 pm in mints
        const totalSlots=(endTime-startTime)/ interval
        const slots = Array.from({length: totalSlots},(_,i)=>{
            const totalMinutes = startTime+i*interval
            const hours = Math.floor(totalMinutes/60)
            const minutes=totalMinutes%60
            const formatHours= hours>12?hours-12:hours // convert to 12 hr
            const period = hours>=12?"PM":"AM"
            return `${String(formatHours).padStart(2,'0')}:${String(minutes).padStart(2,'0')} ${period}`
        })
        setTimeSlots(slots)
    }
    //slot creation end
  return (
    <div className='p-5 py-10 shadow-lg m-5 border-t-8'>
           <Image src="/logo.svg" width={150} height={150}/>
           <div className='grid grid-cols-1 md:grid-cols-3 mt-5'>
            //Meeting info
            <div className='p-4 border-r'>
                <h2>Company Name</h2>
                <h2 className='font-bold text-2xl '>{formValue?.eventName?formValue.eventName:'Meeting Name'}</h2>
                <div className='mt-5 flex flex-col gap-4'> 
                    <h2 className='flex gap-2'><Clock/>{formValue?.duration} Min</h2>
                    <h2 className='flex gap-2'><MapPin/>{formValue?.location} Meeting</h2>
                    <Link className='text-primary ' href={formValue?.locationUrl?formValue.locationUrl:'#'}>{formValue?.locationUrl}</Link>
                </div>
            </div>
            //time and date selection
            <div className='md:col-span-2 flex px-4'>    
            <div className='flex flex-col'>
                <h2 className='font-bold text-lg'>Select Date and Time</h2>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border mt-5"
                    />
            </div>
            //time slot
            <div className='flex flex-col w-full overflow-auto gap-4 p-5' style={{maxHeight:'400px'}}>
                {timeSlots?.map((time,index)=>(
                    <Button key={index} variant="outline" className="border-primay
                     text-primary">{time}</Button>
                ))}
            </div>
            </div>
           </div>
    </div>
  )
}

export default PreviewMeeting