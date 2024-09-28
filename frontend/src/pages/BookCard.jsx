import React from "react";

export default function BookCard({ title, image }) {
  return (
    <div className="max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-800 dark:bg-gray-900">
      <img className="w-full h-56 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h5 className="text-xl font-semibold text-white text-center">
          {title}
        </h5>
      </div>
    </div>
  );
}
