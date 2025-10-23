import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../App";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostDetail: React.FC<Props> = ({ posts, setPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <p style={{ padding: "20px" }}>Không tìm thấy bài viết.</p>;

  const handleDelete = () => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setPosts(posts.filter((p) => p.id !== post.id));
      navigate("/");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "700px",
        margin: "auto",
        lineHeight: "1.6",
      }}
    >
      <h2>{post.title}</h2>
      <p>
        <b>Tác giả:</b> {post.author} | <b>Ngày:</b> {post.date}
      </p>
      <img
        src={post.thumbnail}
        alt={post.title}
        style={{ width: "100%", borderRadius: "8px", margin: "10px 0" }}
      />
      <p>{post.content}</p>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => navigate("/")}>Quay lại</button>
        <button
          onClick={() => navigate(`/posts/edit/${post.id}`)}
          style={{ marginLeft: "10px" }}
        >
          Chỉnh sửa
        </button>
        <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
          Xóa
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
