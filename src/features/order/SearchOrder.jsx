import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4">
      <Link
        to="/cart"
        className="group flex items-center gap-2 rounded-full border-2 border-yellow-300/80 bg-yellow-100/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-stone-800 uppercase shadow-sm transition hover:border-yellow-500 hover:bg-yellow-200 hover:text-stone-900"
      >
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-yellow-400 bg-yellow-200 text-stone-800 shadow-sm transition group-hover:border-yellow-500 group-hover:bg-yellow-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1.5" />
            <circle cx="18" cy="21" r="1.5" />
            <path d="M3 4h2l2.4 9a2 2 0 0 0 1.94 1.5h7.72a2 2 0 0 0 1.94-1.5L21 7H7.5" />
          </svg>
        </span>
        {totalCartQuantity ? (
          <span className="flex flex-col text-left leading-tight">
            <span>{totalCartQuantity} pizzas</span>
            <span>{formatCurrency(totalCartPrice)}</span>
          </span>
        ) : (
          <span>Open cart</span>
        )}
      </Link>

      <label htmlFor="search-order" className="sr-only">
        Search order number
      </label>
      <input
        id="search-order"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus:ring-opacity-50 w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:ring focus:ring-yellow-500 focus:outline-none sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
