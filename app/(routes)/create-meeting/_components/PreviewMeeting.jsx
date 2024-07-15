import { Clock, MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function PreviewMeeting({formValue}) {
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
            <div className='md:col-span-2'></div>
           </div>
    </div>
  )
}

export default PreviewMeeting