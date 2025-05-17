import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogEditor from './components/BlogEditor';
import BlogHome from './components/BlogHome';
import EditBlog from './components/EditBlog';
import Drafts from './components/Drafts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogHome />} />
        <Route path="/new" element={<BlogEditor />} />
        <Route path="/drafts" element={<Drafts />} />
        <Route path="/edit/:id" element={<BlogEditor />} />
      </Routes>
    </Router>
  )
}

export default App
