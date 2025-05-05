"use client";

// Components
import Link from "next/link";

// Hooks
import { useCart } from "@/context/CartContext";

// Icons
import { ShoppingCart } from "lucide-react";
import { Menu } from "lucide-react";

const BottomNavbar = () => {
  const { cart } = useCart();
  return (
    <nav className="bg-neutral-200 h-[55px] nav fixed bottom-0 left-0 w-full z-50 text-black flex items-center justify-center space-x-28 ">
      <Link className="" href={"cart"}>
        <ShoppingCart className="text-primary" size={28} />
      </Link>

      <Link className="" href={"/products"}>
        <Menu size={28} />
      </Link>
    </nav>
  );
};

export default BottomNavbar;
