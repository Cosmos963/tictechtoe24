import React from "react";
import { motion } from "framer-motion";

export default function PostAdder() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [tags, setTags] = React.useState(""); // State to store tags
  const [files, setFiles] = React.useState([]);
  const [darkMode, setDarkMode] = React.useState(true);

  const handleAddPost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("tags", tags); // Append tags to form data

    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Post added successfully!");
        setTitle("");
        setContent("");
        setTags(""); // Reset tags
        setFiles([]);
      } else {
        console.error("Failed to add post");
      }
    } catch (error) {
      console.error("Error in adding post:", error);
    }
  };

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const renderFileContent = (file) => {
    const fileUrl = URL.createObjectURL(file);

    if (file.type.startsWith("image/")) {
      return (
        <motion.img
          src={fileUrl}
          alt={file.name}
          className="w-full h-auto mt-2"
          style={{ maxHeight: "400px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      );
    } else if (file.type === "application/pdf") {
      return (
        <motion.iframe
          src={fileUrl}
          className="w-full mt-2"
          style={{ height: "500px" }}
          title={file.name}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        ></motion.iframe>
      );
    } else if (file.type.startsWith("video/")) {
      return (
        <motion.video
          src={fileUrl}
          controls
          className="w-full mt-2"
          style={{ maxHeight: "400px" }}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.video>
      );
    } else {
      return (
        <motion.a
          href={fileUrl}
          download
          className="mt-2 text-blue-500"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {file.name}
        </motion.a>
      );
    }
  };

  return (
    <>
      <motion.div
        className={`w-full h-full p-10 cont font-poppins ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={`w-full h-full p-10 rounded-lg shadow-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex justify-end mb-4">
            <button
              className="p-2 font-semibold text-white bg-blue-500 rounded-lg"
              onClick={() => setDarkMode(!darkMode)}
            >
              Toggle {darkMode ? "Light" : "Dark"} Mode
            </button>
          </div>
          <h1 className="text-3xl font-bold text-center">Add a Post</h1>
          <motion.form
            className="mt-10"
            onSubmit={handleAddPost}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col">
              <label htmlFor="title" className="text-lg font-semibold">
                Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="title"
                name="title"
                className={`p-2 mt-2 border rounded-lg ${
                  darkMode
                    ? "border-gray-700 bg-black text-white"
                    : "border-gray-300 bg-white"
                }`}
                required
              />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="content" className="text-lg font-semibold">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                id="content"
                name="content"
                className={`p-2 mt-2 border rounded-lg ${
                  darkMode
                    ? "border-gray-700 bg-gray-700 bg-black "
                    : "border-gray-300 bg-white"
                }`}
                required
              ></textarea>
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="tags" className="text-lg font-semibold">
                Tags (comma-separated)
              </label>
              <input
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                type="text"
                id="tags"
                name="tags"
                placeholder="e.g., react, javascript, web development"
                className={`p-2 mt-2 border rounded-lg ${
                  darkMode
                    ? "border-gray-700 bg-black text-white "
                    : "border-gray-300 bg-white text-black"
                }`}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="file-upload" className="text-lg font-semibold">
                Upload Files
              </label>
              <input
                type="file"
                id="file-upload"
                name="file-upload"
                className={`p-2 mt-2 border rounded-lg ${
                  darkMode
                    ? "border-gray-700 bg-gray-700 text-white"
                    : "border-gray-300 bg-white"
                }`}
                onChange={handleFileChange}
                multiple
                accept=".jpg,.jpeg,.png,.pdf,.mp4"
              />
            </div>

            <div className="mt-5">
              <motion.button
                type="submit"
                className="p-2 font-semibold text-white bg-blue-500 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Post
              </motion.button>
              <motion.button
                type="button"
                className="p-2 ml-2 font-semibold text-white bg-red-500 rounded-lg"
                onClick={() => {
                  setTitle("");
                  setContent("");
                  setTags(""); // Reset tags
                  setFiles([]);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
            </div>
          </motion.form>

          <div className="mt-5">
            <h1 className="text-2xl font-bold">Preview</h1>
            <motion.div
              className={`p-5 mt-5 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-xl font-bold">{title}</h1>
              <p className="mt-2">{content}</p>
              <p className="mt-2">
                <strong>Tags:</strong> {tags}
              </p>
              <div className="mt-5">
                {files.length > 0 && (
                  <>
                    <h2 className="mt-5 text-lg font-semibold">Files:</h2>
                    <ul>
                      {files.map((file, index) => (
                        <li key={index} className="mt-2">
                          {renderFileContent(file)}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
