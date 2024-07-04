"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeft } from 'lucide-react'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LocationOptions from '@/app/_utils/LocationOptions'
import Link from 'next/link'

function MeetingForm() {
  const [location,setLocation]=useState()
  const [eventName,setEventName]=useState('')
  const [duration,setDuration]=useState(30)
  const [locationUrl,setLocationUrl]=useState("")
  return (
    <div className="p-8">
      <Link href={"/dashboard"}><h2 className="flex gap-2"><ChevronLeft/>Cancel</h2></Link>
      <div className="mt-4">
        <h2 className="font-bold text-2xl my-4">
          Create New Event
        </h2>
        <hr></hr>
      </div>
      <div className="flex flex-col gap-3 my-4">
        <h2 className="font-bold">Event Name *</h2>
        <Input placeholder="Name of your meeting event" onChange={(e)=>setEventName(e.target.value)}/>

        <h2 className="font-bold">Duration *</h2>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="max-w-40" variant="outline">{duration} Minutes</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
           
            <DropdownMenuItem onClick={()=>setDuration(15)}>15 Minutes</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>setDuration(30)}>30 Minutes</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>setDuration(45)}>45 Minutes</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>setDuration(60)}>60 Minutes</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <h2 className="font-bold">Location *</h2>
        <div className="grid grid-cols-4 gap-3">
          {LocationOptions.map((option,index)=>(
            <div className="cursor-pointer flex flex-col justify-center items-center border p-3 rounded-lg hover:bg-blue-100 hover:border-primary"
            onClick={()=>setLocation(option.name)} key={index}>
              <h3>{option.name}</h3>
            </div>
          ))}
        </div>
        {location&&<>
        <h2 className="font-bold">Add URL</h2>
        <Input placeholder="Add the url" onChange={(e)=>setLocationUrl(e.target.value)}/>
        </>}

      </div>
      <Button disabled={!(eventName||location||locationUrl||duration)}  className="w-full mt-9">Create</Button>
    </div>
  )
}

export default MeetingForm