import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Checkout() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [timer, setTimer] = useState(300);

  useEffect(() => {
    const storedCart =
      JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // 💰 CALCULATIONS
  const subtotal = cart.reduce(
    (sum, i) => sum + i.price * (i.quantity || 1),
    0
  );
  const gst = Math.round(subtotal * 0.05);
  const delivery = subtotal > 499 ? 0 : 40;
  const payableAmount = subtotal + gst + delivery;

  // ⏱ TIMER
  useEffect(() => {
    if (timer === 0) return;
    const t = setInterval(() => setTimer((x) => x - 1), 1000);
    return () => clearInterval(t);
  }, [timer]);

  const handlePaymentSuccess = () => {
    navigate("/order-tracking", {
      state: {
        items: cart,
        subtotal,
        gst,
        delivery,
        payableAmount,
        method: "upi",
      },
    });
    localStorage.removeItem("cart");
  };

  if (cart.length === 0) {
    return (
      <p className="text-center mt-20">
        ❌ Cart expired. Please try again.
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">
        Secure UPI Payment
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* 🔳 LEFT : QR PAYMENT */}
        <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
          <h2 className="font-semibold text-lg mb-4">
            Scan & Pay
          </h2>

          <div className="flex justify-center my-6">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?am=${payableAmount}`}
              alt="UPI QR"
              className="rounded-xl shadow-lg"
            />
          </div>

          <p className="text-center text-sm opacity-70 mb-3">
            Use <b>GPay / PhonePe / Paytm</b> to scan
          </p>

          <div className="text-center text-warning mb-4">
            ⏱ Time left: {Math.floor(timer / 60)}:
            {String(timer % 60).padStart(2, "0")}
          </div>

          <button
            onClick={handlePaymentSuccess}
            className="btn btn-success w-full text-lg"
          >
            I’ve Completed Payment
          </button>

          <p className="text-xs text-center opacity-60 mt-3">
            🔒 100% Secure UPI Transaction
          </p>
        </div>

        {/* 🧾 RIGHT : ORDER SUMMARY */}
        <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
          <h2 className="font-semibold text-lg mb-4">
            Order Summary
          </h2>

          {cart.map((item) => (
            <div
              key={item._id}
              className="flex justify-between text-sm mb-2"
            >
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}

          <div className="border-t border-white/10 my-4"></div>

          <div className="flex justify-between text-sm opacity-80">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between text-sm opacity-80">
            <span>GST (5%)</span>
            <span>₹{gst}</span>
          </div>

          <div className="flex justify-between text-sm opacity-80">
            <span>Delivery</span>
            <span>
              {delivery === 0 ? "FREE" : `₹${delivery}`}
            </span>
          </div>

          <div className="border-t border-white/10 mt-4 pt-4 flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span className="text-primary">
              ₹{payableAmount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
