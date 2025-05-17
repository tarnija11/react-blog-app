import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    axios.get(`https://react-cart-app-production.up.railway.app/api/blogs/${id}`).then(res => {
      const blog = res.data;
      setTitle(blog.title);
      setContent(blog.content);
      setTags(blog.tags.join(', '));
    });
  }, [id]);

  const saveChanges = async () => {
    await axios.post('https://react-cart-app-production.up.railway.app/api/blogs/save-draft', {
      id,
      title,
      content,
      tags: tags.split(',').map(tag => tag.trim()),
    });
  };

  const publishPost = async () => {
    await axios.post('https://react-cart-app-production.up.railway.app/api/blogs/publish', {
      id,
      title,
      content,
      tags: tags.split(',').map(tag => tag.trim()),
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Edit Blog</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="block w-full my-2 p-2 border" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" className="block w-full my-2 p-2 border h-40" />
      <input value={tags} onChange={e => setTags(e.target.value)} placeholder="Tags" className="block w-full my-2 p-2 border" />
      <button onClick={saveChanges} className="bg-yellow-400 px-4 py-2 rounded mr-2">Save Changes</button>
      <button onClick={publishPost} className="bg-green-500 px-4 py-2 text-white rounded">Publish</button>
    </div>
  );
};

export default EditBlog;
