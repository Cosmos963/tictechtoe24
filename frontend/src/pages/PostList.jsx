import React from "react";
import Post from "./Post"; // Adjust path as needed

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
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s",
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
          url: "https://www.anuragkapur.com/assets/blog/programming/node/PDF-Guide-Node-Andrew-Mead-v3.pdf",
          name: "Node.js Guide",
        },
      ],
    },
    {
      title: "Introduction to React",
      author: "John Doe",
      createdAt: "2024-09-24T12:34:56",
      content:
        "React is a popular JavaScript library for building user interfaces.",
      files: [
        {
          type: "image/jpeg",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s",
          name: "React Introduction Image",
        },
      ],
    },
    {
      title: "Introduction to React",
      author: "John Doe",
      createdAt: "2024-09-24T12:34:56",
      content:
        "React is a popular JavaScript library for building user interfaces.",
      files: [
        {
          type: "image/jpeg",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s",
          name: "React Introduction Image",
        },
      ],
    },
  ];

  return (
    <div className="posts-list container mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Posts
      </h1>
      <div className="flex flex-col gap-6">
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
    </div>
  );
}
