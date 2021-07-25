// import React from "react";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Img from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";

// // import Swiper core and required modules
// import SwiperCore, { Pagination } from "swiper/core";

// // install Swiper modules
// SwiperCore.use([Pagination]);

// import testPosts from "../contents/post.json";

function MainBlog({ posts, title }) {
  return (
    <div className="main-blog">
      <div className="bundle-posts">
        <h1 className="post-head-title">{title}</h1>
        {/* <div className="slider-posts"> */}
        <Swiper slidesPerView={4} spaceBetween={30} className="slider-posts">
          {posts.map((post, i) => {
            // if (i > 1) return null;
            return (
              <SwiperSlide key={post.id} className="slider-post">
                {/* <Img width={100} height={100} src={post.img} alt="post image" /> */}
                <img src={post.img} alt="post image" />
                <a href="#!" className="post-title">
                  {post.title}
                </a>
                <hr className="post-hr" />
                <p className="post-details">{post.detail}</p>
                <div className="action-buttons">
                  <a className="readmore" href="#!">
                    Read more
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* </div> */}

        {/* <div onclick="sliderScrollLeft()">left</div> */}
        {/* <div onclick="sliderScrollRight()">right</div> */}
      </div>
    </div>
  );
}

export default MainBlog;