import React, { Component } from "react";
import "../css/Timeline.css";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";

import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
} from "react-icons/ai";
class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
        <nav className="timeline_navbar">
          <div className="profile_nav_container">
            <a className="nav_link">
              <div className="nav_item">
                <div className="nav_item_icon">
                  <AiOutlineHome size={20} />
                </div>
                <div className="nav_item_title">Timeline</div>
              </div>
            </a>
            <a className="nav_link">
              <div className="nav_item">
                <div className="nav_item_icon">
                  <FiUser size={20} />
                </div>
                <div className="nav_item_title">Profile</div>
              </div>
            </a>
            <a className="nav_link">
              <div className="nav_item">
                <div className="nav_item_icon">
                  <IoNotificationsOutline size={20} />
                </div>
                <div className="nav_item_title">Notification</div>
              </div>
            </a>
            <a className="nav_link">
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
                <textarea
                  rows={3}
                  // cols={98}
                  placeholder="Enter &#10;Reviews &#10;here... "
                />
                {/* <input type="text" placeholder="Enter Reviews here..." /> */}
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
                        The Burj Khalifa height is a staggering 828 meters
                        (2716.5 feet) tall, soaring over Dubai. It's three times
                        as tall as the Eiffel Tower and nearly twice as tall as
                        the Empire State Building. Laid end to end, its pieces
                        stretch over a quarter of the way around the world.
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
                      <h3>Central Park, New York</h3>
                    </div>
                    <div className="item_content_subheadlines">
                      <p>
                        Central Park is an urban park in New York City located
                        between the Upper West and Upper East Sides of
                        Manhattan. It is the fifth-largest park in the city by
                        area, covering 843 acres (341 ha).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item_content_media">
                  <img src="https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNlbnRyYWwlMjBwYXJrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
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
                      <h3>Angkor Wat, Cambodia</h3>
                    </div>
                    <div className="item_content_subheadlines">
                      <p>
                        Angkor Wat is an enormous Buddhist temple complex
                        located in northern Cambodia. ... Its name, which
                        translates to “temple city” in the Khmer language of the
                        region, references the fact it was built by Emperor
                        Suryavarman II, who ruled the region from 1113 to 1150,
                        as the state temple and political center of his empire
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item_content_media">
                  <img src="https://images.unsplash.com/photo-1569668723493-80d82b05bad7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
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
