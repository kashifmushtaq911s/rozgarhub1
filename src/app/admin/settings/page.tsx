import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AdminSettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Site Settings</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="rounded-2xl border-[var(--color-border)] shadow-sm">
          <CardHeader>
            <CardTitle>General Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Site Name</label>
              <Input defaultValue="Rozgarhub" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Support Email</label>
              <Input defaultValue="support@rozgarhub.pk" />
            </div>
            <div>
               <label className="text-sm font-medium mb-1 block">Contact Phone</label>
               <Input defaultValue="+92 300 1234567" />
            </div>
            <Button className="mt-4">Save Changes</Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-[var(--color-border)] shadow-sm">
          <CardHeader>
            <CardTitle>SEO & Social Media</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Meta Description</label>
              <textarea 
                className="w-full min-h-[100px] rounded-xl border border-[var(--color-border)] bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
                defaultValue="Find your dream job in Pakistan. Build your CV, apply to jobs, and get hired."
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Twitter Handle</label>
              <Input defaultValue="@rozgarhub_pk" />
            </div>
            <Button className="mt-4">Save SEO Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
