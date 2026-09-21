import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeItem, updateQuantity, clearCart } from "./cartSlice";
import { selectCartItems, selectTotalQuantity, selectTotalPrice } from "./cartSelectors";

function CartSummary() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const totalQuantity = useAppSelector(selectTotalQuantity);
  const totalPrice = useAppSelector(selectTotalPrice);

  if (items.length === 0) {
    return (
      <section className="panel">
        <h2>Giỏ hàng</h2>
        <p className="status-message">Giỏ hàng đang trống</p>
      </section>
    );
  }

  return (
    <section className="panel">
      <div className="cart-header">
        <h2>
          Giỏ hàng <span className="badge">{totalQuantity}</span>
        </h2>
        <button className="btn-text" onClick={() => dispatch(clearCart())}>
          Xoá tất cả
        </button>
      </div>

      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item__image">{item.image}</div>

            <div className="cart-item__info">
              <strong>{item.name}</strong>
              <span>{item.price.toLocaleString("vi-VN")}đ / sản phẩm</span>
            </div>

            {/* Cập nhật số lượng: giảm / tăng */}
            <div className="qty-control">
              <button
                onClick={() =>
                  dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                }
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                  dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                }
              >
                +
              </button>
            </div>

            <strong className="cart-item__subtotal">
              {(item.price * item.quantity).toLocaleString("vi-VN")}đ
            </strong>

            <button className="btn-remove" onClick={() => dispatch(removeItem(item.id))}>
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-total">
        <span>Tổng cộng</span>
        <strong>{totalPrice.toLocaleString("vi-VN")}đ</strong>
      </div>
    </section>
  );
}

export default CartSummary;
