import React, { Component } from "react";
import "../css/Home.css";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
} from "react-icons/ai";
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="profile_nav_container"></div>
        <div className="middle_container">
          <div className="heading">
            <h2>Home</h2>
          </div>

          <form className="post_content_container">
            <div className="content_textarea">
              <textarea
                rows={3}
                cols={73}
                placeholder="Enter Reviews here..."
              />
            </div>
            <div className="content_post_btn">
              <button>Post</button>
            </div>
          </form>

          <div className="post_lists">
            <div className="post_item">
              <div className="item_header">
                <div className="item_user">
                  <div className="user_img">
                    <img
                      id="user_dp"
                      src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                      alt="user_dp"
                    />
                  </div>
                  <div className="user_name">
                    <h4>John Doe</h4>
                  </div>
                </div>
                <div className="item_content">
                  <div className="item_headline">
                    <h3>Emirates Palace, Abu Dhabi, UAE</h3>
                  </div>
                  <div className="item_content_subheadlines">
                    <p>
                      The Burj Khalifa height is a staggering 828 meters (2716.5
                      feet) tall, soaring over Dubai. It's three times as tall
                      as the Eiffel Tower and nearly twice as tall as the Empire
                      State Building. Laid end to end, its pieces stretch over a
                      quarter of the way around the world.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item_content_media">
                <img src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyaiUyMGtoYWxpZmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              </div>
              <div className="item_btns">
                <div className="like_btn exprssion_btn">
                  <button>
                    <AiOutlineLike size={35} />
                  </button>
                  <div className="like_count count">
                    <span>30</span>
                  </div>
                </div>
                <div className="dislike_btn exprssion_btn">
                  <button className="like_btn">
                    <AiOutlineDislike size={35} />
                  </button>
                  <div className="like_count count ">
                    <span>2</span>
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
              {/* <div className="item_comment_section">
                <input type="text" placeholder="Enter Comments here..." />
              </div> */}
            </div>
          </div>
        </div>
        <div className="right_group_contaier"></div>
      </div>
    );
  }
}

export default Home;
