import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BookDetails() {
  const { id } = useParams(); // URL se id
  const [book, setBook] = useState(null);

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

  // Jab tak data nahi aata
  if (!book) {
    return <p className="p-8">Loading...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">
        {book.title}
      </h1>

      <p className="opacity-70 mb-2">
        By {book.author}
      </p>

      <p className="text-xl font-semibold text-primary mb-4">
        ₹{book.price}
      </p>

      <p className="mb-6">
        {book.description}
      </p>

      <p className="mb-4 text-sm opacity-70">
        Category: {book.category}
      </p>

      <div className="flex gap-4">
        <button className="btn btn-primary">
          Add to Cart
        </button>
        <button className="btn btn-outline">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default BookDetails;
