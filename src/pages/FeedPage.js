import React from "react";
import Navbar from "../components/Navbar";
import "./FeedPage.css";

const FeedPage = () => {
  return (
    <div className="blog">
      <div className="header">
        <Navbar />
        <div className="blog-heading">
          <h5>Travel and Lifestyle</h5>
          <h1>Become a travel pro in one easy lesson!</h1>
        </div>
      </div>
      <div className="body">B</div>
    </div>
  );
};

export default FeedPage;
