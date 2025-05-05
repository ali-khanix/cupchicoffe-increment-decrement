"use client";

import products from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCart from "@/components/ProductCart";

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <div className="mt-[140px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCart
            key={product.id}
            product={product}
            onAdd={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}
