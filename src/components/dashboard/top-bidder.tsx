import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const bidders = [
  { id: 1, name: "Kathryn Murp", totalWin: 84, avatar: "/avatars/1.png" },
  { id: 2, name: "Devon Lane", totalWin: 67, avatar: "/avatars/2.png" },
  { id: 3, name: "Hari Danang", totalWin: 52, avatar: "/avatars/3.png" },
];

const TopBidder = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium font-crimson">Top Bidder</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="grid grid-cols-12 text-xs text-muted-foreground mb-2">
          <div className="col-span-2">SL no.</div>
          <div className="col-span-7">Bidder</div>
          <div className="col-span-3 text-right">Total Win</div>
        </div>
        <div className="space-y-3">
          {bidders.map((b, idx) => (
            <div key={b.id} className="grid grid-cols-12 items-center">
              <div className="col-span-2 text-sm">{String(idx + 1).padStart(2, "0")}</div>
              <div className="col-span-7 flex items-center gap-3">
                <Avatar className="h-7 w-7">
                  <AvatarImage src={b.avatar} alt={b.name} />
                  <AvatarFallback>{b.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-foreground">{b.name}</span>
              </div>
              <div className="col-span-3 text-right text-sm">{b.totalWin}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopBidder;
