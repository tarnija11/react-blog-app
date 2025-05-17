import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import BlogCard from './BlogCard';

export default function DraftsPage() {
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(res => {
        const draftBlogs = res.data.filter(blog => blog.status === 'draft');
        setDrafts(draftBlogs);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#afb5b5]">
      <div className="bg-white text-blue-900 w-[98vw] h-[95vh] rounded-xl shadow-md flex">
        <Navbar />

        <div className="flex-1 p-6 flex flex-col overflow-hidden">
          <h1 className="text-2xl font-bold mb-4 text-black flex-shrink-0">Draft Blogs</h1>
          <div className="flex gap-6 flex-wrap overflow-y-auto p-3 flex-grow">
            {drafts.length ? drafts.map(blog => (
              <BlogCard key={blog._id} blog={blog} isDraft />
            )) : <p>No drafts found.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
