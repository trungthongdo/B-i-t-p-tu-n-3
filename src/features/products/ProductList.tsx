import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addItem } from "../cart/cartSlice";
import type { Product } from "../../types";

function ProductList() {
  const dispatch = useAppDispatch();

  const { items, status, error } = useAppSelector((state) => state.products);

  if (status === "loading" || status === "idle") {
    return <p className="status-message">Đang tải danh sách sản phẩm...</p>;
  }

  if (status === "failed") {
    return <p className="status-message status-message--error">Lỗi: {error}</p>;
  }

  return (
    <section className="panel">
      <h2>Sản phẩm</h2>
      <div className="product-grid">
        {items.map((product: Product) => (
          <article key={product.id} className="product-card">
            <div className="product-card__image">{product.image}</div>
            <div className="product-card__body">
              <span className="product-card__category">{product.category}</span>
              <h3>{product.name}</h3>
              <strong className="product-card__price">
                {product.price.toLocaleString("vi-VN")}đ
              </strong>
            </div>
            <button onClick={() => dispatch(addItem(product))}>Thêm vào giỏ</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
