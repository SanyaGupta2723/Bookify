import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);

  // 🔹 Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // ➕ Increase quantity
  const increaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item._id === id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ➖ Decrease quantity
  const decreaseQty = (id) => {
    const updatedCart = cart
      .map((item) =>
        item._id === id
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ❌ Remove item
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // 💰 Total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-5 py-14 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Your Cart 🛒</h1>

      {/* 🟡 EMPTY CART */}
      {cart.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-lg mb-4 text-base-content/70">
            Your cart is empty.
          </p>
          <Link to="/browsebooks" className="btn btn-primary">
            Browse Books
          </Link>
        </div>
      ) : (
        <>
          {/* 🟢 CART ITEMS */}
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row items-center gap-6 border p-4 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 rounded-md"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">
                    {item.name}
                  </h2>
                  <p className="text-primary font-medium">
                    ₹{item.price}
                  </p>

                  {/* ➕➖ Quantity */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => decreaseQty(item._id)}
                      className="btn btn-xs"
                    >
                      −
                    </button>

                    <span className="font-medium">
                      {item.quantity || 1}
                    </span>

                    <button
                      onClick={() => increaseQty(item._id)}
                      className="btn btn-xs"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="btn btn-sm btn-outline btn-error"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* 🔥 TOTAL SECTION */}
          <div className="mt-10 flex flex-col sm:flex-row justify-between items-center border-t pt-6 gap-4">
            <h2 className="text-xl font-semibold">
              Total: ₹{totalPrice}
            </h2>

            <button className="btn btn-primary px-10">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
