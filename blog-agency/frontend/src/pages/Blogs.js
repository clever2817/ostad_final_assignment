import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then((response) => setBlogs(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Our Blogs</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-gray-600 text-sm">By {blog.author} on {new Date(blog.date).toLocaleDateString()}</p>
            <p className="mt-2">{blog.content.substring(0, 100)}...</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blogs;
