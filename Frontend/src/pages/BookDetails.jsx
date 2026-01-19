import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  // 🔹 Context se count setters
  const { setCartCount, setWishlistCount } = useContext(CartContext);

  // 🛒 ADD TO CART
  const handleAddToCart = () => {
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const alreadyInCart = existingCart.find(
      (item) => item._id === book._id
    );

    if (alreadyInCart) {
      alert("Book already in cart!");
      return;
    }

    const updatedCart = [
      ...existingCart,
      { ...book, quantity: 1 },
    ];

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // 🔥 REAL-TIME NAVBAR UPDATE
    setCartCount(updatedCart.length);

    alert("Book added to cart 🛒");
  };

  // ❤️ ADD TO WISHLIST
  const addToWishlist = () => {
    const existingWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const alreadyExists = existingWishlist.find(
      (item) => item._id === book._id
    );

    if (alreadyExists) {
      alert("Already in wishlist ❤️");
      return;
    }

    const updatedWishlist = [...existingWishlist, book];
    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    // 🔥 REAL-TIME NAVBAR UPDATE
    setWishlistCount(updatedWishlist.length);

    alert("Added to wishlist ❤️");
  };

  // 📡 FETCH BOOK
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/books/${id}`
        );
        setBook(res.data);
      } catch (error) {
        console.log("Error fetching book", error);
      }
    };
    fetchBook();
  }, [id]);

  if (!book) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* 🖼️ LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src={book.image}
            alt={book.name}
            className="w-72 md:w-96 rounded-xl shadow-lg"
          />
        </div>

        {/* 📄 RIGHT CONTENT */}
        <div className="space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold">
            {book.name}
          </h1>

          <p className="text-2xl font-semibold text-primary">
            ₹{book.price}
          </p>

          <p className="text-base-content/80 leading-relaxed">
            {book.description}
          </p>

          <p className="text-sm text-base-content/60">
            Category:{" "}
            <span className="capitalize">{book.category}</span>
          </p>

          <div className="flex gap-4 pt-4">
            <button
              onClick={handleAddToCart}
              className="btn btn-primary px-8"
            >
              Add to Cart
            </button>

            <button
              onClick={addToWishlist}
              className="btn btn-outline px-8"
            >
              ❤️ Add to Wishlist
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BookDetails;
