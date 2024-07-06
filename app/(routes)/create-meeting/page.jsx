"use client"
import React, {useState} from 'react'
import MeetingForm from './_components/MeetingForm'

function CreateMeeting() {
  const [formValue,setFormValue]=useState()
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
    //meeting form
    <div className="shadow-md border h-screen">
        <MeetingForm setFormValue={(v)=>setFormValue(v)}/>
    </div>
    //preview
    <div className="col-span-2"></div>
    </div>
  )
}

export default CreateMeeting