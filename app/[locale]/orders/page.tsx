import { Badge } from "@/components/ui/badge";

const orders = [
  { id: "HOZ-1007", status: "Out for delivery", total: "42.500 KWD", date: "May 25, 2026" },
  { id: "HOZ-1004", status: "Delivered", total: "18.500 KWD", date: "May 18, 2026" }
];

export default function OrdersPage() {
  return (
    <div className="container-lux py-12">
      <h1 className="font-serif text-5xl font-semibold">Orders</h1>
      <div className="mt-8 grid gap-4">
        {orders.map((order) => (
          <div key={order.id} className="flex flex-col gap-3 rounded-xl border bg-white/65 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-medium">{order.id}</p>
              <p className="text-sm text-muted-foreground">{order.date}</p>
            </div>
            <Badge>{order.status}</Badge>
            <p className="font-semibold">{order.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
