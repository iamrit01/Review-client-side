import React, { Component } from "react";
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
class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        id: "",
        description: "",
        likes: 0,
        dislikes: 0,
      },
      posts: [],
    };
  }
  componentDidMount() {
    this.getPostData();
  }
  getPostData = () => {
    axios
      .get("/api/v1/post/viewPosts")
      .then((response) => {
        this.setState({
          posts: response.data.Data,
        });
        console.log("Data has been received! ", response.data.Data);
      })
      .catch(() => {
        console.log("Error retrieving data!!");
      });
  };

  handlePostSubmit = (e) => {
    e.preventDefault();
    console.log("on submiting the post, the state look like ", this.state.post);
    axios.post("/api/v1/post/create", this.state.post).then((response) => {
      console.log("create post response from axios ", response);
      return "";
    }).catch = (err) => {
      console.log("error from the post axios  ", err);
    };
  };
  handleDescriptionChanges = (e) => {
    console.log("e.targe.value ", e.target.value);
    const { user_id } = this.props;
    this.setState({
      post: {
        ...this.state.post,
        id: user_id,
        description: e.target.value,
      },
    });
  };

  render() {
    console.log("timeline this.state", this.state);
    const { posts } = this.state;
    return (
      <div className="timeline">
        <nav className="timeline_navbar">
          <div className="profile_nav_container">
            <a href="/api/v1/profile/timeline" className="nav_link">
              <div className="nav_item">
                <div className="nav_item_icon">
                  <AiOutlineHome size={20} />
                </div>
                <div className="nav_item_title">Timeline</div>
              </div>
            </a>
            <a href="/api/v1/profile/view" className="nav_link">
              <div className="nav_item">
                <div className="nav_item_icon">
                  <FiUser size={20} />
                </div>
                <div className="nav_item_title">Profile</div>
              </div>
            </a>
            <a href="/api/v1/profile/notification" className="nav_link">
              <div className="nav_item">
                <div className="nav_item_icon">
                  <IoNotificationsOutline size={20} />
                </div>
                <div className="nav_item_title">Notification</div>
              </div>
            </a>
            <a href="/api/v1/profile/message" className="nav_link">
              <div className="nav_item">
                <div className="nav_item_icon">
                  <AiOutlineMessage size={20} />
                </div>
                <div className="nav_item_title">Message</div>
              </div>
            </a>
          </div>
        </nav>

        <div className="user_timeline">
          <div className="middle_container">
            <div className="heading">
              <h2>Home</h2>
            </div>

            <form className="post_content_container">
              <div className="content_textarea">
                <input
                  type="text"
                  name="description"
                  onChange={this.handleDescriptionChanges}
                  placeholder="Enter Reviews here..."
                  required
                />
              </div>
              <div className="content_post_btn">
                <button onClick={this.handlePostSubmit}>Post</button>
              </div>
            </form>

            {/* fetch data from the db add print it on the timeline page */}

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
                        <button>
                          <AiOutlineLike size={35} />
                        </button>
                        <div className="like_count count">
                          <span>{this.state.post.likes}</span>
                        </div>
                      </div>
                      <div className="dislike_btn exprssion_btn">
                        <button className="like_btn">
                          <AiOutlineDislike size={35} />
                        </button>
                        <div className="like_count count ">
                          <span>{this.state.post.dislikes}</span>
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
          <div className="right_group_container">
            <div className="group_container_lists ">
              <h3>Groups</h3>

              <div className="group_container_list_items nav_link">
                <div className="group_container_list_item_icon nav_item_icon">
                  <GrGroup size={20} />
                </div>
                <div className="group_container_list_item_heading nav_item_title">
                  International
                </div>
              </div>
              <div className="group_container_list_items nav_link">
                <div className="group_container_list_item_icon nav_item_icon">
                  <GrGroup size={20} />
                </div>
                <div className="group_container_list_item_heading nav_item_title">
                  National
                </div>
              </div>
              <div className="group_container_list_items nav_link">
                <div className="group_container_list_item_icon nav_item_icon">
                  <GrGroup size={20} />
                </div>
                <div className="group_container_list_item_heading nav_item_title">
                  Classmates
                </div>
              </div>
              <div className="group_container_list_items nav_link">
                <div className="group_container_list_item_icon nav_item_icon">
                  <GrGroup size={20} />
                </div>
                <div className="group_container_list_item_heading nav_item_title">
                  Friends Group
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timeline;
