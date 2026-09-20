import type { Product } from "../types";

const MOCK_PRODUCTS: Product[] = [
  { id: "p1", name: "Bàn phím cơ AKKO 3068", price: 890000, image: "⌨️", category: "Phụ kiện" },
  { id: "p2", name: "Chuột không dây Logitech M331", price: 450000, image: "🖱️", category: "Phụ kiện" },
  { id: "p3", name: "Tai nghe Sony WH-1000XM4", price: 3200000, image: "🎧", category: "Âm thanh" },
  { id: "p4", name: "Màn hình Dell 27 inch 2K", price: 4500000, image: "🖥️", category: "Màn hình" },
  { id: "p5", name: "Ổ cứng SSD Samsung 1TB", price: 1450000, image: "💾", category: "Lưu trữ" },
  { id: "p6", name: "Webcam Logitech C920", price: 1250000, image: "📷", category: "Phụ kiện" },
];

export function fetchProductsFromServer(): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error("Không kết nối được tới máy chủ"));
        return;
      }
      resolve(MOCK_PRODUCTS);
    }, 700);
  });
}
