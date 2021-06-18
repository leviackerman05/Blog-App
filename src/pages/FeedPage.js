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
          <h1>Become a wingman in one easy lesson!</h1>
        </div>
      </div>
      <div className="body">
        <div className="circle-image">
          <img width="100%" src="./Images/levi.jpg" />
        </div>
        <div className="author-info">
          <span className="postum-datum">
            <span className="name-color">Barney Stinson, </span>Wingman of Ted
            Mosby, Mclarens NYC
          </span>
          <br />
          <span className="post-date">17th June 2005</span>
        </div>
        <div className="blog-content">
          Barnabus "Barney" Stinson (born 1976), is one of the five main
          characters in How I Met Your Mother, portrayed by Neil Patrick Harris.
          He first meets Ted Mosby in MacLaren's Pub in 2001 then initiates
          himself as part of the gang, fancying himself as Ted's best friend,
          despite Ted's protests. After being burned in his early twenties by a
          girlfriend who left him for a businessman, Barney reinvents himself as
          a "suit" and a serial womanizer, who viciously rejects any form of
          commitment. He conducts elaborate acts of seduction and regularly
          engages in casual sex. As the series progresses, Barney is revealed to
          have unresolved childhood issues, specifically with his absent father,
          who he reconnects with in 2011. Barney's life of debauchery wears thin
          as he matures and experiences several serious relationships, in
          particular his on-off relationship with Robin. His elaborate seduction
          techniques are a constant source of humor (typically for Marshall),
          amazement (typically for Ted), and disgust (typically for Lily) for
          the group. Though most of his seduction plays are cold and
          mean-spirited, he is extremely caring toward friends and family, often
          using his wealth to help them out of tight spots. He is a key player
          in helping Marshall and Ted find high-paying jobs at GNB, and helps
          Robin stay in the United States when her VISA is almost cancelled. As
          of Last Forever, Barney and Robin divorced after three years marriage
          (2013 - 2016), being unable to maintain their relationship while
          Robin's career went global. In September 2019, Barney finds out he
          will become a father, after a one-night stand. He speaks of happily
          raising his daughter when he attends Ted and Tracy's wedding in 2020
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
