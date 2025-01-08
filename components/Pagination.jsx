"use client";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  return (
    <div className="mt-8 flex justify-center">
      <nav aria-label="Page navigation">
        <ul className="inline-flex items-center -space-x-px">
          {/* Previous Button */}
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`block py-2 px-3 ml-0 leading-tight ${
                currentPage === 1
                  ? "text-gray-400 bg-gray-200 cursor-not-allowed"
                  : "text-zinc-500 bg-white hover:bg-zinc-100 hover:text-zinc-700"
              } rounded-l-lg border border-zinc-300`}
            >
              <span className="sr-only">Previous</span>
              <FaArrowLeft />
            </button>
          </li>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index + 1}>
              <button
                onClick={() => onPageChange(index + 1)}
                className={`py-2 px-3 leading-tight ${
                  currentPage === index + 1
                    ? "text-white bg-blue-600"
                    : "text-zinc-500 bg-white hover:bg-zinc-100 hover:text-zinc-700"
                } border border-zinc-300`}
              >
                {index + 1}
              </button>
            </li>
          ))}

          {/* Next Button */}
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`block py-2 px-3 leading-tight ${
                currentPage === totalPages
                  ? "text-gray-400 bg-gray-200 cursor-not-allowed"
                  : "text-zinc-500 bg-white hover:bg-zinc-100 hover:text-zinc-700"
              } rounded-r-lg border border-zinc-300`}
            >
              <span className="sr-only">Next</span>
              <FaArrowRight />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
