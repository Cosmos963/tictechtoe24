import React from "react";
import Post from "./PostAdder"; // Adjust path as needed

export default function PostsList() {
  // Example posts data (Replace this with your actual data)
  const posts = [
    {
      title: "Introduction to React",
      author: "John Doe",
      createdAt: "2024-09-24T12:34:56",
      content:
        "React is a popular JavaScript library for building user interfaces.",
      files: [
        {
          type: "image/jpeg",
          url: "https://example.com/react-intro.jpg",
          name: "React Introduction Image",
        },
      ],
    },
    {
      title: "Understanding Node.js",
      author: "Jane Smith",
      createdAt: "2024-09-23T10:20:30",
      content:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      files: [
        {
          type: "application/pdf",
          url: "https://example.com/nodejs.pdf",
          name: "Node.js Guide",
        },
      ],
    },
  ];

  return (
    <div className="posts-list w-full h-full p-10 bg-gray-100">
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          author={post.author}
          createdAt={post.createdAt}
          content={post.content}
          files={post.files}
        />
      ))}
    </div>
  );
}
