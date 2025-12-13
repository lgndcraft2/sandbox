import { StudentHeader } from "../../components//students/StudentHeader";

export const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      <StudentHeader title="Bounty Hunter" />
      <div className="p-4 lg:p-6">
        <div className="bg-card border border-border rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold text-foreground mb-2">Headquarters</h2>
          <p className="text-muted-foreground">Explore your main Dashboard</p>
        </div>
      </div>
    </div>
  );
};
