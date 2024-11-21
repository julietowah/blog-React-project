import React, { useState, useEffect } from 'react';
import moment from 'moment';


const Bloglist = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlog = async () => {
      // const { data } = await callApi('http://localhost:8000/api')
      const response = await fetch('http://localhost:8000/api');
      const data = await response.json();
      setBlogs(data);
    };
    fetchBlog();
  }, []);

  
// 
  return (

    
    <div className="container mx-auto p-4 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <h4 className="text-l font-semibold mb-2">{moment(blog.published).format('YYYY-MM-DD')}</h4>
                  <p className="text-gray-700">{blog.excerpt.substring(0, 150)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
          <ul className="mb-8">
            {latestNews.map((news, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-lg font-medium text-blue-600">{news.title}</h3>
                <p className="text-sm text-gray-500">{news.date}</p>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="mb-2">
                <a href="#" className="text-blue-600 hover:underline">{category}</a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  )



}
export default Bloglist