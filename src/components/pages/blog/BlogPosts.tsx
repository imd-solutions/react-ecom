import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { iPost } from "../../../types/Post";
import PostService from "../../../services/PostService";

export default function BlogPosts() {
  const [posts, setPosts] = useState<iPost[]>([]);

  const humanReadable = (date: string) => {
    // const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(date).toLocaleDateString();
  };

  useEffect(() => {
    const posts = async () => {
      const response = await PostService.getFeaturedPosts();
      setPosts(response.data);
    };
    posts();
  }, []);

  return (
    <section className="mt-5 mb-4">
      <div className="container text-dark">
        <header className="mb-4">
          <h3>Blog posts</h3>
        </header>

        <Row>
          {posts.map((post, i) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={i}>
              <article style={{ minHeight: "375px", position: "relative" }}>
                <a href="#" className="img-fluid">
                  <img
                    className="rounded w-100"
                    src={post.image}
                    style={{ objectFit: "cover" }}
                    height="160px"
                  />
                </a>
                <div className="mt-2 text-muted small d-block mb-1">
                  <span>
                    <i className="fa fa-calendar-alt fa-sm"></i>
                    {humanReadable(post.date)}
                  </span>
                  <a href="#">
                    <h6 className="text-dark">{post.title}</h6>
                  </a>
                  <p>{post.excerpt}</p>
                </div>
                <button
                  className="btn btn-primary"
                  style={{ position: "absolute", bottom: "0px" }}
                >
                  Read More
                </button>
              </article>
            </div>
          ))}
        </Row>
      </div>
    </section>
  );
}
