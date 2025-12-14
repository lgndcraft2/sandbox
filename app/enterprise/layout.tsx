import EnterpriseSidebar from "../components/enterprise/EnterpriseSidebar";

export default function page({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex w-full">
      <EnterpriseSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
