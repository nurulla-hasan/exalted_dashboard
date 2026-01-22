import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/page-header";

const AuctionManagement = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <PageHeader 
          title="Auction Management" 
          description="Manage all your active and scheduled auctions from here." 
        />
        <div className="p-8 border-2 border-dashed rounded-xl flex items-center justify-center text-muted-foreground">
          Auction Management Content Coming Soon
        </div>
      </div>
    </PageLayout>
  );
};

export default AuctionManagement;
