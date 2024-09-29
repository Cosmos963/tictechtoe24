import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";

export default function Post({ title, author, createdAt, content, files }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const renderFileContent = (file) => {
    if (file.type.startsWith("image/")) {
      return (
        <img
          src={file.url}
          alt={file.name}
          className="mt-2 w-full h-auto"
          style={{ maxHeight: "400px" }}
        />
      );
    } else if (file.type === "application/pdf") {
      return (
        <iframe
          src={file.url}
          className="mt-2 w-full"
          style={{ height: "500px" }}
          title={file.name}
        ></iframe>
      );
    } else if (file.type.startsWith("video/")) {
      return (
        <video
          src={file.url}
          controls
          className="mt-2 w-full"
          style={{ maxHeight: "400px" }}
        ></video>
      );
    } else {
      return (
        <a href={file.url} download className="text-blue-500 mt-2">
          {file.name}
        </a>
      );
    }
  };

  return (
    <div className="post bg-white p-6 rounded-lg shadow-lg mb-6">
      {/* Post Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-gray-600">
            by {author} &bull; {new Date(createdAt).toLocaleString()}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* Like Button */}
          <button
            className="focus:outline-none"
            onClick={handleLike}
            title="Like Post"
          >
            {liked ? (
              <FaHeart className="text-red-500" size={20} />
            ) : (
              <FaRegHeart className="text-gray-600" size={20} />
            )}
          </button>
          {/* Save Button */}
          <button
            className="focus:outline-none"
            onClick={handleSave}
            title="Save Post"
          >
            {saved ? (
              <FaBookmark className="text-yellow-500" size={20} />
            ) : (
              <FaRegBookmark className="text-gray-600" size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Post Content */}
      <div className="content text-gray-700 mb-4">
        <p>{content}</p>
      </div>

      {/* Post Files */}
      {files && files.length > 0 && (
        <div className="files">
          <h2 className="text-lg font-semibold mt-4">Files:</h2>
          {files.map((file, index) => (
            <div key={index} className="file mt-4">
              {renderFileContent(file)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
