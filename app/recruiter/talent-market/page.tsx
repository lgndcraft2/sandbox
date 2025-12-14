import {RecruiterHeader} from "../../components/recruiter/RecruiterHeader";

export default function page(){
  return (
    <div className="min-h-screen bg-background">
      <RecruiterHeader title="Talent Market" />
      <div className="p-4 lg:p-6">
        <div className="bg-card border border-border rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold text-foreground mb-2">talent Market</h2>
          <p className="text-muted-foreground">Talent market page coming soon.</p>
        </div>
      </div>
    </div>
  );
};
