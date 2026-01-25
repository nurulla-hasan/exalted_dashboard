"use client";

import { useState } from "react";
import { Eye, Package, User, Calendar, DollarSign, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Order } from "./order-columns";

interface OrderViewModalProps {
  order: Order;
}

export function OrderViewModal({ order }: OrderViewModalProps) {
  const [open, setOpen] = useState(false);

  const getStatusVariant = (status: Order["status"]) => {
    switch (status) {
      case "Payment Success":
        return "success";
      case "Pending":
        return "warning";
      case "Shipped":
        return "info";
      case "Delivered":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <ModalWrapper
      open={open}
      onOpenChange={setOpen}
      title={`Order Details - ${order.orderId}`}
      description="View complete information about this auction order."
      showClose={true}
      actionTrigger={
        <Button
          variant="outline"
          size="icon-sm"
          className="text-primary border-primary hover:bg-primary/10 hover:text-primary"
        >
          <Eye className="h-4 w-4" />
        </Button>
      }
    >
      <div className="p-6 space-y-6">
        {/* Status Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-muted-foreground" />
            <span className="font-semibold text-lg">Order Status</span>
          </div>
          <Badge variant={getStatusVariant(order.status)}>
            {order.status}
          </Badge>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Winner Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <User className="h-4 w-4" />
              <span className="text-sm font-medium uppercase tracking-wider">Winner Info</span>
            </div>
            <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-xl border border-border/50">
              <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                <AvatarImage src={order.winner.avatar} alt={order.winner.name} />
                <AvatarFallback>{order.winner.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-foreground">{order.winner.name}</p>
                <p className="text-xs text-muted-foreground">Auction Winner</p>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Tag className="h-4 w-4" />
              <span className="text-sm font-medium uppercase tracking-wider">Product Info</span>
            </div>
            <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-xl border border-border/50">
              <img
                src={order.product.image}
                alt={order.product.name}
                className="h-12 w-12 rounded-lg object-cover border border-border/50 shadow-sm"
              />
              <div>
                <p className="font-bold text-foreground line-clamp-1">{order.product.name}</p>
                <p className="text-xs text-muted-foreground">Winning Item</p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Pricing and Delivery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-primary/70 font-medium uppercase">Winning Price</p>
                <p className="text-lg font-black text-primary">${order.winningPrice.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/50 p-4 rounded-xl border border-secondary flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-secondary p-2 rounded-lg">
                <Calendar className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-xs text-secondary-foreground/70 font-medium uppercase">Expected Delivery</p>
                <p className="text-lg font-black text-secondary-foreground">{order.expectedDelivery}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
