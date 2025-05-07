"use client";

import TopNavbar from "@/components/TopNavbar";
import BottomNavbar from "@/components/BottomNavbar";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <TopNavbar />
      <div className="mt-[140px]">
        <h1 className="text-2xl font-semibold mb-4">سبد خرید شما</h1>
        {cart.length === 0 ? (
          <p>سبد شما خالی است</p>
        ) : (
          <>
            <ul className="space-y-2">
              {cart.map((item, idx) => (
                <li key={idx} className="border p-2 rounded">
                  {item.name} - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-bold">Total: ${total.toFixed(2)}</p>
          </>
        )}
      </div>

      <BottomNavbar />
    </div>
  );
}
