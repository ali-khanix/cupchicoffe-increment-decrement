"use client";

import TopNavbar from "@/components/TopNavbar";
import BottomNavbar from "@/components/BottomNavbar";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="px-4">
      <TopNavbar />
      <div className="mt-[140px] h-[100vh]">
        <h1 className="text-2xl font-semibold mb-4">سبد خرید شما</h1>
        {cart.length === 0 ? (
          <p>سبد شما خالی است</p>
        ) : (
          <div className="">
            <ul className="space-y-2">
              {cart.map((item, idx) => (
                <li key={idx} className="border py-2 rounded">
                  {item.name} - {item.price.toLocaleString()}
                </li>
              ))}
            </ul>
            <div>
              <p className="mt-4 font-bold flex justify-between items-center">
                <span>جمع سبد خرید:</span>
                <span>{total.toLocaleString()} تومان</span>
              </p>
            </div>
          </div>
        )}
      </div>

      <BottomNavbar />
    </div>
  );
}
