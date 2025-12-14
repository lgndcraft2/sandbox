import {AdminHeader} from "../../components/admin/AdminHeader";

export default function page(){
  return (
    <div className="min-h-screen bg-background">
      <AdminHeader title="Admin Dashboard" subtitle="System-wide performance monitoring."/>
      <div className="p-4 lg:p-6">
        <div className="bg-card border border-border rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold text-foreground mb-2">Dashboard</h2>
          <p className="text-muted-foreground">Dashboard in progress....</p>
        </div>
      </div>
    </div>
  );
};
