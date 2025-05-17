import { useNavigate } from 'react-router-dom';

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  // Extract excerpt: first 100 chars of content + "..."
  const excerpt = blog.content.length > 100 ? blog.content.slice(0, 100) + "..." : blog.content;

  return (
    <div
      className="
        w-[220px] h-[320px]
        bg-white 
        rounded-2xl 
        shadow-lg 
        overflow-hidden 
        cursor-pointer
        transition-transform transition-shadow duration-300
        hover:shadow-2xl 
        hover:scale-105
        hover:z-10
        relative
      "
    >
      {/* Optional: use blog.image if you have it, else fallback */}
      <img
        className="w-full h-40 object-cover"
        src={blog.image || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"}
        alt={blog.title}
      />
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-200">
          {blog.title}
        </h2>
        <p className="text-gray-700 text-sm mb-4">
          {excerpt}
        </p>
      </div>

      {/* Edit button */}
      <button
        onClick={() => navigate(`/edit/${blog._id}`)}
        className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-700 transition"
      >
        Edit
      </button>
    </div>
  );
}
