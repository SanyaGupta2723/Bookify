import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const handleAddToCart = () => {
  // 1️⃣ Existing cart lao
  const existingCart =
    JSON.parse(localStorage.getItem("cart")) || [];

  // 2️⃣ Check: book already in cart?
  const alreadyInCart = existingCart.find(
    (item) => item._id === book._id
  );

  if (alreadyInCart) {
    alert("Book already in cart!");
    return;
  }

  // 3️⃣ New book add karo
  const updatedCart = [...existingCart, book];

  // 4️⃣ Save back to localStorage
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  // 5️⃣ Feedback
  alert("Book added to cart 🛒");
  const addToWishlist = (book) => {
  const existing = JSON.parse(localStorage.getItem("wishlist")) || [];

  const alreadyExists = existing.find(
    (item) => item._id === book._id
  );

  if (alreadyExists) {
    alert("Already in wishlist ❤️");
    return;
  }

  const updated = [...existing, book];
  localStorage.setItem("wishlist", JSON.stringify(updated));
  alert("Added to wishlist ❤️");
};

};


  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/books/${id}`);
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

    {/* LEFT IMAGE */}
    <div className="flex justify-center">
      <img
        src={book.image}
        alt={book.name}
        className="w-72 md:w-96 rounded-xl shadow-lg"
      />
    </div>

    {/* RIGHT CONTENT */}
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
        Category: <span className="capitalize">{book.category}</span>
      </p>

      <div className="flex gap-4 pt-4">
        <button
          onClick={handleAddToCart}
          className="btn btn-primary px-8"
        >
          Add to Cart
        </button>
        


        <button 
          onClick={() => addToWishlist(book)}
          className="btn btn-primary px-8"
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
