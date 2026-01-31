import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import Cards from "../components/Cards";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // optional (icon lib)



function BookDetails() {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  const [allBooks, setAllBooks] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  


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
// ⚡ BUY NOW
const handleBuyNow = () => {
  const existingCart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const alreadyInCart = existingCart.find(
    (item) => item._id === book._id
  );

  let updatedCart;

  if (alreadyInCart) {
    updatedCart = existingCart.map((item) =>
      item._id === book._id
        ? { ...item, quantity }
        : item
    );
  } else {
    updatedCart = [
      ...existingCart,
      { ...book, quantity },
    ];
  }

  localStorage.setItem("cart", JSON.stringify(updatedCart));

  // 🔥 Navbar count update
  setCartCount(updatedCart.length);

  // 🚀 Go to cart page
  navigate("/cart");
};

  return (
    <>
     {/* BACK BUTTON */}
    <button
    
      onClick={() => navigate(-1)}
      className="fixed top-6 left-6 z-50 flex items-center gap-2 
                 text-white hover:text-blue-400 transition"
    >
      <ArrowLeft size={22} />
      <span className="hidden sm:block">Back</span>
    </button>
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
            {/* 📘 BOOK META DETAILS */}
<div className="mt-6 p-5 rounded-xl border border-white/10 bg-white/5 space-y-3">
  <h3 className="font-semibold text-lg">Book Details</h3>

  <div className="text-sm opacity-80 space-y-2">
    <p>
      <span className="opacity-60">Author:</span> {book.author || "Unknown"}
    </p>
    <p>
      <span className="opacity-60">Language:</span> English
    </p>
    <p>
      <span className="opacity-60">Pages:</span> 208
    </p>
    <p>
      <span className="opacity-60">Publisher:</span> HarperCollins
    </p>
    <p>
      <span className="opacity-60">Rating:</span> ⭐ 4.7 / 5
    </p>
  </div>
</div>


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
  onClick={handleBuyNow}
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
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">

  {/* Fast Delivery */}
  <div className="
    flex items-center gap-3 
    p-4 rounded-lg 
    border border-white/10 
    bg-white/5
    hover:border-primary/50
    hover:shadow-[0_0_12px_rgba(99,102,241,0.4)]
    transition
  ">
    <span className="text-xl">🚚</span>
    <div>
      <p className="font-medium">Fast Delivery</p>
      <p className="text-sm opacity-70">3–5 business days</p>
    </div>
  </div>

  {/* Secure Payment */}
  <div className="
    flex items-center gap-3 
    p-4 rounded-lg 
    border border-white/10 
    bg-white/5
    hover:border-green-400/50
    hover:shadow-[0_0_12px_rgba(34,197,94,0.4)]
    transition
  ">
    <span className="text-xl">🔒</span>
    <div>
      <p className="font-medium">Secure Payment</p>
      <p className="text-sm opacity-70">100% safe checkout</p>
    </div>
  </div>

  {/* Easy Returns */}
  <div className="
    flex items-center gap-3 
    p-4 rounded-lg 
    border border-white/10 
    bg-white/5
    hover:border-pink-400/50
    hover:shadow-[0_0_12px_rgba(236,72,153,0.4)]
    transition
  ">
    <span className="text-xl">↩️</span>
    <div>
      <p className="font-medium">Easy Returns</p>
      <p className="text-sm opacity-70">7-day return policy</p>
    </div>
  </div>

</div>

          </div>
        </div>
      </div>
      
      {/* ⭐ REVIEWS SECTION */}
<div className="max-w-6xl mx-auto px-5 mt-24">
  <h2 className="text-2xl font-bold mb-6">
    Customer Reviews
  </h2>

  <div className="space-y-6">

    {/* Review 1 */}
    <div className="p-5 rounded-xl border border-white/10 bg-white/5">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-semibold">Aarav</span>
        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
      </div>
      <p className="text-sm text-base-content/80">
        Absolutely loved this book. The story is inspiring and beautifully written.
      </p>
    </div>

    {/* Review 2 */}
    <div className="p-5 rounded-xl border border-white/10 bg-white/5">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-semibold">Sneha</span>
        <span className="text-yellow-400">⭐⭐⭐⭐</span>
      </div>
      <p className="text-sm text-base-content/80">
        A must-read for anyone who enjoys philosophical and motivational books.
      </p>
    </div>

    {/* Review 3 */}
    <div className="p-5 rounded-xl border border-white/10 bg-white/5">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-semibold">Rohit</span>
        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
      </div>
      <p className="text-sm text-base-content/80">
        One of my favorite books of all time. Simple yet very powerful.
      </p>
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
