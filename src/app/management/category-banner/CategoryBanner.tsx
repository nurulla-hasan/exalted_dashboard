import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/page-header";

const CategoryBanner = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <PageHeader 
          title="Category & Banner" 
          description="Manage application categories and promotional banners." 
        />
        <div className="p-8 border-2 border-dashed rounded-xl flex items-center justify-center text-muted-foreground">
          Category & Banner Content Coming Soon
        </div>
      </div>
    </PageLayout>
  );
};

export default CategoryBanner;
