"use server"

import { supabase } from "@/lib/supabase"

export async function getAdminMetrics() {
  try {
    // Get Jobs Metrics
    const now = new Date().toISOString()
    const { data: allJobs, error: jobsError } = await supabase
      .from("posting")
      .select("deadline")

    const totalJobs = allJobs?.length || 0
    const liveJobs = allJobs?.filter(j => !j.deadline || new Date(j.deadline) >= new Date()).length || 0
    const expiredJobs = totalJobs - liveJobs

    // Get Users Count
    const { count: usersCount, error: usersError } = await supabase
      .from("users")
      .select("*", { count: "exact", head: true })

    // Get CVs Count
    let cvsCount = 0
    const { count: cCount, error: cvError } = await supabase
      .from("cv_data")
      .select("*", { count: "exact", head: true })
    
    if (!cvError) cvsCount = cCount || 0

    // Get Recent Jobs
    const { data: recentJobs } = await supabase
      .from("posting")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5)

    return {
      jobs: liveJobs,
      expiredJobs: expiredJobs,
      totalJobs: totalJobs,
      users: usersCount || 0,
      cvs: cvsCount,
      recentJobs: recentJobs || [],
      success: true
    }
  } catch (error) {
    console.error("Metrics Fetch Error:", error)
    return { jobs: 0, users: 0, cvs: 0, success: false }
  }
}
export async function getAdminJobs() {
  try {
    const { data, error } = await supabase
      .from("posting")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) throw error
    return { success: true, data }
  } catch (error: any) {
    console.error("Fetch Jobs Error:", error)
    return { success: false, data: [] }
  }
}

export async function deleteJob(id: string) {
  try {
    const { error } = await supabase
      .from("posting")
      .delete()
      .eq("id", id)

    if (error) throw error
    
    // Revalidate paths
    import("next/cache").then(m => {
      m.revalidatePath("/admin/jobs")
      m.revalidatePath("/jobs")
    })

    return { success: true }
  } catch (error: any) {
    console.error("Delete Job Error:", error)
    return { success: false, error: error.message }
  }
}

export async function getJobById(id: string) {
  try {
    const { data, error } = await supabase
      .from("posting")
      .select("*")
      .eq("id", id)
      .single()

    if (error) throw error
    return { success: true, data }
  } catch (error: any) {
    console.error("Get Job Error:", error)
    return { success: false, error: error.message }
  }
}

export async function updateJob(id: string, formData: FormData) {
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
    
    // Handle Logo Update if new one provided
    const logoFile = formData.get("logo_url") as File | null
    let updateData: any = {
      title, company, category, type, salary, province, city, deadline, 
      description, requirements, application_link, 
      direct_website_url: website_url, image_url_link: image_url, scale,
      updated_at: new Date().toISOString()
    }

    if (logoFile && logoFile.size > 0) {
      const arrayBuffer = await logoFile.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      
      const cloudinary = (await import("@/lib/cloudinary")).default
      const uploadResponse = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: "rozgarhub/logos" },
          (error, result) => {
            if (error) reject(error)
            else resolve(result)
          }
        ).end(buffer)
      }) as any
      
      updateData.logo_url = uploadResponse.secure_url
    }

    const { error } = await supabase
      .from("posting")
      .update(updateData)
      .eq("id", id)

    if (error) throw error

    // Revalidate paths
    import("next/cache").then(m => {
      m.revalidatePath("/admin/jobs")
      m.revalidatePath("/jobs")
      m.revalidatePath(`/jobs/${id}`)
    })
    
    return { success: true }
  } catch (err: any) {
    console.error("Update Job Error:", err)
    return { success: false, error: err.message }
  }
}

export async function getUsers() {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) throw error
    return { success: true, data }
  } catch (error: any) {
    console.error("Fetch Users Error:", error)
    return { success: false, data: [] }
  }
}

export async function registerAdmin(formData: FormData) {
  try {
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const fullName = formData.get("fullName") as string
    const role = formData.get("role") as string || "Admin"

    // For now, since we're using a simple cookie-based auth for admins, 
    // we'll just store them in a 'users' table with a role flag. 
    // In production, this would use Supabase Auth and proper RBAC.
    const { error } = await supabase
      .from("users")
      .insert([
        { 
          email, 
          full_name: fullName, 
          role: role,
          is_admin: true,
          created_at: new Date().toISOString()
        }
      ])

    if (error) throw error
    return { success: true }
  } catch (err: any) {
    console.error("Register Admin Error:", err)
    return { success: false, error: err.message }
  }
}
