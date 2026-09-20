import { useGetProductsQuery } from "./productsApi";
import { useAppDispatch } from "../../app/hooks";
import { addItem } from "../cart/cartSlice";
function ProductListRTKQuery() {
  const dispatch = useAppDispatch();
  const { data: products, isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) {
    return <p className="status-message">Đang tải (RTK Query)...</p>;
  }

  if (isError) {
    const message =
      typeof error === "object" && error !== null && "message" in error
        ? String((error as { message: unknown }).message)
        : "Không tải được danh sách sản phẩm";
    return <p className="status-message status-message--error">Lỗi: {message}</p>;
  }

  return (
    <section className="panel">
      <h2>Sản phẩm (RTK Query)</h2>
      <div className="product-grid">
        {products?.map((product) => (
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

export default ProductListRTKQuery;
