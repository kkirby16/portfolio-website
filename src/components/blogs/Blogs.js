import "./blogs.scss";

const Blogs = (props) => {
  console.log("What are props here?:", props.blogs);

  const renderBlogs = () => {
    return props.blogs.map((blog) => {
      return (
        <div key={blog.id} className="blog">
          <a href={blog.url} className="title">
            {blog.title}
            {console.log(blog.title)}
          </a>
          <img src={blog.social_image} alt={blog.title}></img>
        </div>
      );
    });
  };

  return (
    <div className="blogs" id="blogs">
      {renderBlogs()}
    </div>
  );
};

export default Blogs;
