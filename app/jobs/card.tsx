'use client'

import deleteJob from "@/actions/delete-job";
import SubmitButton from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

type Card = {
    id:string
    title:string,
    companyName:string,
    location:string,
    type:string,
    desc:string
}

export default function Card({title,id,companyName,location,type,desc}:Card) {
    const router =useRouter();

  return (
    <div className="w-[600px] min-h-[240px] shadow-lg shadow-slate-700 flex flex-col p-4 border-4">
        <div>
            <h1 className="text-[2rem]">{title}</h1>
            <div className="flex items-center gap-4 text-neutral-500">
               <span>{companyName}</span>
                <span>{location}</span>
            </div>
        </div>

        <div className="my-5 flex items-center gap-5">
            <span className=" rounded-2xl bg-neutral-500 p-2 px-4">{type}</span>
        </div>


        <p className="text-lg">{desc}</p>

        <div className="pt-6 ml-auto mr-2 flex gap-4">
            {/* <form action={async(formData) => {
                await deleteJob(formData)
                toast.success('Job deleted successfully!')
            }}>
                <input type="hidden" name="jobId" value={id} id="jobId"/>
                <SubmitButton label="Delete"/>
            </form> */}
            <Button onClick={() => router.push(`/jobs/${id}`)}>View More</Button>
        </div>

    </div>
  )
}
