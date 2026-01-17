import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  // 🔹 Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // ❌ Remove item
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // 💰 Total Price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-6xl mx-auto px-5 py-14 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p className="text-base-content/70">
          Your cart is empty.
        </p>
      ) : (
        <>
          {/* CART ITEMS */}
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-6 border p-4 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 rounded-md"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">
                    {item.name}
                  </h2>
                  <p className="text-primary font-medium">
                    ₹{item.price}
                  </p>
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

          {/* TOTAL */}
          <div className="mt-10 flex justify-between items-center border-t pt-6">
            <h2 className="text-xl font-semibold">
              Total: ₹{totalPrice}
            </h2>

            <button className="btn btn-primary px-8">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
