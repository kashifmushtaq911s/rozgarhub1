"use client"

import React, { useState, useEffect } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cvSchema, CVData, defaultCVData } from "./schema"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Trash2, Save } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import dynamic from "next/dynamic"

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
    <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-140px)] min-h-[800px]">
      {/* Scrollable Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col h-full bg-[var(--color-background)] rounded-2xl border border-[var(--color-border)] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[var(--color-primary)]/10 flex justify-between items-center bg-[#f8faff]">
          <h2 className="font-extrabold text-2xl text-[var(--color-primary)]">Editor</h2>
          <Button variant="outline" size="sm" onClick={handleSaveDraft} className="gap-2 border-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 rounded-xl px-6">
            <Save size={16} /> Save Draft
          </Button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1">
          <Accordion type="single" collapsible defaultValue="personal-info" className="w-full space-y-4">
            {/* Personal Info */}
            <AccordionItem value="personal-info" className="border-[var(--color-border)] bg-[var(--color-background)] rounded-xl px-4 data-[state=open]:shadow-sm">
              <AccordionTrigger className="hover:no-underline text-lg font-semibold text-[var(--color-primary)]">
                Personal Information
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block text-[var(--color-muted-foreground)]">Full Name</label>
                    <Input {...form.register("personalInfo.fullName")} placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block text-[var(--color-muted-foreground)]">Email</label>
                    <Input {...form.register("personalInfo.email")} type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block text-[var(--color-muted-foreground)]">Phone</label>
                    <Input {...form.register("personalInfo.phone")} placeholder="+92 300 0000000" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block text-[var(--color-muted-foreground)]">Location</label>
                    <Input {...form.register("personalInfo.location")} placeholder="City, Pakistan" />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label className="text-sm font-medium mb-1 block text-[var(--color-muted-foreground)]">Summary</label>
                    <textarea 
                      {...form.register("personalInfo.summary")} 
                      className="w-full min-h-[100px] rounded-xl border border-[var(--color-border)] bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
                      placeholder="A brief summary of your background..."
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Experience */}
            <AccordionItem value="experience" className="border-[var(--color-border)] bg-[var(--color-background)] rounded-xl px-4 data-[state=open]:shadow-sm">
              <AccordionTrigger className="hover:no-underline text-lg font-semibold text-[var(--color-primary)]">
                Work Experience
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="space-y-4 mb-4">
                  {expFields.map((field, index) => (
                    <Card key={field.id} className="relative rounded-xl border-[var(--color-border)]">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removeExp(index)}
                      >
                        <Trash2 size={16} />
                      </Button>
                      <CardContent className="p-4 pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1 block">Job Title</label>
                          <Input {...form.register(`experience.${index}.jobTitle`)} placeholder="Software Engineer" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Company</label>
                          <Input {...form.register(`experience.${index}.company`)} placeholder="Tech Corp" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Start Date</label>
                          <Input type="date" {...form.register(`experience.${index}.startDate`)} />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">End Date</label>
                          <Input type="date" {...form.register(`experience.${index}.endDate`)} />
                        </div>
                        <div className="col-span-1 md:col-span-2">
                          <label className="text-sm font-medium mb-1 block">Description</label>
                          <textarea 
                            {...form.register(`experience.${index}.description`)} 
                            className="w-full rounded-xl border border-[var(--color-border)] bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
                            rows={3}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {expFields.length === 0 && <p className="text-sm text-[var(--color-muted-foreground)]">No experience added yet.</p>}
                </div>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full border-dashed"
                  onClick={() => appendExp({ id: Date.now().toString(), jobTitle: "", company: "", startDate: "", endDate: "", description: "" })}
                >
                  <Plus size={16} className="mr-2" /> Add Experience
                </Button>
              </AccordionContent>
            </AccordionItem>

            {/* Education */}
            <AccordionItem value="education" className="border-[var(--color-border)] bg-[var(--color-background)] rounded-xl px-4 data-[state=open]:shadow-sm">
              <AccordionTrigger className="hover:no-underline text-lg font-semibold text-[var(--color-primary)]">
                Education
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="space-y-4 mb-4">
                  {eduFields.map((field, index) => (
                    <Card key={field.id} className="relative rounded-xl border-[var(--color-border)]">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removeEdu(index)}
                      >
                        <Trash2 size={16} />
                      </Button>
                      <CardContent className="p-4 pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1 block">Degree/Certificate</label>
                          <Input {...form.register(`education.${index}.degree`)} placeholder="BS Computer Science" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Institution</label>
                          <Input {...form.register(`education.${index}.institution`)} placeholder="University Name" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Start Date</label>
                          <Input type="date" {...form.register(`education.${index}.startDate`)} />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">End Date</label>
                          <Input type="date" {...form.register(`education.${index}.endDate`)} />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">CGPA</label>
                          <Input {...form.register(`education.${index}.cgpa`)} placeholder="e.g. 3.8/4.0" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Grade</label>
                          <Input {...form.register(`education.${index}.grade`)} placeholder="e.g. A+" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Total Marks</label>
                          <Input {...form.register(`education.${index}.totalMarks`)} type="number" placeholder="1100" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Obtained Marks</label>
                          <Input {...form.register(`education.${index}.obtainedMarks`)} type="number" placeholder="950" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {eduFields.length === 0 && <p className="text-sm text-[var(--color-muted-foreground)]">No education added yet.</p>}
                </div>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full border-dashed"
                  onClick={() => appendEdu({ id: Date.now().toString(), degree: "", institution: "", startDate: "", endDate: "", cgpa: "", grade: "", totalMarks: "", obtainedMarks: "" })}
                >
                  <Plus size={16} className="mr-2" /> Add Education
                </Button>
              </AccordionContent>
            </AccordionItem>

            {/* Skills */}
            <AccordionItem value="skills" className="border-[var(--color-border)] bg-[var(--color-background)] rounded-xl px-4 data-[state=open]:shadow-sm">
              <AccordionTrigger className="hover:no-underline text-lg font-semibold text-[var(--color-primary)]">
                Skills
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="space-y-3 mb-4">
                  {skillFields.map((field, index) => (
                    <div key={field.id} className="flex items-center gap-2">
                      <Input 
                        {...form.register(`skills.${index}.name`)} 
                        placeholder="e.g. React.js" 
                        className="flex-1"
                      />
                      <Button 
                        type="button"
                        variant="ghost" 
                        size="icon" 
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 shrink-0"
                        onClick={() => removeSkill(index)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  ))}
                  {skillFields.length === 0 && <p className="text-sm text-[var(--color-muted-foreground)]">No skills added yet.</p>}
                </div>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full border-dashed"
                  onClick={() => appendSkill({ id: Date.now().toString(), name: "" })}
                >
                  <Plus size={16} className="mr-2" /> Add Skill
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Preview Section */}
      <div className="w-full lg:w-1/2 flex flex-col h-full bg-white rounded-2xl border border-[#dadce0] shadow-xl overflow-hidden">
        <div className="p-4 border-b border-[var(--color-primary)]/10 flex justify-between items-center bg-[#f8faff]">
          <h2 className="font-extrabold text-2xl text-[var(--color-primary)]">Live Preview</h2>
          <CVDownloadButton data={formData} />
        </div>
        <div className="flex-1 bg-[#f8f9fa] p-6 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
            <span className="text-[12rem] font-black rotate-[-45deg] text-[var(--color-primary)]">ROZGARHUB</span>
          </div>
          <CVPreview data={formData} />
        </div>
      </div>
    </div>
  )
}
