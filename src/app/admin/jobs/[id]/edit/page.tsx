import React from "react"
import { ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"
import { getJobById, updateJob } from "@/actions/admin"
import JobForm from "@/components/admin/JobForm"
import { notFound } from "next/navigation"

interface EditJobPageProps {
  params: { id: string }
}

export default async function EditJobPage({ params }: EditJobPageProps) {
  const { id } = await params
  const result = await getJobById(id)

  if (!result.success || !result.data) {
    notFound()
  }

  const job = result.data

  const handleUpdate = async (formData: FormData) => {
    "use server"
    return await updateJob(id, formData)
  }

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="mb-10 flex items-center justify-between">
        <Link href="/admin/jobs" className="flex items-center gap-3 text-slate-500 hover:text-indigo-600 transition-all group text-sm font-bold">
          <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-all">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </div>
          Back to Inventory
        </Link>
        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-4 py-2 rounded-2xl border border-indigo-100 shadow-sm">
          <Sparkles size={14} className="animate-pulse" /> Re-calibrating Listing
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-black tracking-tight text-slate-900">Edit Job <span className="text-indigo-600">Listing</span></h1>
          <p className="text-slate-500 font-medium text-lg">Update the information for {job.title} at {job.company}.</p>
        </div>

        <JobForm 
          initialData={job} 
          onSubmit={handleUpdate} 
          isEditing={true} 
        />
      </div>
    </div>
  )
}
