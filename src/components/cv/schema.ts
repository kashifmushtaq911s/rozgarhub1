import { z } from "zod"

export const cvSchema = z.object({
  personalInfo: z.object({
    fullName: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(5, "Phone is required"),
    location: z.string().optional(),
    summary: z.string().optional(),
  }),
  experience: z.array(z.object({
    id: z.string(),
    jobTitle: z.string().min(2, "Job title is required"),
    company: z.string().min(2, "Company is required"),
    startDate: z.string(), // We will use YYYY-MM-DD from the data picker string
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
})

export type CVData = z.infer<typeof cvSchema>

export const defaultCVData: CVData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
  },
  experience: [],
  education: [],
  skills: [],
}
