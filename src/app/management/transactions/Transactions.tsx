import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/page-header";

const Transactions = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <PageHeader 
          title="Transactions" 
          description="View and manage all financial transactions and history." 
        />
        <div className="p-8 border-2 border-dashed rounded-xl flex items-center justify-center text-muted-foreground">
          Transactions Content Coming Soon
        </div>
      </div>
    </PageLayout>
  );
};

export default Transactions;
