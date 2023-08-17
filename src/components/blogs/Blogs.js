import "./blogs.scss";
import React, { useState } from "react";

const Blogs = (props) => {
  const [currentBlog, setCurrentBlog] = useState(0);

  const filteredBlogs = props.blogs.filter((blog) => {
    return (
      blog.published_at !== "2020-03-03T00:59:06Z" &&
      blog.published_at !== "2020-02-24T22:38:30Z"
    );
  });

  const handleClick = (slideDirection) => {
    if (slideDirection === "left") {
      setCurrentBlog(
        currentBlog > 0 ? currentBlog - 1 : filteredBlogs.length - 1
      );
    } else {
      setCurrentBlog(
        currentBlog < filteredBlogs.length - 1 ? currentBlog + 1 : 0
      );
    }
  };

  const renderBlogs = () => {
    return filteredBlogs.map((blog) => {
      return (
        <div key={blog.id} className="blog">
          <a href={blog.url} className="title">
            {blog.title}
          </a>
          <img
            src={blog.social_image}
            alt={blog.title}
            className="blogImage"
          ></img>
          <p>
            {blog.description} <a href={blog.url}>Read more.</a>
          </p>
          <p>
            {blog.readable_publish_date} | {blog.tags}
          </p>
          <p>{blog.public_reactions_count} reactions</p>
        </div>
      );
    });
  };

  return (
    <div className="blogs" id="blogs">
      <h1 className="blogsTitle">Blogs</h1>
      <img
        src="icons8-back-arrow-50.png"
        className="arrowLeft biggerSmallerLeft"
        onClick={() => handleClick("left")}
      />
      <img
        src="icons8-back-arrow-50.png"
        className="arrowRight biggerSmallerRight"
        onClick={() => handleClick("right")}
      />
      <div
        className="slider"
        style={{ transform: `translateX(-${currentBlog * 100}vw)` }} //won't move anywhere initially because initial state is set to 0, and 0 * 100 is still 0.
      >
        {filteredBlogs.map((blog) => (
          <div className="container">
            <div className="blog">
              <img src={blog.social_image} className="blogImage" />
              <div className="imageDiv"></div>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <a href={blog.url} className="readMoreLink">
                Read more.
              </a>
              <p>
                {blog.readable_publish_date} | {blog.tags}
              </p>
              <p>{blog.public_reactions_count} reactions</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
