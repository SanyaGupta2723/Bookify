import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Checkout() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [timer, setTimer] = useState(300);

  // ✅ LOAD CART DIRECTLY
  useEffect(() => {
    const storedCart =
      JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // 🧮 CALCULATIONS
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
        ❌ Cart empty or session expired
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        UPI Payment
      </h1>

      <p className="mb-3 font-semibold">
        Amount: ₹{payableAmount}
      </p>

      {/* QR */}
      <div className="flex justify-center mb-4">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?am=${payableAmount}`}
          alt="UPI QR"
        />
      </div>

      <p className="text-sm opacity-70 mb-3">
        Scan with GPay / PhonePe / Paytm
      </p>

      <p className="text-warning mb-4">
        Time left: {Math.floor(timer / 60)}:
        {String(timer % 60).padStart(2, "0")}
      </p>

      <button
        onClick={handlePaymentSuccess}
        className="btn btn-success px-10"
      >
        I’ve Paid
      </button>
    </div>
  );
}

export default Checkout;
