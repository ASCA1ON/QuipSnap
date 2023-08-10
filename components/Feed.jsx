"use client";

import { useEffect, useState } from "react";
import QuipCard from "./QuipCard";
import LoadingSpinner from "./LoadingSpinner";

const QuipCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 quip_layout">
      {data.map((post) => (
        <QuipCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const response = await fetch("/api/quip");
      const data = await response.json();
      setPosts(data);
      setIsLoading(false);
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
      {isLoading && <LoadingSpinner />}
      <QuipCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
