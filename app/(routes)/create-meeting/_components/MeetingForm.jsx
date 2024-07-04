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

function MeetingForm() {
  const [location,setLocation]=useState()
  return (
    <div className="p-4">
      <h2 className="flex gap-2"><ChevronLeft/>Cancel</h2>
      <div className="mt-4">
        <h2 className="font-bold text-2xl my-4">
          Create New Event
        </h2>
        <hr></hr>
      </div>
      <div className="flex flex-col gap-3 my-4">
        <h2 className="font-bold">Event Name *</h2>
        <Input placeholder="Name of your meeting event"/>

        <h2 className="font-bold">Duration *</h2>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="max-w-40" variant="outline">30 Minutes</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
           
            <DropdownMenuItem>15 Minutes</DropdownMenuItem>
            <DropdownMenuItem>30 Minutes</DropdownMenuItem>
            <DropdownMenuItem>45 Minutes</DropdownMenuItem>
            <DropdownMenuItem>60 Minutes</DropdownMenuItem>
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
        <h2 className="font-bold">Add URL</h2>
        <Input placeholder="Add the url"/>

      </div>
    </div>
  )
}

export default MeetingForm