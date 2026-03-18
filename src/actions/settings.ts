"use server"

import { supabase } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function getSiteSettings() {
  try {
    const { data, error } = await supabase
      .from("site_settings")
      .select("*")
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        // Table or row doesn't exist, return defaults
        return {
          success: true,
          data: {
            site_name: "Rozgarhub",
            support_email: "support@rozgarhub.pk",
            contact_number: "+92 308 8636811",
            meta_description: "Find your dream job in Pakistan. Build your CV, apply to jobs, and get hired. The ultimate hub for career growth.",
            twitter_handle: "@rozgarhub_pk"
          }
        }
      }
      throw error
    }

    return { success: true, data }
  } catch (error: unknown) {
    console.error("Fetch Settings Error:", error)
    return { 
      success: false, 
      error: "Failed to load settings",
      data: {
        site_name: "Rozgarhub",
        support_email: "support@rozgarhub.pk",
        contact_number: "+92 308 8636811",
        meta_description: "Find your dream job in Pakistan. Build your CV, apply to jobs, and get hired. The ultimate hub for career growth.",
        twitter_handle: "@rozgarhub_pk"
      }
    }
  }
}

export async function updateSiteSettings(formData: FormData) {
  try {
    const site_name = formData.get("site_name") as string
    const support_email = formData.get("support_email") as string
    const contact_number = formData.get("contact_number") as string
    const meta_description = formData.get("meta_description") as string
    const twitter_handle = formData.get("twitter_handle") as string

    const updateData = {
      site_name,
      support_email,
      contact_number,
      meta_description,
      twitter_handle,
      updated_at: new Date().toISOString()
    }

    // Upsert logic - assuming id 1 for global settings
    const { error } = await supabase
      .from("site_settings")
      .upsert({ id: 1, ...updateData })

    if (error) throw error

    revalidatePath("/")
    revalidatePath("/admin/settings")
    
    return { success: true }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to update settings"
    console.error("Update Settings Error:", error)
    return { success: false, error: message }
  }
}
