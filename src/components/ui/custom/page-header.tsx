"use client";
import { Badge } from "@/components/ui/badge";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../button";

const PageHeader = ({
  title,
  description,
  length,
  showBack,
}: {
  title: string;
  description?: string;
  length?: number;
  showBack?: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <div className="grid gap-1">
      <div className="flex items-center gap-2">
        {showBack && (
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <MoveLeft />
          </Button>
        )}
        <h1 className="text-xl font-bold">{title}</h1>
        {length && <Badge className="rounded-full">{length}</Badge>}
      </div>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  );
};

export default PageHeader;
