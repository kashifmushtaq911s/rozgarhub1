import { z } from "zod"

export const cvSchema = z.object({
  personalInfo: z.object({
    fullName: z.string().min(2, "Name is required"),
    jobTitle: z.string().optional(),
    email: z.string().email("Invalid email"),
    phone: z.string().min(5, "Phone is required"),
    location: z.string().optional(),
    summary: z.string().optional(),
    photo: z.string().optional(),
  }),
  experience: z.array(z.object({
    id: z.string(),
    jobTitle: z.string().min(2, "Job title is required"),
    company: z.string().min(2, "Company is required"),
    startDate: z.string(), 
    endDate: z.string(),
    description: z.string(),
  })),
  education: z.array(z.object({
    id: z.string(),
    degree: z.string().min(2, "Degree is required"),
    institution: z.string().min(2, "Institution is required"),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    cgpa: z.string().optional(),
    totalMarks: z.string().optional(),
    obtainedMarks: z.string().optional(),
    grade: z.string().optional(),
  })),
  skills: z.array(z.object({
    id: z.string(),
    name: z.string().min(1, "Skill name cannot be empty")
  })),
  languages: z.array(z.object({
    id: z.string(),
    name: z.string().min(1, "Language cannot be empty"),
    level: z.string().optional()
  })),
  interests: z.array(z.object({
    id: z.string(),
    name: z.string().min(1, "Interest cannot be empty")
  })),
  courses: z.array(z.object({
    id: z.string(),
    name: z.string().min(1, "Course name cannot be empty"),
    institution: z.string().optional(),
    date: z.string().optional()
  })),
  links: z.array(z.object({
    id: z.string(),
    name: z.string().min(1, "Link name required (e.g. LinkedIn, GitHub)"),
    url: z.string().url("Must be a valid URL")
  })),
  references: z.array(z.object({
    id: z.string(),
    name: z.string().min(1, "Reference name is required"),
    designation: z.string().optional(),
    company: z.string().optional(),
    contact: z.string().optional()
  })),
  additionalInfo: z.string().optional()
})

export type CVData = z.infer<typeof cvSchema>

export const defaultCVData: CVData = {
  personalInfo: {
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    photo: "",
  },
  experience: [],
  education: [],
  skills: [],
  languages: [],
  interests: [],
  courses: [],
  links: [],
  references: [],
  additionalInfo: ""
}
