"use client";

import { useEffect, useState } from "react";
import QuipCard from "./QuipCard";

const QuipCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 quip_layout">
      {data.map((post) => (
        <QuipCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/quip");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex center">
        <input
          type="text"
          className="peer search_input"
          placeholder="Seatch for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>
      <QuipCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default feed;
