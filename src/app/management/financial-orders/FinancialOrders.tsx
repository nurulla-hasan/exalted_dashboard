import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";

const FinancialOrders = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <PageHeader 
          title="Financial Orders" 
          description="Monitor and process financial orders and payouts." 
        />
        <div className="p-8 border-2 border-dashed rounded-xl flex items-center justify-center text-muted-foreground">
          Financial Orders Content Coming Soon
        </div>
      </div>
    </PageLayout>
  );
};

export default FinancialOrders;
