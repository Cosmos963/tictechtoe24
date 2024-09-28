import React, { useState } from "react";
import { FaBook, FaChalkboardTeacher, FaUserCircle } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import BookCard from "./BookCard";
// BookCard Component

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // default to dark mode

  const handleSearch = () => {
    console.log("searching");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Example book data (replace these with actual images and titles)
  const books = [
    {
      title: "The Great Gatsby",
      image: "https://example.com/great-gatsby.jpg", // Replace with actual image URLs
    },
    {
      title: "To Kill a Mockingbird",
      image: "https://example.com/to-kill-a-mockingbird.jpg",
    },
    {
      title: "1984",
      image: "https://example.com/1984.jpg",
    },
    // Add more book objects as needed
  ];

  return (
    <>
      <div className="bg-pure-greys-700 main flex h-screen">
        {/* Sidebar */}
        <div className="side flex flex-col gap-3 bg-gray-800 w-16 h-full items-center py-4 dark:bg-gray-900">
          <div
            className="icon flex justify-center min-h-fit my-3 transform hover:scale-125 transition-transform duration-300 hover:text-blue-400 text-gray-400 dark:text-gray-500"
            title="Saved"
          >
            <FaBook size={25} />
          </div>
          <div
            className="icon flex justify-center min-h-fit my-10 transform hover:scale-125 transition-transform duration-300 hover:text-blue-400 text-gray-400 dark:text-gray-500"
            title="Courses"
          >
            <FaChalkboardTeacher size={25} />
          </div>
          <div
            className="icon flex justify-center min-h-fit my-10 transform hover:scale-125 transition-transform duration-300 hover:text-blue-400 text-gray-400 dark:text-gray-500"
            title="Profile"
          >
            <FaUserCircle size={25} />
          </div>
          <div
            className="icon flex justify-center min-h-fit my-10 transform hover:scale-125 transition-transform duration-300 hover:text-blue-400 text-gray-400 dark:text-gray-500"
            title="Add New"
          >
            <IoIosAddCircle size={30} />
          </div>
        </div>

        {/* Main Content */}
        <div className="cont w-full bg-gray-900 p-6 dark:bg-gray-800">
          {/* Dark Mode Toggle Button */}
          <div className="flex justify-end">
            <button
              className="mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white dark:bg-gray-600 dark:text-gray-200 hover:bg-blue-600 transition duration-300"
              onClick={toggleDarkMode}
            >
              Toggle Dark Mode
            </button>
          </div>

          {/* Search */}
          <div className="search flex justify-center mt-6">
            <input
              className="p-2 rounded-lg border-2 border-gray-700 bg-gray-800 text-white shadow-md transition-all focus:border-blue-800 focus:ring-2 focus:ring-blue-500 outline-none"
              type="text"
              placeholder="Search"
            />
            <button
              className="mx-2 px-4 py-2 rounded-lg bg-blue-800 text-white hover:bg-blue-600 transition-transform duration-300"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* Dropdown */}
          <div className="mt-4 flex justify-center">
            <select
              name=""
              className="p-2 rounded-md mx-3 border-2 border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              id=""
            >
              <option value="">Books</option>
              <option value="">Notes</option>
            </select>
          </div>

          {/* Infinite Horizontal Scroll Container */}
          <div className="wrapper mt-10 overflow-hidden relative">
            <div className="flex animate-scroll">
              {books.concat(books).map(
                (
                  book,
                  index // Duplicate the books for the infinite effect
                ) => (
                  <BookCard key={index} title={book.title} image={book.image} />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add the styles for the scroll animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
          white-space: nowrap;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}
