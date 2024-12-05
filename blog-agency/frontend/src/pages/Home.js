import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then((response) => setBlogs(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Welcome to Blog Agency</h1>
      <section>
        {blogs.slice(0, 6).map((blog) => (
          <div key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.content.substring(0, 100)}...</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
