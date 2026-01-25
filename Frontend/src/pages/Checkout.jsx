import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Checkout() {
  const navigate = useNavigate();
 
  const location = useLocation();
const paymentMethod = location.state?.paymentMethod || "cod";
<p className="mb-6 text-lg">
  Payment Method: <b>{paymentMethod.toUpperCase()}</b>
</p>



  const handlePlaceOrder = () => {
    alert(`Payment Successful via ${paymentMethod.toUpperCase()} 🎉`);
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {/* 💳 PAYMENT OPTIONS */}
      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">Payment Method</h2>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
          />
          Cash on Delivery
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            checked={paymentMethod === "upi"}
            onChange={() => setPaymentMethod("upi")}
          />
          UPI (Google Pay / PhonePe)
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
          />
          Debit / Credit Card
        </label>
      </div>

      {/* ✅ PLACE ORDER */}
      <button
        onClick={handlePlaceOrder}
        className="btn btn-success px-10"
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
