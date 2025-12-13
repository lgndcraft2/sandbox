import { StudentHeader } from "../../components/students/StudentHeader";
export default function Page() {
  return (
    <div className="min-h-screen bg-background">
        <StudentHeader title="Headquarters" />
        <div className="p-4 lg:p-6">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold text-foreground mb-2">Welcome to the Student Headquarters</h2>
            <p className="text-muted-foreground">Manage your courses, track progress, and access resources.</p>
          </div>
        </div>
    </div>
  );
}