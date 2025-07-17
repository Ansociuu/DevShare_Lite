// frontend/pages/post/[id].js
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const PostDetail = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  const res = await axios.get(`https://laughing-pancake-v6v49jgq7x4p26p6r-3000.app.github.dev/posts/${id}`);
  const post = res.data;

  return { props: { post } };
}

export default PostDetail;
