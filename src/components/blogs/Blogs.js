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
      <img src="assets/icons8-back-arrow-50.png" className="arrowLeft" />
      <img src="assets/icons8-back-arrow-50.png" className="arrowRight" />
      <div className="slider">
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
