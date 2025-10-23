import React from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../App";

interface PostListProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostList: React.FC<PostListProps> = ({ posts, setPosts }) => {
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>Danh sách bài viết ({posts.length})</h2>

      <button
        onClick={() => navigate("/create")}
        style={{
          padding: "6px 12px",
          marginBottom: 20,
          background: "blue",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        + Viết bài mới
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 15,
        }}
      >
        {posts.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: 6,
              padding: 10,
              background: "#fff",
            }}
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              style={{
                width: "100%",
                height: 160,
                objectFit: "cover",
                borderRadius: 4,
              }}
            />
            <h3>{p.title}</h3>
            <p style={{ fontSize: 13, color: "#555" }}>
              {p.author} • {p.date}
            </p>
            <p>{p.content.slice(0, 100)}...</p>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => navigate(`/posts/${p.id}`)}>Đọc thêm</button>
              <button onClick={() => handleDelete(p.id)}>Xóa</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
