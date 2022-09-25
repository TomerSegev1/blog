import {Button} from '@mui/material';
import React, { FunctionComponent, useState } from 'react';
import { NewPost } from './Post/NewPost';
import { Post } from '../types/Post';

export type mainPageProps = {
    posts: Post[]
    updatePosts: (posts: Post[]) => void
}

export const MainPage:FunctionComponent<mainPageProps> = ({posts, updatePosts}:mainPageProps) => {
  const [openPost, setOpenPost] = useState(false);
  const handleOpenPost = () => setOpenPost(true);
  const handleClose = () => setOpenPost(false);

  const createPost = (data: any) => {
    const tempPost : Post = {title: data.title, date: data.date, author: data.author, category: data.category, content: data.content, image: data.Image}
    posts.push(tempPost);
    updatePosts([...posts]);
    console.log(posts);
  }

  return (
    <div>
      <Button onClick={handleOpenPost}>add post</Button>
      { openPost &&
        <div>
          <NewPost addPost={createPost} handleCloseModal={handleClose}/>
        </div>
      }
    </div>
  );
}

