import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/page-header";

const Accessibility = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <PageHeader 
          title="Accessibility" 
          description="Manage accessibility settings and features." 
        />
        <div className="p-8 border-2 border-dashed rounded-xl flex items-center justify-center text-muted-foreground">
          Accessibility Content Coming Soon
        </div>
      </div>
    </PageLayout>
  );
};

export default Accessibility;
