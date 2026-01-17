import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";

function BrowseBooks() {
  // 🔹 STATES
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortPrice, setSortPrice] = useState(""); // low-high | high-low
  const [search, setSearch] = useState("");

  // 🔹 FETCH BOOKS FROM BACKEND
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books");
        setBooks(res.data);
      } catch (error) {
        console.log("Error fetching books", error);
      }
    };
    fetchBooks();
  }, []);

  // 🔹 FILTER + SORT LOGIC
  let filteredBooks = [...books];

  // 🔍 SEARCH
  if (search) {
    filteredBooks = filteredBooks.filter((book) =>
      book.title?.toLowerCase().includes(search.toLowerCase())
    );
  }

  // 📂 CATEGORY
  if (selectedCategory !== "all") {
    filteredBooks = filteredBooks.filter(
      (book) => book.category === selectedCategory
    );
  }

  // 💰 PRICE SORT
  if (sortPrice === "low-high") {
    filteredBooks.sort((a, b) => a.price - b.price);
  }

  if (sortPrice === "high-low") {
    filteredBooks.sort((a, b) => b.price - a.price);
  }

  // 🔹 JSX RETURN (NAVBAR & FOOTER APP.JSX ME HI RAKHO)
  return (
    <div className="flex min-h-screen bg-base-100">

      {/* 🟣 LEFT SIDEBAR */}
      <aside className="w-72 border-r p-6 space-y-8">

        {/* 🔍 SEARCH */}
        <div>
          <h3 className="font-semibold mb-2">Search</h3>
          <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        {/* 📂 CATEGORY */}
        <div>
          <h3 className="font-semibold mb-2">Category</h3>

          <div className="space-y-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`block ${
                selectedCategory === "all" ? "text-primary font-medium" : ""
              }`}
            >
              All Books
            </button>

            <button
              onClick={() => setSelectedCategory("fiction")}
              className={`block ${
                selectedCategory === "fiction"
                  ? "text-primary font-medium"
                  : ""
              }`}
            >
              Fiction
            </button>
            <button
              onClick={() => setSelectedCategory("fantasy")}
              className={`block ${
                selectedCategory === "fantasy"
                  ? "text-primary font-medium"
                  : ""
              }`}
            >
              Fantasy
            </button>

            <button
              onClick={() => setSelectedCategory("non-fiction")}
              className={`block ${
                selectedCategory === "non-fiction"
                  ? "text-primary font-medium"
                  : ""
              }`}
            >
              Non-Fiction
            </button>
          </div>
        </div>

        {/* 💰 PRICE SORT */}
        <div>
          <h3 className="font-semibold mb-2">Sort by Price</h3>
          <select
            value={sortPrice}
            onChange={(e) => setSortPrice(e.target.value)}
            className="select select-bordered w-full"
          >
            <option value="">Default</option>
            <option value="low-high">Low → High</option>
            <option value="high-low">High → Low</option>
          </select>
        </div>

      </aside>

      {/* 🟢 RIGHT SIDE CONTENT */}
      <main className="flex-1 p-8">

        {/* 🔥 PAGE HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
            Explore Our Book Collection
          </h1>

          <p className="mt-3 text-base-content/70 max-w-xl">
            Discover fiction, non-fiction, and handpicked books curated
            for every kind of reader.
          </p>

          <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-indigo-500"></div>
        </div>

        {/* 📚 BOOKS GRID */}
        {filteredBooks.length === 0 ? (
          <p className="text-base-content/70">
            No books found for this selection.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <Cards key={book._id} item={book} />
            ))}
          </div>
        )}
      </main>

    </div>
  );
}

export default BrowseBooks;
