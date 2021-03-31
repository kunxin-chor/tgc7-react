import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function PostPage(props) {
  // useState's first argument must be
  // the default value
  const [posts, setPosts] = useState([]);

  // load in all posts via axios
  useEffect(() => {
    // useEffect cannot be async, so we declare
    // the async function to fetch all the posts
    // inside here and call it later.
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      setPosts(response.data);
    };

    // call the async function
    fetchPosts();
  }, []);

  return (
    <React.Fragment>
      <h1>Posts</h1>
      <ul class='list-group'>
        {
            posts.map(p => <li class='list-group-item'>{p.title}</li>)
        }
     </ul>
    </React.Fragment>
  );
}
