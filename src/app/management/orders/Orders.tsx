import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/page-header";

const OrderManagement = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <PageHeader 
          title="Order Management" 
          description="Track and manage customer orders and shipments." 
        />
        <div className="p-8 border-2 border-dashed rounded-xl flex items-center justify-center text-muted-foreground">
          Order Management Content Coming Soon
        </div>
      </div>
    </PageLayout>
  );
};

export default OrderManagement;
