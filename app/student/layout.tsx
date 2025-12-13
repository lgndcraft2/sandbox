import { StudentSidebar } from "../components/students/StudentSidebar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex w-full">
      <StudentSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
