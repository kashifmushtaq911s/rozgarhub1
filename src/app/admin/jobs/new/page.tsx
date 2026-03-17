"use client"

import React from "react"
import { ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"
import { postJob } from "@/actions/jobs"
import JobForm from "@/components/admin/JobForm"

export default function NewJobPage() {
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
          <Sparkles size={14} className="animate-pulse" /> Create New Posting
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-black tracking-tight text-slate-900">Post a New <span className="text-indigo-600">Job</span></h1>
          <p className="text-slate-500 font-medium text-lg">Enter the details below to publish a new opportunity on Rozgarhub.</p>
        </div>

        <JobForm onSubmit={postJob} />
      </div>
    </div>
  )
}


