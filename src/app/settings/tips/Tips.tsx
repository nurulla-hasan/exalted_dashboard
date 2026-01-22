import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/page-header";

const Tips = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <PageHeader 
          title="Tips & Tricks" 
          description="Manage educational content and tips for users." 
        />
        <div className="p-8 border-2 border-dashed rounded-xl flex items-center justify-center text-muted-foreground">
          Tips & Tricks Content Coming Soon
        </div>
      </div>
    </PageLayout>
  );
};

export default Tips;
