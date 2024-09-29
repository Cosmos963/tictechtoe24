import React, { useState } from "react";
import { notesEndpoints } from '../services/apis'
import { apiConnector } from '../services/apiconnector'
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";
import axios from "axios";

export default function Post({ title, author, createdAt, content, files, postId }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleLike = async () => {
    console.log(postId);
    try {
      const response = await apiConnector('POST', notesEndpoints.ADD_FAVOURITE_NOTE, {postId, liked});
      setLiked(response.data.liked);
      console.log(response);

      if (response.ok) {
        console.log("Post added to favourites successfully!");
      } else {
        console.error("Failed to add post to favourites");
      }
    } catch (error) {
      console.error("Error while adding the post to favourites", error);
    }
  };

  const handleSave = async () => {
    try {
      const response = await apiConnector('POST', notesEndpoints.BOOKMARK_NOTE, {postId, saved});
      setSaved(response.data.saved);
    } catch (error) {
      console.error("Error saving the post", error);
    }
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const renderFileContent = (file) => {
    if (file.type.startsWith("image/")) {
      return (
        <div className="rounded-lg overflow-hidden shadow-lg flex justify-center items-center">
          <img
            src={file.url}
            alt={file.name}
            className="mt-2 max-w-full h-auto object-cover"
            style={{ maxHeight: "400px", width: "auto" }}
          />
        </div>
      );
    } else if (file.type === "application/pdf") {
      return (
        <div className="mt-2 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={file.url}
            className="w-full"
            style={{ height: "500px" }}
            title={file.name}
          ></iframe>
        </div>
      );
    } else if (file.type.startsWith("video/")) {
      return (
        <div className="mt-2 rounded-lg overflow-hidden shadow-lg">
          <video
            src={file.url}
            controls
            className="w-full"
            style={{ maxHeight: "400px" }}
          ></video>
        </div>
      );
    } else {
      return (
        <div className="mt-2 bg-blue-50 p-4 rounded-lg shadow-md">
          <a href={file.url} download className="text-blue-500">
            {file.name}
          </a>
        </div>
      );
    }
  };

  return (
    <div className="post bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200 cursor-pointer">
      {/* Post Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-gray-500">
            by <span className="font-medium">{author}</span> &bull;{" "}
            {new Date(createdAt).toLocaleString()}
          </p>
        </div>
        <div className="flex items-center gap-4">
          {/* Like Button */}
          <button
            className="focus:outline-none transition-transform transform hover:scale-110"
            onClick={(e) => {
              e.stopPropagation(); // Prevent post expansion
              handleLike();
            }}
            title="Like Post"
          >
            {liked ? (
              <FaHeart className="text-pink-400" size={24} />
            ) : (
              <FaRegHeart className="text-gray-600" size={24} />
            )}
          </button>
          {/* Save Button */}
          <button
            className="focus:outline-none transition-transform transform hover:scale-110"
            onClick={(e) => {
              e.stopPropagation(); // Prevent post expansion
              handleSave();
            }}
            title="Save Post"
          >
            {saved ? (
              <FaBookmark className="text-yellow-500" size={24} />
            ) : (
              <FaRegBookmark className="text-gray-600" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Post Content */}
      <div className="content text-gray-700 leading-relaxed mb-4">
        <p>{expanded ? content : `${content.slice(0, 100)}...`}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleExpanded();
          }}
          className="text-blue-500 focus:outline-none"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      </div>

      {/* Post Files */}
      {expanded && files && files.length > 0 && (
        <div className="files">
          <h2 className="text-lg font-semibold mt-4 mb-2">Attachments:</h2>
          <div className="grid grid-cols-1 gap-4">
            {files.map((file, index) => (
              <div key={index} className="file">
                {renderFileContent(file)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
