import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item._id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="max-w-6xl mx-auto px-5 py-14 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-base-content/70 mb-4">
            Your wishlist is empty.
          </p>
          <Link to="/browsebooks" className="btn btn-primary">
            Explore Books
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item._id}
              className="border rounded-lg p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover rounded-md"
              />

              <h2 className="mt-4 font-semibold text-lg">
                {item.name}
              </h2>

              <p className="text-primary font-medium">
                ₹{item.price}
              </p>

              <button
                onClick={() => removeFromWishlist(item._id)}
                className="btn btn-sm btn-outline btn-error mt-3"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
