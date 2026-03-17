"use server"

import { supabase } from "@/lib/supabase"
import cloudinary from "@/lib/cloudinary"
import { revalidatePath } from "next/cache"

export async function postJob(formData: FormData) {
  try {
    const title = formData.get("title") as string
    const company = formData.get("company") as string
    const category = formData.get("category") as string
    const type = formData.get("type") as string
    const salary = formData.get("salary") as string
    const province = formData.get("province") as string
    const city = formData.get("city") as string
    const deadline = formData.get("deadline") as string
    const description = formData.get("description") as string
    const requirements = formData.get("requirements") as string
    const application_link = formData.get("application_link") as string
    const website_url = formData.get("website_url") as string
    const image_url = formData.get("image_url") as string
    const scale = formData.get("scale") as string
    
    // Handle Logo Upload to Cloudinary
    const logoFile = formData.get("logo_url") as File | null
    let logo_url = ""

    if (logoFile && logoFile.size > 0) {
      const arrayBuffer = await logoFile.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      
      const uploadResponse = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: "rozgarhub/logos" },
          (error, result) => {
            if (error) reject(error)
            else resolve(result)
          }
        ).end(buffer)
      }) as any
      
      logo_url = uploadResponse.secure_url
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from("posting")
      .insert([
        {
          title,
          company,
          category,
          type,
          salary,
          province,
          city,
          deadline,
          description,
          requirements,
          application_link,
          direct_website_url: website_url,
          image_url_link: image_url,
          logo_url,
          scale,
          status: "published",
          created_at: new Date().toISOString(),
        }
      ])
      .select()

    if (error) {
      console.error("Supabase Error:", error)
      return { success: false, error: error.message }
    }

    revalidatePath("/admin/jobs")
    revalidatePath("/jobs")
    
    return { success: true, data }
  } catch (err: any) {
    console.error("Action Error:", err)
    return { success: false, error: err.message || "Something went wrong" }
  }
}

export async function getPublishedJobs() {
  try {
    const { data, error } = await supabase
      .from("posting")
      .select("*")
      .eq("status", "published")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Fetch Published Jobs Error:", error)
      return { success: false, data: [] }
    }

    return { success: true, data: data || [] }
  } catch (err: any) {
    console.error("Error fetching jobs:", err)
    return { success: false, data: [] }
  }
}
