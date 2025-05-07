import { MenuItem } from "@/types/product-types";

interface ProductCartProps {
  product: MenuItem;
  onAdd: () => void;
}

const ProductCart = ({ product, onAdd }: ProductCartProps) => (
  <div className="border p-4 rounded shadow-sm">
    <h2 className="text-lg font-bold">{product.name}</h2>
    <p>توضیحات: {product.description}</p>
    <p>قیمت: {product.price.toLocaleString()}</p>

    <button
      onClick={onAdd}
      className="mt-2 bg-gray-700 text-white px-4 py-1 rounded"
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCart;
