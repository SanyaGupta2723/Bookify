import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function CardCheckout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const payableAmount = state?.payableAmount || 0;

  const [loading, setLoading] = useState(false);

  const handleCardPayment = () => {
    setLoading(true);

    // ⏳ fake processing
    setTimeout(() => {
      localStorage.removeItem("cart");

      navigate("/order-tracking", {
        state: {
          method: "card",
          payableAmount,
          items: JSON.parse(localStorage.getItem("cart")) || [],
        },
      });
    }, 2000);
  };

  if (!payableAmount) {
    return (
      <p className="text-center mt-20">
        ❌ Invalid payment session
      </p>
    );
  }

  return (
    <div className="max-w-md mx-auto px-6 py-16 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">
        Secure Card Payment
      </h1>

      <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
        <div className="mb-4 text-lg font-semibold">
          Amount: ₹{payableAmount}
        </div>

        {/* CARD NUMBER */}
        <div className="mb-4">
          <label className="text-sm opacity-70">
            Card Number
          </label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="input input-bordered w-full"
          />
        </div>

        {/* EXPIRY + CVV */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm opacity-70">
              Expiry
            </label>
            <input
              type="text"
              placeholder="MM / YY"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="text-sm opacity-70">
              CVV
            </label>
            <input
              type="password"
              placeholder="***"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* NAME */}
        <div className="mb-6">
          <label className="text-sm opacity-70">
            Card Holder Name
          </label>
          <input
            type="text"
            placeholder="Sanya Gupta"
            className="input input-bordered w-full"
          />
        </div>

        <button
          onClick={handleCardPayment}
          className="btn btn-success w-full text-lg"
          disabled={loading}
        >
          {loading ? "Processing..." : `Pay ₹${payableAmount}`}
        </button>

        <p className="text-xs text-center opacity-60 mt-3">
          🔒 Secured by SSL · No card data stored
        </p>
      </div>
    </div>
  );
}

export default CardCheckout;
