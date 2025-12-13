import { StudentHeader } from "@/app/components/students/StudentHeader";
export default function Page() {
  return (
    <div className="min-h-screen bg-background">
        <StudentHeader title="Earn Money " />
        <div className="p-4 lg:p-6">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold text-foreground mb-2">Earn Money</h2>  
            <p className="text-muted-foreground">Discover opportunities to earn while you learn.</p>
          </div>
        </div>
    </div>
  );
}