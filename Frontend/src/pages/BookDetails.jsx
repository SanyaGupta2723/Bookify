import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import Cards from "../components/Cards";

function BookDetails() {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  const [allBooks, setAllBooks] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const { setCartCount, setWishlistCount } = useContext(CartContext);

  // 📡 FETCH SINGLE BOOK
  useEffect(() => {
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // 📚 FETCH ALL BOOKS (FOR RECOMMENDED)
  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((res) => setAllBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!book) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  const recommendedBooks = allBooks.filter(
    (b) => b.category === book.category && b._id !== book._id
  );

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
      { ...book, quantity },
    ];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
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
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlistCount(updatedWishlist.length);

    alert("Added to wishlist ❤️");
  };

  return (
    <>
      {/* MAIN DETAILS */}
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={book.image}
              alt={book.name}
              className="w-72 md:w-96 rounded-xl shadow-lg"
            />
          </div>

          {/* CONTENT */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              {book.name}
            </h1>

            <p className="text-2xl font-semibold text-primary">
              ₹{book.price}
            </p>

            <p className="text-base-content/80 leading-relaxed">
              {book.description}
            </p>

            <p className="text-sm opacity-70">
              Category: <span className="capitalize">{book.category}</span>
            </p>

            {/* QUANTITY */}
            <div className="flex items-center gap-3">
              <span className="text-sm opacity-70">Quantity</span>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="select select-bordered select-sm w-20"
              >
                {[1, 2, 3, 4, 5].map((q) => (
                  <option key={q} value={q}>{q}</option>
                ))}
              </select>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
  onClick={handleAddToCart}
  className="
    btn 
    bg-transparent
    border-2 border-primary
    text-primary
    px-8
    hover:bg-primary/10
    hover:shadow-[0_0_12px_rgba(99,102,241,0.5)]
    transition-all
  "
>
  Add to Cart
</button>


              <button
  className="
    btn
    bg-primary
    text-white
    px-8
    shadow-[0_0_10px_rgba(99,102,241,0.6)]
    hover:shadow-[0_0_18px_rgba(99,102,241,0.9)]
    hover:scale-[1.03]
    transition-all
  "
>
  Buy Now
</button>


              <button
  onClick={addToWishlist}
  className="
    btn
    bg-transparent
    border-2 border-pink-500
    text-pink-400
    px-8
    hover:bg-pink-500/10
    hover:shadow-[0_0_12px_rgba(236,72,153,0.6)]
    transition-all
  "
>
  ❤️ Wishlist
</button>

            </div>

            {/* TRUST INFO */}
            <div className="flex gap-6 text-sm opacity-80 pt-4">
              <span>🚚 Fast Delivery</span>
              <span>🔒 Secure Payment</span>
              <span>↩ Easy Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* ⭐ RECOMMENDED BOOKS */}
      {recommendedBooks.length > 0 && (
        <div className="max-w-6xl mx-auto px-5 pb-20">
          <h2 className="text-2xl font-bold mb-6">
            You may also like
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedBooks.slice(0, 4).map((item) => (
              <Cards key={item._id} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default BookDetails;
