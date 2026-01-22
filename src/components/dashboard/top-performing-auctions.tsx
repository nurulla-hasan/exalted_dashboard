import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  { id: 1, title: "iPhone 13 Pro", bid: "$1248" },
  { id: 2, title: "Rolex M2 Watch", bid: "$1058" },
];

const TopPerformingAuctions = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium font-crimson">Top-Performing Auctions</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="grid grid-cols-12 text-xs text-muted-foreground mb-2">
          <div className="col-span-2">SL no.</div>
          <div className="col-span-7">Auction Item</div>
          <div className="col-span-3 text-right">Winning Bid</div>
        </div>
        <div className="space-y-3">
          {items.map((it, idx) => (
            <div key={it.id} className="grid grid-cols-12 items-center">
              <div className="col-span-2 text-sm">{String(idx + 1).padStart(2, "0")}</div>
              <div className="col-span-7 text-sm text-foreground">{it.title}</div>
              <div className="col-span-3 text-right text-sm">{it.bid}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopPerformingAuctions;
