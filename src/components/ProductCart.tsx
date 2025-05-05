import { Product } from "@/context/CartContext";

type Props = {
  product: Product;
  onAdd: () => void;
};

const ProductCart = ({ product, onAdd }: Props) => (
  <div className="border p-4 rounded shadow-sm">
    <h2 className="text-lg font-bold">{product.name}</h2>
    <p>Type: {product.type}</p>
    <p>Price: {product.price.toFixed(2)}</p>

    <button
      onClick={onAdd}
      className="mt-2 bg-gray-700 text-white px-4 py-1 rounded"
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCart;
