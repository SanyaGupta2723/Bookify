import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cod");

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

  // 📄 INVOICE CALCULATION
  const gstRate = 0.05;
  const gstAmount = Math.round(totalPrice * gstRate);
  const deliveryFee = totalPrice > 499 ? 0 : 40;
  const discount = totalPrice > 999 ? 100 : 0;

  const payableAmount =
    totalPrice + gstAmount + deliveryFee - discount;

  return (
    <div className="max-w-6xl mx-auto px-5 py-14 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Your Cart 🛒</h1>

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

          {/* 🧾 PRICE BREAKUP */}
          <div className="mt-10 max-w-md border border-white/10 rounded-xl p-5 bg-white/5 space-y-3">
            <h3 className="text-lg font-semibold">Price Details</h3>

            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>GST (5%)</span>
              <span>₹{gstAmount}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Delivery</span>
              <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-sm text-success">
                <span>Discount</span>
                <span>-₹{discount}</span>
              </div>
            )}

            <div className="border-t pt-3 flex justify-between font-semibold">
              <span>Total Payable</span>
              <span>₹{payableAmount}</span>
            </div>
          </div>

          {/* 💳 PAYMENT METHOD */}
<div className="mt-8 max-w-md">
  <h2 className="text-lg font-semibold mb-4">
    Select Payment Method
  </h2>

  <div className="space-y-3">

    <label className="flex items-center gap-4 p-4 rounded-lg border border-white/20 cursor-pointer hover:border-primary transition">
      <input
        type="radio"
        name="payment"
        className="radio radio-primary"
        checked={paymentMethod === "cod"}
        onChange={() => setPaymentMethod("cod")}
      />
      <span className="text-xl">💵</span>
      <div>
        <p className="font-medium">Cash on Delivery</p>
        <p className="text-xs opacity-60">Pay when book arrives</p>
      </div>
    </label>

    <label className="flex items-center gap-4 p-4 rounded-lg border border-white/20 cursor-pointer hover:border-primary transition">
      <input
        type="radio"
        name="payment"
        className="radio radio-primary"
        checked={paymentMethod === "upi"}
        onChange={() => setPaymentMethod("upi")}
      />
      <span className="text-xl">📱</span>
      <div>
        <p className="font-medium">UPI</p>
        <p className="text-xs opacity-60">GPay • PhonePe • Paytm</p>
      </div>
    </label>

    <label className="flex items-center gap-4 p-4 rounded-lg border border-white/20 cursor-pointer hover:border-primary transition">
      <input
        type="radio"
        name="payment"
        className="radio radio-primary"
        checked={paymentMethod === "card"}
        onChange={() => setPaymentMethod("card")}
      />
      <span className="text-xl">💳</span>
      <div>
        <p className="font-medium">Debit / Credit Card</p>
        <p className="text-xs opacity-60">Visa • MasterCard • RuPay</p>
      </div>
    </label>

  </div>
</div>


          {/* 🔥 PAY */}
          <button
            onClick={() =>
              navigate("/checkout", {
                state: { paymentMethod, payableAmount },
              })
            }
            className="btn btn-success px-10 mt-8"
          >
            Pay ₹{payableAmount}
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
