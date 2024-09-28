import React from "react";

export default function PostAdder() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [files, setFiles] = React.useState([]);

  const handleAddPost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    files.forEach((file) => {
      formData.append("files", file);
    });

    // Add your API call here (fetch or axios) to submit formData
    // Assuming the response contains the uploaded file URLs
    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Post added successfully!");
        setTitle("");
        setContent("");
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
    const fileUrl = URL.createObjectURL(file); // Create a blob URL for the file

    if (file.type.startsWith("image/")) {
      // If it's an image file
      return (
        <img
          src={fileUrl}
          alt={file.name}
          className="mt-2 w-full h-auto"
          style={{ maxHeight: "400px" }} // Adjust image size
        />
      );
    } else if (file.type === "application/pdf") {
      // If it's a PDF file
      return (
        <iframe
          src={fileUrl}
          className="mt-2 w-full"
          style={{ height: "500px" }} // Adjust PDF height
          title={file.name}
        ></iframe>
      );
    } else if (file.type.startsWith("video/")) {
      // If it's a video file
      return (
        <video
          src={fileUrl}
          controls
          className="mt-2 w-full"
          style={{ maxHeight: "400px" }} // Adjust video size
        ></video>
      );
    } else {
      // For other file types
      return (
        <a href={fileUrl} download className="text-blue-500 mt-2">
          {file.name}
        </a>
      );
    }
  };

  return (
    <>
      <div className="cont w-full h-full p-10">
        <div className="w-full h-full bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center">Add a Post</h1>
          <form className="mt-10" onSubmit={handleAddPost}>
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
                className="p-2 mt-2 border border-gray-300 rounded-lg"
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
                className="p-2 mt-2 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="file-upload" className="text-lg font-semibold">
                Upload Files
              </label>
              <input
                type="file"
                id="file-upload"
                name="file-upload"
                className="p-2 mt-2 border border-gray-300 rounded-lg"
                onChange={handleFileChange}
                multiple
                accept=".jpg,.jpeg,.png,.pdf,.mp4" // Adjust according to the types you want to allow
              />
            </div>

            <div className="mt-5">
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-lg"
              >
                Post
              </button>
              <button
                type="button"
                className="bg-red-500 text-white p-2 rounded-lg ml-2"
                onClick={() => {
                  setTitle("");
                  setContent("");
                  setFiles([]);
                }}
              >
                Cancel
              </button>
            </div>
          </form>

          <div className="mt-5">
            <h1 className="text-2xl font-bold">Preview</h1>
            <div className="mt-5 p-5 bg-gray-100 rounded-lg">
              <h1 className="text-xl font-bold">{title}</h1>
              <p className="mt-2">{content}</p>
              <div className="mt-5">
                {files.length > 0 && (
                  <>
                    <h2 className="text-lg font-semibold mt-5">Files:</h2>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
