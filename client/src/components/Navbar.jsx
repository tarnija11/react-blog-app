import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="bg-[#F6F6F6] text-gray-600 p-4 w-[15vw] h-full flex flex-col gap-10 rounded-xl">
      <Link
        to="/"
        className="p-2 font-bold cursor-pointer transition-all duration-200 transform hover:scale-110 hover:text-blue-500 hover:shadow-glow origin-left"
      >
        Blogs
      </Link>

      <Link
        to="/new"
        className="p-2 font-bold cursor-pointer transition-all duration-200 transform hover:scale-110 hover:text-blue-500 hover:shadow-glow origin-left"
      >
        Write
      </Link>

      <Link
        to="/drafts"
        className="p-2 font-bold cursor-pointer transition-all duration-200 transform hover:scale-110 hover:text-blue-500 hover:shadow-glow origin-left"
      >
        Drafts
      </Link>
    </nav>
  );
}
