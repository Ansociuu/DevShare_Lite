// frontend/pages/index.js
import axios from 'axios';
import PostCard from '../components/PostCard';

const HomePage = ({ posts }) => {
  return (
    <div>
      <h1>Welcome to DevShare Lite</h1>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Gọi API từ backend để lấy danh sách bài viết
  const res = await axios.get('https://laughing-pancake-v6v49jgq7x4p26p6r-3000.app.github.dev/posts');
  const posts = res.data;

  return { props: { posts } };
}

export default HomePage;
