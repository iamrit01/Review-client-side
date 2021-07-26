import React, { Component, useEffect, useState } from "react";
import "../css/Timeline.css";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import axios from "axios";

import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
} from "react-icons/ai";
const Timeline = () => {
  const [posts, setPosts] = useState([]);
  const [description, setDiscription] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    getPosts();
  }, [...posts]);

  const getPosts = async () => {
    try {
      const res = await fetch("/api/v1/post/viewPosts", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setPosts(...posts, data.postData);
    } catch (err) {
      console.log("view Post error ", err);
    }
  };
  const upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append("categoryImage", files[0]);
    setImage(data);
  };

  const submitPost = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("description", description);
    formData.append("categoryImage", image);
    const res = await fetch("/api/v1/post/create", {
      method: "POST",
      body: formData,
    });
    let data = await res.json();
    if (!data || data.status === 401) {
      window.alert("Unauthorized User");
    } else if (data.status === 500) {
      window.alert("Server Error ");
    }
  };

  const likePost = async (post_index) => {
    const id = posts[post_index]._id;
    const likes = posts[post_index].likes;
    const res = await fetch("/api/v1/post/like", {
      method: "POST",
      headers: {
        Accept: "appllication/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        id,
        likes,
      }),
    });
    let data = res.json();
    if (!data || data.status === 401) {
      window.alert("Unauthorized User");
    } else if (data.status === 500) {
      window.alert("Server Error ");
    }
  };
  const dislikePost = async (post_index) => {
    const id = posts[post_index]._id;
    const dislikes = posts[post_index].dislikes;
    const res = await fetch("/api/v1/post/dislike", {
      method: "POST",
      headers: {
        Accept: "appllication/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        id,
        dislikes,
      }),
    });
    let data = res.json();
    if (!data || data.status === 401) {
      window.alert("Unauthorized User");
    } else if (data.status === 500) {
      window.alert("Server Error ");
    }
  };
  // handleDeletePost = (index) => {
  //   const id = this.state.posts[index]._id;
  //   axios
  //     .delete("/api/v1/post/delete", id)
  //     .then((response) => {
  //       console.log("delete response ", response);
  //     })
  //     .catch((err) => {
  //       console.log("delete api error ", err);
  //     });
  // };

  console.log("outter state posts ", posts);
  return (
    <div className="timeline">
      <div>
        <form
          className="post_content_container"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="content_textarea">
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDiscription(e.target.value)}
              placeholder="Enter Reviews here..."
              required
            />
          </div>
          <div>
            <input
              type="file"
              name="categoryImage"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>

          <div className="content_post_btn">
            <input
              type="submit"
              name="submit_post"
              value="Post"
              onClick={submitPost}
            />
          </div>
        </form>
      </div>
      <div className="post_lists">
        {posts.map((post, index) => {
          return (
            <div key={index} className="post_item">
              {/* <div className="item_user">
                  <div className="user_name">
                    <h4>{post.user.name}</h4>
                  </div>
                </div> */}

              <div className="item_content">
                <div className="item_content_subheadlines">
                  <h4>{post.user.name}</h4>
                  <p>{post.Description}</p>
                </div>
                <div className="item_content_media">
                  <img src={`${post.image}`} alt="..." />
                </div>
              </div>
              <div className="item_btns">
                <div className="like_btn exprssion_btn">
                  <button onClick={() => likePost(index)}>
                    <AiOutlineLike size={35} />
                  </button>
                  <div className="like_count count">
                    <span>{post.likes}</span>
                  </div>
                </div>
                <div className="dislike_btn exprssion_btn">
                  <button
                    onClick={() => dislikePost(index)}
                    className="like_btn"
                  >
                    <AiOutlineDislike size={35} />
                  </button>
                  <div className="like_count count ">
                    <span>{post.dislikes}</span>
                  </div>
                </div>
                <div className="comment_count exprssion_btn">
                  <button className="comment_btn">
                    <AiOutlineComment size={35} />
                  </button>
                  <div className="comment_count count">
                    <span>2</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
