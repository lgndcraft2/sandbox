import RecuiterSidebar from "../components/recruiter/RecruiterSidebar";

export default function page({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex w-full">
      <RecuiterSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
