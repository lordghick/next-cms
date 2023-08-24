"use client";
// Importaciones React
import react, { useEffect } from "react";
// Importaciones Next
import Link from "next/link";
//  Importaciones de React Icons
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

export default function PaginationButtons() {
  const [array, setArray] = react.useState([]);
  const [currentPage, setCurrentPage] = react.useState(1);
  var totalItems = 0;
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`
    )
      .then((response) => response.json())
      .then((result) => setArray(result));
  });
  function change() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${currentPage}`
    )
      .then((response) => response.json())
      .then((result) => setArray(result));
  }
  function decrement() {
    setCurrentPage(currentPage - 1);
    console.log();
  }
  function increment() {
    setCurrentPage(currentPage + 1);
  }
  return (
    <div className="container max-w-6xl mx-auto flex items-center justify-center gap-2 pb-8">
      <button
        disabled={currentPage === 1 ? true : false}
        onClick={decrement}
        className="capitalize flex items-center gap-1 font-medium bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400 transition-colors"
      >
        <RiArrowLeftSLine /> PREVIOUS
      </button>
      <button
        disabled={currentPage === 10 ? true : false}
        onClick={increment}
        className="capitalize flex items-center gap-1 font-medium bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400 transition-colors"
      >
        NEXT <RiArrowRightSLine />
      </button>
    </div>
  );
}
