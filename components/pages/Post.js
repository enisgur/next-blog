function Post({ post }) {
  if (!post) return "NO POST FOUND";

  return (
    <div className="post-detail-main">
      <div className="post-header">
        <div className="post-image">
          <img src={post.img} />
        </div>
        <h1 className="post-title">{post.title}</h1>
        <div className="post-infos">
          <p className="date">April 2021</p>
          <p className="read-time">10 min read</p>
          <p className="views">View 321</p>
        </div>

        <h2 className="post-subtitle">{post.subTitle}</h2>
        <div className="post-devider"></div>
      </div>

      <p className="post-details">{post.detail}</p>
    </div>
  );
}

export default Post;
