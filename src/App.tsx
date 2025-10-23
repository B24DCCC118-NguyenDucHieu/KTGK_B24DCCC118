import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import PostForm from "./components/PostForm";

export interface Post {
  id: number;
  title: string;
  author: string;
  thumbnail: string;
  content: string;
  category: string;
  date: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Công nghệ AI đang thay đổi thế giới",
      author: "Nguyễn Minh",
      thumbnail: "https://picsum.photos/300/200?1",
      content:
        "Trí tuệ nhân tạo (AI) đang thay đổi cách con người làm việc và sinh hoạt...",
      category: "Công nghệ",
      date: "2025-10-20",
    },
    {
      id: 2,
      title: "Du lịch Đà Lạt mùa thu",
      author: "Lê Hạnh",
      thumbnail: "https://picsum.photos/300/200?2",
      content:
        "Đà Lạt luôn là điểm đến lý tưởng với không khí mát mẻ, cảnh sắc thơ mộng...",
      category: "Du lịch",
      date: "2025-10-21",
    },
    {
      id: 3,
      title: "Ẩm thực đường phố Sài Gòn",
      author: "Trần Hòa",
      thumbnail: "https://picsum.photos/300/200?3",
      content:
        "Ẩm thực Sài Gòn là sự hòa quyện của nhiều nền văn hóa khác nhau...",
      category: "Ẩm thực",
      date: "2025-10-22",
    },
    {
      id: 4,
      title: "10 thói quen giúp sống khỏe hơn",
      author: "Phạm Dung",
      thumbnail: "https://picsum.photos/300/200?4",
      content:
        "Một lối sống lành mạnh giúp cơ thể khỏe mạnh và tinh thần sảng khoái hơn...",
      category: "Đời sống",
      date: "2025-10-23",
    },
    {
      id: 5,
      title: "Khám phá thế giới qua ống kính",
      author: "Bùi Khoa",
      thumbnail: "https://picsum.photos/300/200?5",
      content:
        "Nhiếp ảnh không chỉ là nghệ thuật, mà còn là cách lưu giữ ký ức tuyệt vời...",
      category: "Khác",
      date: "2025-10-24",
    },
  ]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList posts={posts} setPosts={setPosts} />} />
        <Route path="/create" element={<PostForm posts={posts} setPosts={setPosts} />} />
        <Route path="/posts/:id" element={<PostDetail posts={posts} setPosts={setPosts} />} />
        <Route path="/posts/edit/:id" element={<PostForm posts={posts} setPosts={setPosts} />} />
      </Routes>
    </div>
  );
};

export default App;
