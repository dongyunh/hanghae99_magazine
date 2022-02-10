import React from "react";
import { useHistory } from "react-router-dom";

import Post from "../components/Post";
const PostList = (props) => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Post />
      <button
        onClick={() => {
          history.push("/login");
        }}
      >
        로그인페이지
      </button>
      <button
        onClick={() => {
          history.push("/signup");
        }}
      >
        회원가입페이지
      </button>
    </React.Fragment>
  );
};

export default PostList;
