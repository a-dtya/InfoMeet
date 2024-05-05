import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <div className="flex flex-col jutify-center items-center my-20">
    <div className='hidden lg:block'>
            <Image src='/profile1.jpg' width={100} height={100} alt="1"
            className='h-[100px] object-cover rounded-full absolute right-36'/>
             <Image src='/profile3.jpg' width={100} height={100} alt="2"
            className='h-[100px] object-cover rounded-full absolute top-48 left-16'/>
             <Image src='/profile2.jpg' width={100} height={100} alt="3"
            className='h-[100px] object-cover rounded-full absolute bottom-20 left-36'/>
              <Image src='/profile4.jpg' width={100} height={100} alt="4"
            className='h-[100px] object-cover rounded-full absolute right-16 bottom-32' />
        </div>
    <div className="text-center mx-w-2xl mt-2">
        <h2 className="font-bold text-[60px] text-slate-700">Easy Scheduling Ahead</h2>
        <div className="w-[400px] md:w-[800px] ">
        <h2 className="text-2xl mt-5 text-slate-500">InfoMeet is your scheduling automation platform for eliminating the back-and forth emails to find the perfect time-and so much more!</h2>
        </div>
    </div>
    <div className="flex justify-center mt-5 gap-2">
    <div className="flex items-center">
    <Image src="/google.png" alt="google" width={27} height={27}/>
    </div>
        <Button className="text-lg" >Sign Up with Google</Button>
    </div>
    </div>
  )
}

export default Hero