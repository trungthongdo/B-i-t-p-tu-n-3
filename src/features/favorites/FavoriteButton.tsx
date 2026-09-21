import { useFavoritesStore } from "./favoritesStore";
import type { Product } from "../../types";

interface FavoriteButtonProps {
  product: Product;
}

function FavoriteButton({ product }: FavoriteButtonProps) {
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
  const isFavorite = useFavoritesStore((s) => s.isFavorite(product.id));

  return (
    <button
      type="button"
      className={`favorite-btn ${isFavorite ? "favorite-btn--active" : ""}`}
      onClick={() => toggleFavorite(product)}
      aria-label={isFavorite ? "Bỏ yêu thích" : "Thêm vào yêu thích"}
      aria-pressed={isFavorite}
    >
      {isFavorite ? "♥" : "♡"}
    </button>
  );
}

export default FavoriteButton;
