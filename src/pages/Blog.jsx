import { useEffect, useState } from "react";


const Blog = () => {
  const [posts, setPosts] = useState(() => {
    try {
      const saved = localStorage.getItem("blogPosts");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to parse blogPosts from localStorage", e);
      return [];
    }
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("blogPosts", JSON.stringify(posts));
  }, [posts]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    if (editingId) {
      setPosts((prev) =>
        prev.map((post) =>
          post.id === editingId ? { ...post, title, description } : post
        )
      );
    } else {
      setPosts((prev) => [
        ...prev,
        {
          id: Date.now(),
          title: title.trim(),
          description: description.trim(),
          createdAt: new Date().toISOString(),
        },
      ]);
    }

    resetForm();
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setDescription(post.description);
    setEditingId(post.id);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Delete this post?");
    if (!confirmDelete) return;
    setPosts((prev) => prev.filter((post) => post.id !== id));
    if (editingId === id) {
      resetForm();
    }
  };

  return (
    <div className="blog-wrapper">
      <div className="blog-header">
        <div>
          <div className="blog-title">Blog Posts</div>
          <div className="blog-subtitle">
            A simple CRUD application to showcase my React knowledge, including the use of React state, hooks, and localStorage for persistent data storage. This project allows users to add, edit, and delete posts to demonstrate my ability to manage state and implement basic functionality.
          </div>
        </div>
      </div>

      <div className="blog-form">
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              className="form-control"
              placeholder="Enter post title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="form-control"
              rows="3"
              placeholder="Write a short description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary me-2">
            {editingId ? "Update Post" : "Add Post"}
          </button>
          {editingId && (
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={resetForm}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      {posts.length === 0 ? (
        <div className="blog-empty">
          No posts yet. Add a post above to see my React CRUD functionality in action, showcasing how I manage state, handle events, and persist data.
        </div>
      ) : (
        <div className="blog-grid">
          {posts
            .slice()
            .sort((a, b) => b.id - a.id)
            .map((post) => (
              <div key={post.id} className="blog-card">
                <div className="blog-card-header">
                  <div>
                    <div className="blog-card-title">{post.title}</div>
                    <div className="blog-card-description">
                      {post.description}
                    </div>
                    {post.createdAt && (
                      <div className="blog-meta">
                        {new Date(post.createdAt).toLocaleString()}
                      </div>
                    )}
                  </div>
                  <div className="icon-actions">
                    <button
                      type="button"
                      className="icon-button edit"
                      onClick={() => handleEdit(post)}
                      aria-label="Edit post"
                    >
                      <i className="bx bx-edit"></i>
                    </button>
                    <button
                      type="button"
                      className="icon-button delete"
                      onClick={() => handleDelete(post.id)}
                      aria-label="Delete post"
                    >
                      <i className="bx bx-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Blog;
