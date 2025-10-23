import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../App";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostForm: React.FC<Props> = ({ posts, setPosts }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const editPost = posts.find((p) => p.id === Number(id));

  const [title, setTitle] = useState(editPost?.title || "");
  const [author, setAuthor] = useState(editPost?.author || "");
  const [thumbnail, setThumbnail] = useState(editPost?.thumbnail || "");
  const [content, setContent] = useState(editPost?.content || "");
  const [category, setCategory] = useState(editPost?.category || "Công nghệ");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title.length < 10 || author.length < 3 || content.length < 50) {
      alert("Vui lòng nhập đúng yêu cầu!");
      return;
    }

    if (editPost) {
      const updated = posts.map((p) =>
        p.id === editPost.id
          ? { ...p, title, author, thumbnail, content, category }
          : p
      );
      setPosts(updated);
      alert("Cập nhật thành công!");
      navigate(`/posts/${editPost.id}`);
    } else {
      const newPost: Post = {
        id: Date.now(),
        title,
        author,
        thumbnail,
        content,
        category,
        date: new Date().toISOString().split("T")[0],
      };
      setPosts([newPost, ...posts]);
      alert("Đăng bài thành công!");
      navigate("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h2>{editPost ? "Chỉnh sửa bài viết" : "Tạo bài viết mới"}</h2>
      <input
        placeholder="Tiêu đề (ít nhất 10 ký tự)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Tác giả (ít nhất 3 ký tự)"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        placeholder="URL ảnh thumbnail"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      />
      <textarea
        placeholder="Nội dung (ít nhất 50 ký tự)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "5px" }}
      >
        <option>Công nghệ</option>
        <option>Du lịch</option>
        <option>Ẩm thực</option>
        <option>Đời sống</option>
        <option>Khác</option>
      </select>
      <div>
        <button type="submit" style={{ marginRight: "10px" }}>
          {editPost ? "Cập nhật" : "Đăng bài"}
        </button>
        <button type="button" onClick={() => navigate("/")}>
          Hủy
        </button>
      </div>
    </form>
  );
};

export default PostForm;
