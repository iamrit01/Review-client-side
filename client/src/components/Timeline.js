import React, { useEffect, useState } from "react";
import "../css/Timeline.css";
import "../css/Searchbar.css";
import { SearchBar } from "./Index";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
  AiOutlineDelete,
} from "react-icons/ai";

const Timeline = (props) => {
  const [posts, setPosts] = useState([]);
  const [description, setDiscription] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [comments, setComments] = useState("");

  const handleSelete = async (value) => {
    const result = await geocodeByAddress(value);
    const latlin = await getLatLng(result[0]);

    setAddress(value);
    setCoordinates(latlin);
  };

  useEffect(() => {
    getPosts();
  });

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
    let formData = new FormData();
    formData.append("description", description);
    formData.append("categoryImage", image);
    formData.append("address", address);
    formData.append("longitude", coordinates.lng);
    formData.append("latitude", coordinates.lat);
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
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        id,
        likes,
      }),
    });
    let data = await res.json();
    if (!data || data.status === 401) {
      window.alert("Unauthorized User");
    } else if (data.status === 500) {
      window.alert("Server Error ");
    }
    getPosts();
  };

  const dislikePost = async (post_index) => {
    const id = posts[post_index]._id;
    const dislikes = posts[post_index].dislikes;
    const res = await fetch("/api/v1/post/dislike", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        id,
        dislikes,
      }),
    });
    let data = await res.json();
    if (!data || data.status === 401) {
      window.alert("Unauthorized User");
    } else if (data.status === 500) {
      window.alert("Server Error ");
    }
  };
  const deletePost = async (index) => {
    const id = posts[index]._id;
    const res = await fetch("/api/v1/post/delete", {
      method: "POST",
      headers: {
        Accept: "appllication/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
      credentials: "include",
    });
    await res.json();
    getPosts();
  };
  const submitComment = async (e, index) => {
    e.preventDefault();
    let post_id = posts[index]._id;
    let user_id = props.user._id;
    let content = comments;
    let res = await fetch("/api/v1/comment/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        post_id,
        user_id,
        content,
      }),
    });
    let data = await res.json();
    if (!data || data.status === 400) {
      window.alert("Unauthorized User");
    } else if (data.status === 500) {
      window.alert("server error !!!");
    }
  };
  console.log("posts ", posts);
  return (
    <div className="timeline">
      <div className="side_block">
        <div className="dark">
          <div className="profile_info">
            <div className="new_profile_info">
              <div className="avatar" id="user_avtar">
                <img src={`${props.user.profileImage}`} alt="user avatar" />
              </div>
              <div className="user_name" id="user_name_id">
                <h3>{`${props.user.name}`}</h3>
              </div>

              <div className="user_info">
                <p>Email : {`${props.user.email}`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="light"></div>
      </div>
      <div className="timeline_main_container">
        <div className="update_form_expanded">
          <form
            className="post_content_container"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="avatar_content_container">
              <div className="avatar">
                <img src={`${props.user.profileImage}`} alt="user avatar" />
              </div>
              <div>
                <div>
                  <SearchBar
                    address={address}
                    setAddress={setAddress}
                    coordinates={coordinates}
                    setCoordinates={setCoordinates}
                    handleSelete={handleSelete}
                  />
                </div>

                <div className="content_textarea">
                  <div className="new_content_textarea">
                    <input
                      type="text"
                      name="description"
                      value={description}
                      onChange={(e) => setDiscription(e.target.value)}
                      placeholder="Enter Reviews here..."
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons_container">
              <div className="new_image">
                <input
                  className="upload_box"
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
            </div>
          </form>
        </div>
        <div className="post_lists">
          {posts.map((post, index) => {
            return (
              <div key={index} className="post_item">
                <div className="item">
                  <div className="item_content_subheadlines">
                    <div className="user_profile">
                      <img
                        src={`${post.user.profileImage}`}
                        alt="user profile"
                      />
                    </div>
                    <div className="user_details">
                      <h4 className="user_name">{post.user.name}</h4>
                      <p>{post.address}</p>
                    </div>
                  </div>
                  <div className="item_content">
                    <div className="item_content_media">
                      <img src={`${post.image}`} alt="review related " />
                    </div>
                    <div className="item_description" id="item_description_id">
                      <p id="para_des_id">{post.Description}</p>
                    </div>
                  </div>
                </div>
                <div className="item_btns">
                  <div className="like_btn exprssion_btn">
                    <button onClick={() => likePost(index)}>
                      <AiOutlineLike size={35} margin={0} padding={0} />
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
                  <div className="exprssion_btn">
                    <button
                      className="comment_btn"
                      onClick={() => deletePost(index)}
                    >
                      <AiOutlineDelete size={35} />
                    </button>
                  </div>
                </div>
                <div className="address_searchbar">
                  <form>
                    <input
                      name="comment"
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      type="text"
                      placeholder="Enter You'r Thoughts"
                    />
                    <input
                      type="submit"
                      value="post"
                      onClick={() => submitComment(index)}
                    />
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
