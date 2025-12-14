import {EnterpriseHeader} from "../../components/enterprise/EnterpriseHeader";

export default function page(){
  return (
    <div className="min-h-screen bg-background">
      <EnterpriseHeader title="Settings" subtitle="Adjust settings to your taste"/>
      <div className="p-4 lg:p-6">
        <div className="bg-card border border-border rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold text-foreground mb-2">Settings</h2>
          <p className="text-muted-foreground">Settings is in progress.......</p>
        </div>
      </div>
    </div>
  );
};