import React, { useState } from 'react';
import { Post } from './types/Post';
import { MainPage } from './components/MainPage';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  const updatePosts = (posts:Post[]) => {
    setPosts(posts);
  }

  return (
    <div>
      <MainPage posts={posts} updatePosts={updatePosts} />
    </div>
  );
}

export default App;
