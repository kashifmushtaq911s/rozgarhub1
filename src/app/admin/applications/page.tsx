import { Card, CardContent } from "@/components/ui/card"
import { FileText } from "lucide-react"

export default function AdminApplicationsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Applications</h1>
      <Card className="rounded-2xl border-[var(--color-border)] shadow-sm">
        <CardContent className="p-16 flex flex-col items-center justify-center text-center">
           <div className="bg-[var(--color-secondary)] p-4 rounded-full mb-4">
             <FileText size={48} className="text-[var(--color-muted-foreground)]" />
           </div>
           <h2 className="text-xl font-semibold">Application Management</h2>
           <p className="text-[var(--color-muted-foreground)] max-w-md mt-2">
             Here you can review all applications submitted by candidates across all job postings. 
             (Pending Data Integration)
           </p>
        </CardContent>
      </Card>
    </div>
  )
}
