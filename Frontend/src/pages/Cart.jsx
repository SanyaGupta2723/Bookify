import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const navigate = useNavigate();

  // 🔹 Load cart
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // ➕➖ Quantity
  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item._id === id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const decreaseQty = (id) => {
    const updated = cart
      .map((item) =>
        item._id === id
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeFromCart = (id) => {
    const updated = cart.filter((item) => item._id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // 💰 TOTAL
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

  // ✅ PAY BUTTON HANDLER
  const handlePayNow = () => {
  if (paymentMethod === "cod") {
    navigate("/order-tracking", {
      state: {
        total: payableAmount,
        items: cart,
      },
    });
    localStorage.removeItem("cart");
  } else {
    navigate("/checkout", {
      state: { paymentMethod, total: payableAmount },
    });
  }
};


  return (
    <div className="max-w-6xl mx-auto px-5 py-14 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-lg mb-4 opacity-70">Your cart is empty.</p>
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
                <img src={item.image} alt={item.name} className="w-28 rounded-md" />

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-primary">₹{item.price}</p>

                  <div className="flex items-center gap-3 mt-3">
                    <button onClick={() => decreaseQty(item._id)} className="btn btn-xs">−</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => increaseQty(item._id)} className="btn btn-xs">+</button>
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

          {/* 🧾 PRICE DETAILS */}
          <div className="mt-10 max-w-md border border-white/10 rounded-xl p-5 bg-white/5 space-y-3">
            <h3 className="font-semibold">Price Details</h3>

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
          <div className="mt-8 max-w-md space-y-3">
            <h2 className="font-semibold">Select Payment Method</h2>

            {[
              { id: "cod", icon: "💵", title: "Cash on Delivery", sub: "Pay when book arrives" },
              { id: "upi", icon: "📱", title: "UPI", sub: "GPay • PhonePe • Paytm" },
              { id: "card", icon: "💳", title: "Card", sub: "Visa • MasterCard • RuPay" },
            ].map((p) => (
              <label key={p.id} className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === p.id}
                  onChange={() => setPaymentMethod(p.id)}
                  className="radio radio-primary"
                />
                <span className="text-xl">{p.icon}</span>
                <div>
                  <p className="font-medium">{p.title}</p>
                  <p className="text-xs opacity-60">{p.sub}</p>
                </div>
              </label>
            ))}
          </div>

          {/* 🔥 PAY BUTTON */}
          <button
            onClick={handlePayNow}
            className="btn btn-success px-10 mt-8"
          >
            {paymentMethod === "cod"
              ? "Place Order"
              : `Pay ₹${payableAmount}`}
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
