import React from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../App";

interface PostCardProps {
  post: Post;
  onDelete: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="post-card">
      <img src={post.thumbnail} alt={post.title} />
      <h3>{post.title}</h3>
      <p className="meta">
        {post.author} - {post.date}
      </p>
      <p>{post.content.slice(0, 100)}...</p>
      <div className="card-actions">
        <button onClick={() => navigate(`/posts/${post.id}`)}>Đọc thêm</button>
        <button className="delete" onClick={() => onDelete(post.id)}>
          Xóa
        </button>
      </div>
    </div>
  );
};

export default PostCard;
