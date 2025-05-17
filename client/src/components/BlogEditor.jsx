import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const BlogEditor = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [message, setMessage] = useState(''); 

  useEffect(() => {
    if (id) {
      axios.get(`react-cart-app-production.up.railway.app/api/blogs/${id}`)
        .then(res => {
          const blog = res.data;
          setTitle(blog.title);
          setContent(blog.content);
          setTags(blog.tags.join(', '));
        })
        .catch(err => console.error('Failed to fetch blog for editing:', err));
    }
  }, [id]);

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  const saveDraft = async () => {
    const payload = {
      title,
      content,
      tags: tags.split(',').map(tag => tag.trim()),
    };

    try {
      if (id) {
        await axios.put(`react-cart-app-production.up.railway.app/api/blogs/${id}`, payload);
        showMessage('Draft updated successfully');
      } else {
        await axios.post('react-cart-app-production.up.railway.app/api/blogs/save-draft', payload);
        showMessage('Draft saved successfully');
      }
    } catch (err) {
      console.error(err);
      showMessage('Error saving draft');
    }
  };

  const publishPost = async () => {
    const payload = {
      title,
      content,
      tags: tags.split(',').map(tag => tag.trim()),
    };

    try {
      if (id) {
        await axios.put(`react-cart-app-production.up.railway.app/api/blogs/${id}/publish`, payload);
        showMessage('Blog published successfully');
      } else {
        await axios.post('react-cart-app-production.up.railway.app/api/blogs/publish', payload);
        showMessage('Blog published successfully');
      }

      setTitle('');
      setContent('');
      setTags('');
    } catch (err) {
      console.error(err);
      showMessage('Error publishing blog');
    }
  };

  useEffect(() => {
    if (typingTimeout) clearTimeout(typingTimeout);
    if (title || content) {
      setTypingTimeout(setTimeout(() => {
        saveDraft();
      }, 5000));
    }
  }, [title, content, tags]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#afb5b5]">
      <div className="bg-white text-blue-900 w-[98vw] h-[95vh] rounded-xl shadow-md flex">
        <Navbar />

        <div className="flex-1 p-6 flex flex-col overflow-auto">
          <div className="flex-1 p-8 flex flex-col overflow-auto bg-white m-6 rounded-2xl shadow-xl">
  <h2 className="text-3xl font-bold mb-6 text-blue-900">
    {id ? 'Edit Blog' : 'New Blog'}
  </h2>

  {message && (
    <div className="bg-blue-100 text-blue-800 px-5 py-3 rounded-lg mb-6 border border-blue-300 shadow-sm">
      {message}
    </div>
  )}

  <input
    value={title}
    onChange={e => setTitle(e.target.value)}
    placeholder="Title"
    className="bg-[#F6F6F6] block w-full mb-4 p-4 rounded-xl shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
  />

  <textarea
    value={content}
    onChange={e => setContent(e.target.value)}
    placeholder="Content"
    className="bg-[#F6F6F6] block w-full mb-4 p-4 rounded-xl h-52 shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
  />

  <input
    value={tags}
    onChange={e => setTags(e.target.value)}
    placeholder="Tags (comma separated)"
    className="bg-[#F6F6F6] block w-full mb-4 p-3 rounded-xl shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
  />

  <div className="mt-6 flex gap-4">
    <button
      onClick={saveDraft}
      className="border border-gray-300 px-6 py-3 rounded-full text-gray-700 hover:bg-gray-100 transition"
    >
      Save Draft
    </button>
    <button
      onClick={publishPost}
      className="bg-blue-800 px-6 py-3 text-white rounded-full hover:bg-blue-900 transition"
    >
      Publish
    </button>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
