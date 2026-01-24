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
  const recommendedBooks = allBooks.filter(
  (b) => b.category === book?.category && b._id !== book._id
);


  if (!book) {
    return <p className="text-center mt-20">Loading...</p>;
  }
  useEffect(() => {
  axios
    .get("http://localhost:5000/books")
    .then((res) => setAllBooks(res.data))
    .catch((err) => console.log(err));
}, []);


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
            {/* 🔢 QUANTITY + BUY */}
<div className="mt-6 space-y-4">
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

  <button className="btn btn-success px-10">
    Buy Now
  </button>

  <p className="text-sm text-success">
    ✔ In stock · Delivery in 3–5 days
  </p>
</div>


            <button
              onClick={addToWishlist}
              className="btn btn-outline px-8"
            >
              ❤️ Add to Wishlist
            </button>
            <div className="flex gap-6 text-sm opacity-80 pt-4">
  <span>🚚 Fast Delivery</span>
  <span>🔒 Secure Payment</span>
  <span>↩ Easy Returns</span>
</div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default BookDetails;
