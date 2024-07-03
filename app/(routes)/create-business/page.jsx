"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { app } from '@/config/FirebaseConfig'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

function CreateBusiness() {
    const [business,setBusiness]=useState("")
    const db = getFirestore(app)
    const {user} = useKindeBrowserClient()
    const router = useRouter()

    const onCreateBusiness = async()=>{

       await setDoc(doc(db,"Business",user.email),{
        businessName:business,
        email:user.email,
        userName:user.given_name

       }).then(res=>{
        console.log("Doc Saved")
        toast("Welcome Aboard!")
        router.replace("/dashboard")
       })
    }

  return (
    <div className="p-14 flex flex-col items-center gap-20 my-10">
        <Image src="/logo.svg" width={200} height={200}/>
        <div className="flex flex-col items-center gap-4 max-w-3xl">
            <h2 className="text-4xl font-bold">What should we call your business?</h2>
            <p className="text-slate-500 ">You can always change this in the settings once you change your organisation</p>
            <div>
                <label className="text-slate-400">Team Name</label>

                <Input palceholder="Eg. Atlassian" className="mt-2" 
                onChange={(e)=>setBusiness(e.target.value)}

                />
            </div>
            <Button disabled={!business} className="w-full" onClick={onCreateBusiness}>
            Create Company Profile
            </Button>
        </div>
        </div>
  )
}

export default CreateBusiness