import { useLocation } from "react-router-dom";

function OrderTracking() {
  const { state } = useLocation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6 text-success">
        🎉 Order Confirmed!
      </h1>

      <p className="opacity-70 mb-8">
        Thank you for your order. Your books are on the way 🚚
      </p>

      {/* 📦 ORDER SUMMARY */}
     {/* 🧾 PRICE BREAKUP */}
<div className="border border-white/10 rounded-xl p-5 bg-white/5 mb-8">
  <h2 className="font-semibold mb-4 text-lg">Order Summary</h2>

  {state?.items?.map((item) => (
    <div key={item._id} className="flex justify-between text-sm mb-2">
      <span>{item.name} × {item.quantity}</span>
      <span>₹{item.price * item.quantity}</span>
    </div>
  ))}

  <div className="border-t border-white/10 my-3"></div>

  <div className="flex justify-between text-sm opacity-80">
    <span>Subtotal</span>
    <span>₹{subtotal}</span>
  </div>

  <div className="flex justify-between text-sm opacity-80">
    <span>GST (5%)</span>
    <span>₹{gstAmount}</span>
  </div>

  <div className="flex justify-between text-sm opacity-80">
    <span>Delivery</span>
    <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
  </div>

  {discount > 0 && (
    <div className="flex justify-between text-sm text-success">
      <span>Discount</span>
      <span>-₹{discount}</span>
    </div>
  )}

  <div className="border-t border-white/10 pt-3 mt-3 flex justify-between font-semibold text-lg">
    <span>Total Payable</span>
    <span className="text-primary">₹{totalPayable}</span>
  </div>
</div>


      {/* 🚚 SHIPPING INFO */}
      <div className="grid sm:grid-cols-2 gap-6">

        <div className="border border-white/10 rounded-xl p-5 bg-white/5">
          <h3 className="font-semibold mb-2">📍 Shipping Address</h3>
          <p className="text-sm opacity-80">
            Sanya Gupta <br />
            New Delhi, India <br />
            1100XX
          </p>
        </div>

        <div className="border border-white/10 rounded-xl p-5 bg-white/5">
          <h3 className="font-semibold mb-2">🚚 Delivery Status</h3>
          <p className="text-sm opacity-80 mb-1">
            Courier: Delhivery
          </p>
          <p className="text-sm text-success">
            Expected Delivery: 3–5 Business Days
          </p>
        </div>

      </div>

      {/* 📊 ORDER STATUS */}
      <div className="mt-10">
        <h3 className="font-semibold mb-4">Order Progress</h3>

        <div className="flex items-center gap-4 text-sm">
          <span className="badge badge-success">Order Placed</span>
          <span className="badge badge-outline">Packed</span>
          <span className="badge badge-outline">Shipped</span>
          <span className="badge badge-outline">Delivered</span>
        </div>
      </div>
    </div>
  );
}

export default OrderTracking;
