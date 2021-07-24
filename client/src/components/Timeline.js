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

  const submitPost = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/v1/post/create", {
      method: "POST",
      headers: {
        Accept: "appllication/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        description,
      }),
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
  // handleDislikeButton = (post_index) => {
  //   const postId = this.state.posts[post_index]._id;
  //   const dislikes = this.state.posts[post_index].dislikes;
  //   axios
  //     .post("/api/v1/post/dislike", { postId, dislikes })
  //     .then((response) => {
  //       console.log("dislike response ", response);
  //       this.setState({
  //         post: [
  //           ...this.state.posts.slice(0, post_index),
  //           {
  //             ...this.state.posts[post_index],
  //             dislikes: response.data.postDetails.dislikes,
  //           },
  //           ...this.state.posts.slice(post_index + 1),
  //         ],
  //       });
  //       this.getPostData();
  //     })
  //     .catch((err) => {
  //       console.log("dislike button api error ! ", err);
  //     });
  // };
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

  // console.log("timeline this.state", this.state);
  // const { posts } = this.state;
  console.log("outter state posts ", posts);
  return (
    <div>
      <form className="post_content_container" method="POST">
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
        <div className="content_post_btn">
          <input
            type="submit"
            name="submit_post"
            value="Post"
            onClick={submitPost}
          />
        </div>
      </form>
      <div className="post_lists">
        {posts.map((post, index) => {
          return (
            <div key={index} className="post_item">
              <div className="item_header">
                <div className="item_user">
                  <div className="user_name">
                    <h4>{post.user.name}</h4>
                  </div>
                </div>

                <div className="item_content">
                  <div className="item_content_subheadlines">
                    <p>{post.Description}</p>
                  </div>
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
                    onClick={() => this.handleDislikeButton(index)}
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
    // <div className="timeline">
    //   <nav className="timeline_navbar">
    //     <div className="profile_nav_container">
    //       <a href="/api/v1/profile/timeline" className="nav_link">
    //         <div className="nav_item">
    //           <div className="nav_item_icon">
    //             <AiOutlineHome size={20} />
    //           </div>
    //           <div className="nav_item_title">Timeline</div>
    //         </div>
    //       </a>
    //       {/* <a className="nav_link">
    //           <Route path="/profile" Component={Profile} />
    //           <div className="nav_item">
    //             <div className="nav_item_icon">
    //               <FiUser size={20} />
    //             </div>
    //             <div className="nav_item_title">Profile</div>
    //           </div>
    //         </a> */}

    //       <a href="/api/v1/profile/notification" className="nav_link">
    //         <div className="nav_item">
    //           <div className="nav_item_icon">
    //             <IoNotificationsOutline size={20} />
    //           </div>
    //           <div className="nav_item_title">Notification</div>
    //         </div>
    //       </a>
    //       <a href="/api/v1/profile/message" className="nav_link">
    //         <div className="nav_item">
    //           <div className="nav_item_icon">
    //             <AiOutlineMessage size={20} />
    //           </div>
    //           <div className="nav_item_title">Message</div>
    //         </div>
    //       </a>
    //     </div>
    //   </nav>

    //   <div className="user_timeline">
    //     <div className="middle_container">
    //       <div className="heading">
    //         <h2>Home</h2>
    //       </div>

    //       {/* fetch data from the db add print it on the timeline page */}

    //     </div>
    //     <div className="right_group_container">
    //       <div className="group_container_lists ">
    //         <h3>Groups</h3>

    //         <div className="group_container_list_items nav_link">
    //           <div className="group_container_list_item_icon nav_item_icon">
    //             <GrGroup size={20} />
    //           </div>
    //           <div className="group_container_list_item_heading nav_item_title">
    //             International
    //           </div>
    //         </div>
    //         <div className="group_container_list_items nav_link">
    //           <div className="group_container_list_item_icon nav_item_icon">
    //             <GrGroup size={20} />
    //           </div>
    //           <div className="group_container_list_item_heading nav_item_title">
    //             National
    //           </div>
    //         </div>
    //         <div className="group_container_list_items nav_link">
    //           <div className="group_container_list_item_icon nav_item_icon">
    //             <GrGroup size={20} />
    //           </div>
    //           <div className="group_container_list_item_heading nav_item_title">
    //             Classmates
    //           </div>
    //         </div>
    //         <div className="group_container_list_items nav_link">
    //           <div className="group_container_list_item_icon nav_item_icon">
    //             <GrGroup size={20} />
    //           </div>
    //           <div className="group_container_list_item_heading nav_item_title">
    //             Friends Group
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Timeline;
