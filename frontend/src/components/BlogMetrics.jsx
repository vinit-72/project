import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/MainPage.css';

const BlogMetrics = ({ likes = 1, comments = 0, isLiked = false, onLike, onComment }) => {
  // Animation variants
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <div className="blog-metrics-container">
      <div className="blog-metrics-wrapper">
        <motion.button 
          className={`metric-button like-button ${isLiked ? 'liked' : ''}`}
          onClick={onLike}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          aria-label="Like post"
        >
          <i className={`fas fa-heart ${isLiked ? 'liked' : ''}`}></i>
          <span>{likes}</span>
        </motion.button>

        <motion.button 
          className="metric-button comment-button"
          onClick={onComment}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          aria-label="Comment on post"
        >
          <i className="fas fa-comment"></i>
          <span>{comments}</span>
        </motion.button>
      </div>
    </div>
  );
};

export default BlogMetrics; 