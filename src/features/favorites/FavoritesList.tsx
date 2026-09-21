import { useFavoritesStore } from "./favoritesStore";

function FavoritesList() {
  const items = useFavoritesStore((s) => s.items);
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  if (items.length === 0) {
    return (
      <section className="panel panel--favorites">
        <h2>
          <span className="panel__heart">♥</span> Sản phẩm yêu thích
        </h2>
        <div className="favorites-empty">
          <span className="favorites-empty__icon">🤍</span>
          <p>Chưa có sản phẩm yêu thích nào</p>
          <span className="favorites-empty__hint">
            Bấm biểu tượng trái tim trên sản phẩm để lưu lại
          </span>
        </div>
      </section>
    );
  }

  return (
    <section className="panel panel--favorites">
      <h2>
        <span className="panel__heart">♥</span> Sản phẩm yêu thích
        <span className="badge badge--rose">{items.length}</span>
      </h2>
      <div className="product-grid">
        {items.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-card__image">{product.image}</div>
            <div className="product-card__body">
              <span className="product-card__category">{product.category}</span>
              <h3>{product.name}</h3>
              <strong className="product-card__price">
                {product.price.toLocaleString("vi-VN")}đ
              </strong>
            </div>
            <button onClick={() => toggleFavorite(product)}>Bỏ yêu thích</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FavoritesList;