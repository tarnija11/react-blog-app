import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import BlogCard from './BlogCard';

export default function BlogHome() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(res => {
        setBlogs(res.data);
      })
      .catch(err => {
        console.error('Error fetching blogs:', err);
      });
  }, []);

  // Filter only published blogs
  const publishedBlogs = blogs.filter(blog => blog.status === 'published');

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#afb5b5]">
      <div className="bg-white text-blue-900 w-[98vw] h-[95vh] rounded-xl shadow-md flex">
        {/* Left: Navbar */}
        <Navbar />

        {/* Right: Main content area */}
        <div className="flex-1 p-6 flex flex-col overflow-hidden">
          <h1 className="text-2xl font-bold mb-4 text-blue-900 flex-shrink-0">Published Blogs</h1>
          <div className="flex gap-6 flex-wrap overflow-y-auto p-3 flex-grow text-black">
            {publishedBlogs.length > 0 ? (
              publishedBlogs.map(blog => (
                <BlogCard key={blog._id} blog={blog} />
              ))
            ) : (
              <p>No published blogs yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
