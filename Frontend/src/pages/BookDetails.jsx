import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/books/${id}`);
        setBook(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBook();
  }, [id]);

  if (!book) return <p className="p-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{book.name}</h1>
      <p className="text-primary text-2xl mb-2">₹{book.price}</p>

      <p className="mb-6 text-base-content/80">
        {book.description}
      </p>

      <p className="mb-6">
        <span className="font-semibold">Category:</span> {book.category}
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => handleAddToCart(book)}
          className="btn btn-primary"
        >
          Add to Cart
        </button>

        <button
          onClick={() => handleWishlist(book)}
          className="btn btn-outline"
        >
          ❤️ Wishlist
        </button>
      </div>
    </div>
  );
}

export default BookDetails;
