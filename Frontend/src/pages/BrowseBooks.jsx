import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";

function BrowseBooks() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortPrice, setSortPrice] = useState("");
  const [search, setSearch] = useState("");

  // 🔹 FETCH BOOKS
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

  // 🔹 FILTER LOGIC
  let filteredBooks = [...books];

  // 🔍 SEARCH BY TITLE
  if (search) {
    filteredBooks = filteredBooks.filter((book) =>
      book.title?.toLowerCase().includes(search.toLowerCase())
    );
  }

  // 📂 CATEGORY FILTER (CASE INSENSITIVE)
  if (selectedCategory !== "all") {
    filteredBooks = filteredBooks.filter(
      (book) =>
        book.category?.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

  // 💰 SORT PRICE
  if (sortPrice === "low-high") {
    filteredBooks.sort((a, b) => Number(a.price) - Number(b.price));
  }

  if (sortPrice === "high-low") {
    filteredBooks.sort((a, b) => Number(b.price) - Number(a.price));
  }

  return (
    <div className="flex min-h-screen bg-base-100">

      {/* LEFT SIDEBAR */}
      {/* LEFT SIDEBAR */}
<aside className="w-72 px-6 py-8 border-r border-white/10 bg-[#0f172a]/60 backdrop-blur-md">

  {/* SEARCH */}
  <div className="mb-10">
    <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-3">
      Search
    </h3>

    <input
      type="text"
      placeholder="Search books..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full px-4 py-2 rounded-lg bg-[#020617] border border-white/10 focus:border-indigo-500 outline-none text-sm"
    />
  </div>

  {/* CATEGORY */}
  <div className="mb-10">
    <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
      Category
    </h3>

    <div className="flex flex-col gap-2">

      {[
        { label: "All Books", value: "all" },
        { label: "Fiction", value: "fiction" },
        { label: "Fantasy", value: "fantasy" },
        { label: "Non-Fiction", value: "non-fiction" },
      ].map((cat) => (
        <button
          key={cat.value}
          onClick={() => setSelectedCategory(cat.value)}
          className={`text-left px-3 py-2 rounded-md text-sm transition
          ${
            selectedCategory === cat.value
              ? "bg-indigo-500/20 text-indigo-400"
              : "text-gray-300 hover:bg-white/5"
          }`}
        >
          {cat.label}
        </button>
      ))}

    </div>
  </div>

  {/* SORT */}
  <div>
    <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-3">
      Sort by Price
    </h3>

    <select
      value={sortPrice}
      onChange={(e) => setSortPrice(e.target.value)}
      className="w-full px-4 py-2 rounded-lg bg-[#020617] border border-white/10 focus:border-indigo-500 outline-none text-sm"
    >
      <option value="">Default</option>
      <option value="low-high">Low → High</option>
      <option value="high-low">High → Low</option>
    </select>
  </div>

</aside>

      {/* RIGHT CONTENT */}
      <main className="flex-1 p-8">

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