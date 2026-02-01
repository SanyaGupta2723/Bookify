import { Link } from "react-router-dom";



<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
  {nonFictionBooks.map((book, index) => (
    <Link
      key={index}
      to={`/book/${index}`}   // 🔥 yahi main fix
      className="group rounded-2xl overflow-hidden bg-base-200
                 hover:shadow-xl transition block"
    >
      <div className="overflow-hidden">
        <img
          src={book.img}
          alt={book.title}
          className="h-[320px] w-full object-cover
                     group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">
          {book.title}
        </h3>
        <span className="inline-block px-3 py-1 rounded-full text-sm
                         bg-indigo-500/20 text-indigo-300">
          {book.tag}
        </span>
      </div>
    </Link>
  ))}
</div>
