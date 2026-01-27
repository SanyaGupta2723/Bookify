import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Checkout() {
  const navigate = useNavigate();
  const { state } = useLocation();

const paymentMethod = state?.paymentMethod;
const payableAmount = state?.payableAmount;


  const [timer, setTimer] = useState(300); // 5 min

  // ⏱ Countdown timer
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handlePaymentSuccess = () => {
    localStorage.removeItem("cart");

   navigate("/order-tracking", {
  state: {
    items,
    payableAmount,
    method: paymentMethod,
  },
});


  if (!paymentMethod) {
    return <p className="text-center mt-20">Invalid Payment</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">
        Complete Your Payment
      </h1>

      {/* 💳 PAYMENT METHOD */}
      <div className="mb-6 text-sm opacity-80">
        Payment Method:{" "}
        <b className="uppercase">{paymentMethod}</b>
      </div>

      {/* 💰 AMOUNT */}
      <div className="mb-6 text-lg font-semibold">
        Amount Payable: ₹{payableAmount}
      </div>

      {/* 📱 UPI SECTION */}
      {paymentMethod === "upi" && (
        <div className="border border-white/10 rounded-xl p-6 bg-white/5 text-center">
          <h2 className="font-semibold mb-4">
            Scan & Pay via UPI
          </h2>

          {/* 🔳 QR CODE (Dummy) */}
          <div className="flex justify-center mb-4">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay"
              alt="UPI QR"
              className="rounded-lg"
            />
          </div>

          <p className="text-sm opacity-70 mb-3">
            Scan using GPay / PhonePe / Paytm
          </p>

          {/* ⏱ TIMER */}
          <p className="text-sm text-warning mb-4">
            Time remaining: {Math.floor(timer / 60)}:
            {String(timer % 60).padStart(2, "0")}
          </p>

          {/* ✅ PAY BUTTON */}
          <button
            onClick={handlePaymentSuccess}
            className="btn btn-success px-10"
          >
            I’ve Paid
          </button>
        </div>
      )}
    </div>
  );
}
} 

export default Checkout;
