"use client"

import React, { useState, useEffect } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cvSchema, CVData, defaultCVData } from "./schema"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Trash2, Save, User, Briefcase, GraduationCap, Wrench, Award, Languages, Sparkles, Link as LinkIcon } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import dynamic from "next/dynamic"
import Image from "next/image"

// Import our isolated preview component dynamically to completely bypass SSR analysis of @react-pdf/renderer
const CVPreview = dynamic(
  () => import("./CVPreview"),
  { ssr: false, loading: () => <div className="flex h-full items-center justify-center bg-[var(--color-muted)] text-[var(--color-muted-foreground)] rounded-xl">Loading PDF Preview...</div> }
)

const CVDownloadButton = dynamic(
  () => import("./CVDownloadButton"),
  { ssr: false, loading: () => null }
)

export default function CVBuilderClient() {
  const [isMounted, setIsMounted] = useState(false)
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit")
  
  const form = useForm<CVData>({
    resolver: zodResolver(cvSchema),
    defaultValues: defaultCVData,
    mode: "onChange"
  })

  // Watch entire form value to pass down to PDF preview
  const formData = form.watch()

  const { fields: expFields, append: appendExp, remove: removeExp } = useFieldArray({
    control: form.control,
    name: "experience",
  })

  const { fields: eduFields, append: appendEdu, remove: removeEdu } = useFieldArray({
    control: form.control,
    name: "education",
  })
  
  const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({
    control: form.control,
    name: "skills",
  })
  
  const { fields: langFields, append: appendLang, remove: removeLang } = useFieldArray({
    control: form.control,
    name: "languages",
  })
  
  const { fields: interestFields, append: appendInterest, remove: removeInterest } = useFieldArray({
    control: form.control,
    name: "interests",
  })
  
  const { fields: courseFields, append: appendCourse, remove: removeCourse } = useFieldArray({
    control: form.control,
    name: "courses",
  })

  const { fields: linkFields, append: appendLink, remove: removeLink } = useFieldArray({
    control: form.control,
    name: "links",
  })

  const { fields: refFields, append: appendRef, remove: removeRef } = useFieldArray({
    control: form.control,
    name: "references",
  })

  useEffect(() => {
    // Load saved data from localStorage if exists
    const saved = localStorage.getItem("rozgarhub_cv_draft")
    if (saved) {
      try {
        form.reset(JSON.parse(saved))
      } catch (e) {
        console.error("Failed to parse saved CV")
      }
    }
    setIsMounted(true)
  }, [form])

  const handleSaveDraft = () => {
    localStorage.setItem("rozgarhub_cv_draft", JSON.stringify(formData))
    alert("Draft saved successfully!")
  }

  if (!isMounted) return null

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:h-[calc(100vh-140px)] min-h-[600px] lg:min-h-[900px]">
      {/* Mobile Tab Switcher */}
      <div className="flex lg:hidden bg-[#f1f5f9] p-1.5 rounded-2xl mb-4 border border-[#e2e8f0]">
        <button 
          onClick={() => setActiveTab("edit")}
          className={`flex-1 py-3 text-sm font-black rounded-xl transition-all ${activeTab === "edit" ? "bg-white text-[var(--color-primary)] shadow-md" : "text-[#64748b]"}`}
        >
          Editor
        </button>
        <button 
          onClick={() => setActiveTab("preview")}
          className={`flex-1 py-3 text-sm font-black rounded-xl transition-all ${activeTab === "preview" ? "bg-white text-[var(--color-primary)] shadow-md" : "text-[#64748b]"}`}
        >
          Live Preview
        </button>
      </div>

      {/* Scrollable Form Section */}
      <div className={`${activeTab === "edit" ? "flex" : "hidden lg:flex"} w-full lg:w-1/2 flex-col h-[700px] lg:h-full bg-white rounded-[2rem] border border-[#e2e8f0] shadow-sm overflow-hidden`}>
        <div className="p-8 border-b border-[#e2e8f0] flex justify-between items-center bg-[#f8fafc]">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse"></div>
            <h2 className="font-black text-2xl text-[#0f172a] tracking-tight">Editor</h2>
          </div>
          <Button variant="outline" size="sm" onClick={handleSaveDraft} className="gap-2 border-[#e2e8f0] text-[#0f172a] font-bold hover:bg-[var(--color-primary)]/5 rounded-xl px-6 h-11 transition-all">
            <Save size={18} className="text-[var(--color-primary)]" /> Save Draft
          </Button>
        </div>
        
        <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
          <Accordion collapsible defaultValue="personal-info" className="w-full space-y-6">
            {/* Personal Info */}
            <AccordionItem value="personal-info" className="border-[#e2e8f0] bg-[#f8fafc] rounded-3xl px-6 data-[state=open]:shadow-md transition-all group overflow-hidden">
              <AccordionTrigger className="hover:no-underline text-xl font-black text-[#0f172a] py-6 group-data-[state=open]:text-[var(--color-primary)]">
                <div className="flex items-center gap-4">
                   <div className="h-10 w-10 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#64748b] transition-colors group-hover:border-[var(--color-primary)]/20 group-hover:text-[var(--color-primary)]">
                     <User size={20} />
                   </div>
                   Personal Information
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-[2rem] border border-[#e2e8f0]">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Full Name</label>
                    <Input {...form.register("personalInfo.fullName")} placeholder="e.g. Ali Ahmed" className="h-14 rounded-2xl border-[#e2e8f0] focus:ring-[var(--color-primary)]/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Professional Title</label>
                    <Input {...form.register("personalInfo.jobTitle")} placeholder="e.g. Senior Software Engineer" className="h-14 rounded-2xl border-[#e2e8f0] focus:ring-[var(--color-primary)]/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Email Address</label>
                    <Input {...form.register("personalInfo.email")} type="email" placeholder="ali@example.com" className="h-14 rounded-2xl border-[#e2e8f0] focus:ring-[var(--color-primary)]/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Phone Number</label>
                    <Input {...form.register("personalInfo.phone")} placeholder="+92 300 0000000" className="h-14 rounded-2xl border-[#e2e8f0] focus:ring-[var(--color-primary)]/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Location</label>
                    <Input {...form.register("personalInfo.location")} placeholder="City, Pakistan" className="h-14 rounded-2xl border-[#e2e8f0] focus:ring-[var(--color-primary)]/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Professional Photo</label>
                    <div className="flex items-center gap-5">
                      {form.watch("personalInfo.photo") && (
                        <div className="h-14 w-14 overflow-hidden rounded-2xl border-2 border-[var(--color-primary)]/20 shadow-lg shrink-0 relative">
                          <Image src={form.watch("personalInfo.photo")!} alt="Profile" fill className="object-cover" />
                        </div>
                      )}
                      <div className="flex-1">
                        <Input 
                          type="file" 
                          accept="image/*"
                          className="cursor-pointer h-14 rounded-2xl border-[#e2e8f0] file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-black file:bg-[var(--color-primary)]/10 file:text-[var(--color-primary)] hover:file:bg-[var(--color-primary)] hover:file:text-white transition-all pt-3"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                form.setValue("personalInfo.photo", reader.result as string, { shouldValidate: true, shouldDirty: true });
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2 space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Professional Summary</label>
                    <textarea 
                      {...form.register("personalInfo.summary")} 
                      className="w-full min-h-[140px] rounded-2xl border border-[#e2e8f0] bg-white px-5 py-4 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/20 transition-all"
                      placeholder="A brief summary of your elite professional background..."
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Experience */}
            <AccordionItem value="experience" className="border-[#e2e8f0] bg-[#f8fafc] rounded-3xl px-6 data-[state=open]:shadow-md transition-all group overflow-hidden">
              <AccordionTrigger className="hover:no-underline text-xl font-black text-[#0f172a] py-6 group-data-[state=open]:text-[var(--color-primary)]">
                <div className="flex items-center gap-4">
                   <div className="h-10 w-10 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#64748b] transition-colors group-hover:border-[var(--color-primary)]/20 group-hover:text-[var(--color-primary)]">
                     <Briefcase size={20} />
                   </div>
                   Work Experience
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-8">
                <div className="space-y-6 mb-8">
                  {expFields.map((field, index) => (
                    <Card key={field.id} className="relative rounded-[2rem] border-[#e2e8f0] bg-white shadow-sm overflow-hidden">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-4 right-4 h-10 w-10 rounded-xl text-red-500 hover:text-red-700 hover:bg-red-50 transition-all z-10"
                        onClick={() => removeExp(index)}
                      >
                        <Trash2 size={20} />
                      </Button>
                      <CardContent className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Job Title</label>
                          <Input {...form.register(`experience.${index}.jobTitle`)} placeholder="e.g. Software Engineer" className="h-14 rounded-2xl border-[#e2e8f0]" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Company / Organization</label>
                          <Input {...form.register(`experience.${index}.company`)} placeholder="e.g. Faisal Bank" className="h-14 rounded-2xl border-[#e2e8f0]" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Start Date</label>
                          <Input type="date" {...form.register(`experience.${index}.startDate`)} className="h-14 rounded-2xl border-[#e2e8f0]" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">End Date</label>
                          <Input type="date" {...form.register(`experience.${index}.endDate`)} className="h-14 rounded-2xl border-[#e2e8f0]" />
                        </div>
                        <div className="col-span-1 md:col-span-2 space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Key Responsibilities / Achievements</label>
                          <textarea 
                            {...form.register(`experience.${index}.description`)} 
                            className="w-full min-h-[120px] rounded-2xl border border-[#e2e8f0] bg-[#fafbfc] px-5 py-4 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/20 transition-all"
                            placeholder="Describe your impact and achievements..."
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {expFields.length === 0 && (
                    <div className="text-center py-10 bg-white rounded-3xl border-2 border-dashed border-[#e2e8f0] text-[#94a3b8] font-bold">
                      No experience added yet. Click below to add your professional history.
                    </div>
                  )}
                </div>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full h-16 rounded-2xl border-2 border-dashed border-[var(--color-primary)]/30 text-[var(--color-primary)] font-black hover:bg-[var(--color-primary)]/5 hover:border-[var(--color-primary)] transition-all gap-3"
                  onClick={() => appendExp({ id: Date.now().toString(), jobTitle: "", company: "", startDate: "", endDate: "", description: "" })}
                >
                  <Plus size={20} /> Add Work Experience
                </Button>
              </AccordionContent>
            </AccordionItem>

            {/* Education */}
            <AccordionItem value="education" className="border-[#e2e8f0] bg-[#f8fafc] rounded-3xl px-6 data-[state=open]:shadow-md transition-all group overflow-hidden">
              <AccordionTrigger className="hover:no-underline text-xl font-black text-[#0f172a] py-6 group-data-[state=open]:text-[var(--color-primary)]">
                <div className="flex items-center gap-4">
                   <div className="h-10 w-10 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#64748b] transition-colors group-hover:border-[var(--color-primary)]/20 group-hover:text-[var(--color-primary)]">
                     <GraduationCap size={20} />
                   </div>
                   Education History
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-8">
                <div className="space-y-6 mb-8">
                  {eduFields.map((field, index) => (
                    <Card key={field.id} className="relative rounded-[2rem] border-[#e2e8f0] bg-white shadow-sm overflow-hidden">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-4 right-4 h-10 w-10 rounded-xl text-red-500 hover:text-red-700 hover:bg-red-50 transition-all z-10"
                        onClick={() => removeEdu(index)}
                      >
                        <Trash2 size={20} />
                      </Button>
                      <CardContent className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Degree / Certificate</label>
                          <Input {...form.register(`education.${index}.degree`)} placeholder="e.g. BS Computer Science" className="h-14 rounded-2xl border-[#e2e8f0]" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Institution / Board</label>
                          <Input {...form.register(`education.${index}.institution`)} list="institutions-list" placeholder="Select or type full name" className="h-14 rounded-2xl border-[#e2e8f0]" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Start Date</label>
                          <Input type="date" {...form.register(`education.${index}.startDate`)} className="h-14 rounded-2xl border-[#e2e8f0]" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">End Date (or Expected)</label>
                          <Input type="date" {...form.register(`education.${index}.endDate`)} className="h-14 rounded-2xl border-[#e2e8f0]" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 col-span-1 md:col-span-2">
                          <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">CGPA / Percentage</label>
                            <Input {...form.register(`education.${index}.cgpa`)} placeholder="e.g. 3.8/4.0" className="h-14 rounded-2xl border-[#e2e8f0]" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Grade</label>
                            <Input {...form.register(`education.${index}.grade`)} placeholder="e.g. A+" className="h-14 rounded-2xl border-[#e2e8f0]" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 col-span-1 md:col-span-2">
                          <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Total Marks</label>
                            <Input {...form.register(`education.${index}.totalMarks`)} type="number" placeholder="1100" className="h-14 rounded-2xl border-[#e2e8f0]" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Obtained Marks</label>
                            <Input {...form.register(`education.${index}.obtainedMarks`)} type="number" placeholder="950" className="h-14 rounded-2xl border-[#e2e8f0]" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {eduFields.length === 0 && (
                     <div className="text-center py-10 bg-white rounded-3xl border-2 border-dashed border-[#e2e8f0] text-[#94a3b8] font-bold">
                       No education history added yet.
                     </div>
                  )}
                </div>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full h-16 rounded-2xl border-2 border-dashed border-[var(--color-primary)]/30 text-[var(--color-primary)] font-black hover:bg-[var(--color-primary)]/5 hover:border-[var(--color-primary)] transition-all gap-3"
                  onClick={() => appendEdu({ id: Date.now().toString(), degree: "", institution: "", startDate: "", endDate: "", cgpa: "", grade: "", totalMarks: "", obtainedMarks: "" })}
                >
                  <Plus size={20} /> Add Education
                </Button>
              </AccordionContent>
            </AccordionItem>

            {/* Skills */}
            <AccordionItem value="skills" className="border-[#e2e8f0] bg-[#f8fafc] rounded-3xl px-6 data-[state=open]:shadow-md transition-all group overflow-hidden">
              <AccordionTrigger className="hover:no-underline text-xl font-black text-[#0f172a] py-6 group-data-[state=open]:text-[var(--color-primary)]">
                <div className="flex items-center gap-4">
                   <div className="h-10 w-10 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#64748b] transition-colors group-hover:border-[var(--color-primary)]/20 group-hover:text-[var(--color-primary)]">
                     <Wrench size={20} />
                   </div>
                   Core Skills
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-8">
                <div className="p-8 bg-white rounded-[2rem] border border-[#e2e8f0]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {skillFields.map((field, index) => (
                      <div key={field.id} className="flex items-center gap-3 group/skill">
                        <Input 
                          {...form.register(`skills.${index}.name`)} 
                          placeholder="e.g. React.js" 
                          className="flex-1 h-14 rounded-xl border-[#e2e8f0] focus:ring-[var(--color-primary)]/20 shadow-sm"
                        />
                        <Button 
                          type="button"
                          variant="ghost" 
                          size="icon" 
                          className="h-12 w-12 rounded-xl text-red-400 hover:text-red-600 hover:bg-red-50 shrink-0 opacity-0 group-hover/skill:opacity-100 transition-all"
                          onClick={() => removeSkill(index)}
                        >
                          <Trash2 size={18} />
                        </Button>
                      </div>
                    ))}
                  </div>
                  {skillFields.length === 0 && (
                    <div className="text-center py-6 text-[#94a3b8] font-bold italic mb-6">
                      Add your top skills to stand out.
                    </div>
                  )}
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full h-14 rounded-xl border-2 border-dashed border-[var(--color-primary)]/20 text-[var(--color-primary)] font-black hover:bg-[var(--color-primary)]/5 transition-all gap-2"
                    onClick={() => appendSkill({ id: Date.now().toString(), name: "" })}
                  >
                    <Plus size={18} /> Add New Skill
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Certifications & Courses */}
            <AccordionItem value="courses" className="border-[#e2e8f0] bg-[#f8fafc] rounded-3xl px-6 data-[state=open]:shadow-md transition-all group overflow-hidden">
               <AccordionTrigger className="hover:no-underline text-xl font-black text-[#0f172a] py-6 group-data-[state=open]:text-[var(--color-primary)]">
                <div className="flex items-center gap-4">
                   <div className="h-10 w-10 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#64748b] transition-colors group-hover:border-[var(--color-primary)]/20 group-hover:text-[var(--color-primary)]">
                     <Award size={20} />
                   </div>
                   Certifications
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-8">
                <div className="p-8 bg-white rounded-[2rem] border border-[#e2e8f0]">
                  <div className="space-y-4 mb-8">
                    {courseFields.map((field, index) => (
                      <div key={field.id} className="flex items-center gap-3">
                        <Input 
                          {...form.register(`courses.${index}.name`)} 
                          list="courses-list"
                          placeholder="Certification or Course Name" 
                          className="flex-1 h-14 rounded-xl border-[#e2e8f0]"
                        />
                        <Button 
                          type="button"
                          variant="ghost" 
                          size="icon" 
                          className="h-12 w-12 rounded-xl text-red-500 hover:bg-red-50"
                          onClick={() => removeCourse(index)}
                        >
                          <Trash2 size={18} />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full h-14 rounded-xl border-2 border-dashed border-[var(--color-primary)]/20 text-[var(--color-primary)] font-black hover:bg-[var(--color-primary)]/5 transition-all gap-2"
                    onClick={() => appendCourse({ id: Date.now().toString(), name: "" })}
                  >
                    <Plus size={18} /> Add Certification
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Languages */}
            <AccordionItem value="languages" className="border-[#e2e8f0] bg-[#f8fafc] rounded-3xl px-6 data-[state=open]:shadow-md transition-all group overflow-hidden">
               <AccordionTrigger className="hover:no-underline text-xl font-black text-[#0f172a] py-6 group-data-[state=open]:text-[var(--color-primary)]">
                <div className="flex items-center gap-4">
                   <div className="h-10 w-10 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#64748b] transition-colors group-hover:border-[var(--color-primary)]/20 group-hover:text-[var(--color-primary)]">
                     <Languages size={20} />
                   </div>
                   Languages
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-8">
                <div className="p-8 bg-white rounded-[2rem] border border-[#e2e8f0]">
                  <div className="space-y-6 mb-8">
                    {langFields.map((field, index) => (
                      <div key={field.id} className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative pr-14">
                        <Input 
                          {...form.register(`languages.${index}.name`)} 
                          placeholder="e.g. English" 
                          className="h-14 rounded-xl border-[#e2e8f0]"
                        />
                        <Input 
                          {...form.register(`languages.${index}.level`)} 
                          list="language-proficiency"
                          placeholder="Proficiency Level" 
                          className="h-14 rounded-xl border-[#e2e8f0]"
                        />
                        <Button 
                          type="button"
                          variant="ghost" 
                          size="icon" 
                          className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 text-red-400 hover:text-red-600"
                          onClick={() => removeLang(index)}
                        >
                          <Trash2 size={18} />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full h-14 rounded-xl border-2 border-dashed border-[var(--color-primary)]/20 text-[var(--color-primary)] font-black hover:bg-[var(--color-primary)]/5 transition-all gap-2"
                    onClick={() => appendLang({ id: Date.now().toString(), name: "", level: "" })}
                  >
                    <Plus size={18} /> Add Language
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Interests & Hobbies */}
            <AccordionItem value="interests" className="border-[#e2e8f0] bg-[#f8fafc] rounded-3xl px-6 data-[state=open]:shadow-md transition-all group overflow-hidden">
               <AccordionTrigger className="hover:no-underline text-xl font-black text-[#0f172a] py-6 group-data-[state=open]:text-[var(--color-primary)]">
                <div className="flex items-center gap-4">
                   <div className="h-10 w-10 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#64748b] transition-colors group-hover:border-[var(--color-primary)]/20 group-hover:text-[var(--color-primary)]">
                     <Sparkles size={20} />
                   </div>
                   Interests & Hobbies
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-8">
                <div className="p-8 bg-white rounded-[2rem] border border-[#e2e8f0]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {interestFields.map((field, index) => (
                      <div key={field.id} className="flex items-center gap-3 group/interest">
                        <Input 
                          {...form.register(`interests.${index}.name`)} 
                          list="interests-list"
                          placeholder="e.g. Photography" 
                          className="flex-1 h-14 rounded-xl border-[#e2e8f0]"
                        />
                        <Button 
                          type="button"
                          variant="ghost" 
                          size="icon" 
                          className="h-10 w-10 text-red-400 group-hover/interest:opacity-100 opacity-0 transition-all"
                          onClick={() => removeInterest(index)}
                        >
                          <Trash2 size={18} />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full h-14 rounded-xl border-2 border-dashed border-[var(--color-primary)]/20 text-[var(--color-primary)] font-black hover:bg-[var(--color-primary)]/5 transition-all gap-2"
                    onClick={() => appendInterest({ id: Date.now().toString(), name: "" })}
                  >
                    <Plus size={18} /> Add Interest
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Links & Portfolios */}
            <AccordionItem value="links" className="border-[#e2e8f0] bg-[#f8fafc] rounded-3xl px-6 data-[state=open]:shadow-md transition-all group overflow-hidden">
               <AccordionTrigger className="hover:no-underline text-xl font-black text-[#0f172a] py-6 group-data-[state=open]:text-[var(--color-primary)]">
                <div className="flex items-center gap-4">
                   <div className="h-10 w-10 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#64748b] transition-colors group-hover:border-[var(--color-primary)]/20 group-hover:text-[var(--color-primary)]">
                     <LinkIcon size={20} />
                   </div>
                   Links & Portfolios
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-8">
                <div className="p-8 bg-white rounded-[2rem] border border-[#e2e8f0]">
                  <div className="space-y-4 mb-8">
                    {linkFields.map((field, index) => (
                      <div key={field.id} className="flex flex-col sm:flex-row gap-4 relative pr-14 border-b border-[#e2e8f0] pb-6 last:border-0 last:pb-0">
                        <Input 
                          {...form.register(`links.${index}.name`)} 
                          placeholder="e.g. LinkedIn" 
                          className="h-14 rounded-xl border-[#e2e8f0]"
                        />
                        <Input 
                          {...form.register(`links.${index}.url`)} 
                          placeholder="https://..." 
                          className="h-14 rounded-xl border-[#e2e8f0] flex-[2]"
                        />
                        <Button 
                          type="button"
                          variant="ghost" 
                          size="icon" 
                          className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 text-red-400 hover:text-red-500"
                          onClick={() => removeLink(index)}
                        >
                          <Trash2 size={18} />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full h-14 rounded-xl border-2 border-dashed border-[var(--color-primary)]/20 text-[var(--color-primary)] font-black hover:bg-[var(--color-primary)]/5 transition-all gap-2"
                    onClick={() => appendLink({ id: Date.now().toString(), name: "", url: "" })}
                  >
                    <Plus size={18} /> Add Portfolio Link
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* References */}
            <AccordionItem value="references" className="border-[#e2e8f0] bg-[#f8fafc] rounded-3xl px-6 data-[state=open]:shadow-md transition-all group overflow-hidden">
               <AccordionTrigger className="hover:no-underline text-xl font-black text-[#0f172a] py-6 group-data-[state=open]:text-[var(--color-primary)]">
                <div className="flex items-center gap-4">
                   <div className="h-10 w-10 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#64748b] transition-colors group-hover:border-[var(--color-primary)]/20 group-hover:text-[var(--color-primary)]">
                     <User size={20} />
                   </div>
                   Professional References
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-8">
                <div className="space-y-6 mb-8">
                  {refFields.map((field, index) => (
                    <Card key={field.id} className="relative rounded-[2rem] border-[#e2e8f0] bg-white shadow-sm overflow-hidden">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-4 right-4 h-10 w-10 rounded-xl text-red-500 hover:bg-red-50"
                        onClick={() => removeRef(index)}
                      >
                        <Trash2 size={20} />
                      </Button>
                      <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Reference Name</label>
                          <Input {...form.register(`references.${index}.name`)} placeholder="Jane Doe" className="h-14 rounded-2xl border-[#e2e8f0]" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Position / Designation</label>
                          <Input {...form.register(`references.${index}.designation`)} placeholder="Senior Manager" className="h-14 rounded-2xl border-[#e2e8f0]" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Company / Organization</label>
                          <Input {...form.register(`references.${index}.company`)} placeholder="Tech Solutions" className="h-14 rounded-2xl border-[#e2e8f0]" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Email / Phone</label>
                          <Input {...form.register(`references.${index}.contact`)} placeholder="jane@example.com" className="h-14 rounded-2xl border-[#e2e8f0]" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full h-16 rounded-2xl border-2 border-dashed border-[var(--color-primary)]/20 text-[var(--color-primary)] font-black hover:bg-[var(--color-primary)]/5 transition-all gap-3"
                  onClick={() => appendRef({ id: Date.now().toString(), name: "", designation: "", company: "", contact: "" })}
                >
                  <Plus size={20} /> Add Reference
                </Button>
              </AccordionContent>
            </AccordionItem>

            {/* Additional Information */}
            <AccordionItem value="additional" className="border-[#e2e8f0] bg-[#f8fafc] rounded-3xl px-6 data-[state=open]:shadow-md transition-all group overflow-hidden">
               <AccordionTrigger className="hover:no-underline text-xl font-black text-[#0f172a] py-6 group-data-[state=open]:text-[var(--color-primary)]">
                <div className="flex items-center gap-4">
                   <div className="h-10 w-10 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#64748b] transition-colors group-hover:border-[var(--color-primary)]/20 group-hover:text-[var(--color-primary)]">
                     <Sparkles size={20} />
                   </div>
                   Additional Details
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-8">
                <div className="p-8 bg-white rounded-[2rem] border border-[#e2e8f0]">
                  <textarea 
                    {...form.register("additionalInfo")} 
                    className="w-full min-h-[160px] rounded-[1.5rem] border border-[#e2e8f0] bg-[#fafbfc] px-6 py-5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/20 transition-all"
                    placeholder="Any other elite information you would like to include... (awards, publications, hobbies, etc.)"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Preview Section */}
      <div className={`${activeTab === "preview" ? "flex" : "hidden lg:flex"} w-full lg:w-1/2 flex-col h-[700px] lg:h-full bg-white rounded-[2rem] border border-[#e2e8f0] shadow-2xl shadow-blue-900/10 overflow-hidden`}>
        <div className="p-8 border-b border-[#e2e8f0] flex justify-between items-center bg-[#f8fafc]">
          <h2 className="font-black text-2xl text-[#0f172a] tracking-tight">Live Preview</h2>
          <CVDownloadButton data={formData} />
        </div>
        <div className="flex-1 bg-slate-50 relative overflow-hidden p-0">
          <div className="w-full h-full overflow-hidden bg-white relative z-10 transition-transform">
            <CVPreview data={formData} />
          </div>
        </div>
      </div>

      {/* Datalists for select-or-type options */}
      <datalist id="language-proficiency">
        <option value="Beginner" />
        <option value="Intermediate" />
        <option value="Advanced" />
        <option value="Fluent" />
        <option value="Native" />
      </datalist>

      <datalist id="interests-list">
        <option value="Photography" />
        <option value="Reading" />
        <option value="Traveling" />
        <option value="Gaming" />
        <option value="Sports" />
        <option value="Music" />
        <option value="Coding" />
        <option value="Writing" />
        <option value="Gardening" />
        <option value="Cooking" />
        <option value="Fitness" />
        <option value="Art" />
      </datalist>

      <datalist id="courses-list">
        <option value="AWS Certified Solutions Architect" />
        <option value="Google IT Support Professional" />
        <option value="Digital Marketing (Google)" />
        <option value="Python for Everybody (Coursera)" />
        <option value="Excel Skills for Business" />
        <option value="Full Stack Web Development" />
        <option value="Data Science Specialization" />
      </datalist>

      <datalist id="institutions-list">
        {/* Punjab Boards */}
        <option value="BISE Lahore (Board of Intermediate and Secondary Education)" />
        <option value="BISE Multan (Board of Intermediate and Secondary Education)" />
        <option value="BISE Rawalpindi (Board of Intermediate and Secondary Education)" />
        <option value="BISE Faisalabad (Board of Intermediate and Secondary Education)" />
        <option value="BISE Gujranwala (Board of Intermediate and Secondary Education)" />
        <option value="BISE Sahiwal (Board of Intermediate and Secondary Education)" />
        <option value="BISE Sargodha (Board of Intermediate and Secondary Education)" />
        <option value="BISE Bahawalpur (Board of Intermediate and Secondary Education)" />
        <option value="BISE D.G. Khan (Board of Intermediate and Secondary Education)" />
        {/* Sindh Boards */}
        <option value="BISE Karachi (Board of Intermediate and Secondary Education)" />
        <option value="BISE Hyderabad (Board of Intermediate and Secondary Education)" />
        <option value="BISE Sukkur (Board of Intermediate and Secondary Education)" />
        <option value="BISE Larkana (Board of Intermediate and Secondary Education)" />
        <option value="BISE Mirpurkhas (Board of Intermediate and Secondary Education)" />
        <option value="BSEK Karachi (Board of Secondary Education Karachi)" />
        <option value="BIEK Karachi (Board of Intermediate Education Karachi)" />
        {/* KPK Boards */}
        <option value="BISE Peshawar (Board of Intermediate and Secondary Education)" />
        <option value="BISE Abbottabad (Board of Intermediate and Secondary Education)" />
        <option value="BISE Bannu (Board of Intermediate and Secondary Education)" />
        <option value="BISE Kohat (Board of Intermediate and Secondary Education)" />
        <option value="BISE Malakand (Board of Intermediate and Secondary Education)" />
        <option value="BISE Mardan (Board of Intermediate and Secondary Education)" />
        <option value="BISE Swat (Board of Intermediate and Secondary Education)" />
        {/* Balochistan & Federal Boards */}
        <option value="BISE Quetta (Board of Intermediate and Secondary Education)" />
        <option value="FBISE Islamabad (Federal Board of Intermediate and Secondary Education)" />
        <option value="BISE Mirpur (AJK Board of Intermediate and Secondary Education)" />
        <option value="Aga Khan University Examination Board (AKU-EB)" />
        
        {/* Major Universities */}
        <option value="Quaid-i-Azam University, Islamabad (QAU)" />
        <option value="National University of Sciences & Technology (NUST), Islamabad" />
        <option value="LUMS (Lahore University of Management Sciences)" />
        <option value="University of the Punjab (PU), Lahore" />
        <option value="University of Engineering & Technology (UET), Lahore" />
        <option value="University of Engineering & Technology (UET), Peshawar" />
        <option value="University of Karachi (UOK)" />
        <option value="Bahauddin Zakariya University (BZU), Multan" />
        <option value="COMSATS University Islamabad (CUI)" />
        <option value="Government College University (GCU), Lahore" />
        <option value="Government College University (GCU), Faisalabad" />
        <option value="FAST-NUCES (National University of Computer and Emerging Sciences)" />
        <option value="Aga Khan University (AKU), Karachi" />
        <option value="University of Agriculture, Faisalabad (UAF)" />
        <option value="Air University, Islamabad" />
        <option value="Bahria University, Islamabad" />
        <option value="Institute of Business Administration (IBA), Karachi" />
        <option value="Islamia University, Bahawalpur (IUB)" />
        <option value="University of Veterinary and Animal Sciences (UVAS), Lahore" />
        <option value="King Edward Medical University (KEMU), Lahore" />
        <option value="University of Health Sciences (UHS), Lahore" />
        <option value="Fatima Jinnah Medical University (FJMU), Lahore" />
        <option value="Virtual University of Pakistan (VU)" />
        <option value="Allama Iqbal Open University (AIOU)" />
        <option value="International Islamic University, Islamabad (IIUI)" />
        <option value="SZABIST (Shaheed Zulfikar Ali Bhutto Institute of Science and Technology)" />
        <option value="GIKI (Ghulam Ishaq Khan Institute of Engineering Sciences and Technology)" />
        <option value="University of Management and Technology (UMT), Lahore" />
        <option value="University of Central Punjab (UCP), Lahore" />
        <option value="Superior University, Lahore" />
        <option value="University of Lahore (UOL)" />
        <option value="University of Gujrat (UOG)" />
        <option value="University of Sargodha (UOS)" />
        <option value="Lahore College for Women University (LCWU)" />
        <option value="National Textile University (NTU), Faisalabad" />
        <option value="University of Balochistan, Quetta" />
        <option value="University of Malakand (UOM)" />
        <option value="Peshawar University" />
        <option value="Gomal University, D.I. Khan" />
        <option value="Sindh University, Jamshoro" />
        <option value="Mehran University of Engineering & Technology (MUET), Jamshoro" />
        <option value="NED University of Engineering & Technology, Karachi" />
        <option value="Dow University of Health Sciences (DUHS), Karachi" />
      </datalist>
    </div>
  )
}
