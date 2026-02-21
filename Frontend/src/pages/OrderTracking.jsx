import { useLocation, Link } from "react-router-dom";

function OrderTracking() {
  const { state } = useLocation();

  const items = state?.items || [];

  // 🛑 EMPTY ORDER UI
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
        
        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6">
          <span className="text-4xl">📦</span>
        </div>

        <h2 className="text-3xl font-bold mb-3">
          No Orders Yet
        </h2>

        <p className="opacity-70 max-w-md mb-6">
          You haven’t placed any orders yet. 
          Browse our collection and place your first order today!
        </p>

        <Link
          to="/"
          className="btn btn-primary rounded-full px-8"
        >
          Browse Books 📚
        </Link>
      </div>
    );
  }

  // ✅ NORMAL ORDER FLOW
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const gstRate = 0.05;
  const gstAmount = Math.round(subtotal * gstRate);
  const deliveryFee = subtotal > 499 ? 0 : 40;
  const discount = subtotal > 999 ? 100 : 0;

  const totalPayable =
    subtotal + gstAmount + deliveryFee - discount;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6 text-success">
        🎉 Order Confirmed!
      </h1>

      <p className="opacity-70 mb-8">
        Thank you for your order. Your books are on the way 🚚
      </p>

      <div className="border border-white/10 rounded-xl p-5 bg-white/5 mb-8">
        <h2 className="font-semibold mb-4 text-lg">Order Summary</h2>

        {items.map((item) => (
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
    </div>
  );
}

export default OrderTracking;