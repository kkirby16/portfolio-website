import "./blogs.scss";

const Blogs = (props) => {
  console.log("What are props here?:", props.blogs);

  const filteredBlogs = props.blogs.filter((blog) => {
    return (
      blog.published_at !== "2020-03-03T00:59:06Z" &&
      blog.published_at !== "2020-02-24T22:38:30Z"
    );
  });

  console.log("what is this variable?:", filteredBlogs);

  const renderBlogs = () => {
    return filteredBlogs.map((blog) => {
      return (
        <div key={blog.id} className="blog">
          <a href={blog.url} className="title">
            {blog.title}
            {console.log(blog.title)}
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
      <div className="slider">
        {filteredBlogs.map((blog) => (
          <div className="container">
            <div className="blog">
              <div className="left">
                <div className="leftContainer"></div>
              </div>
              <div className="right"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
