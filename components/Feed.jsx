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
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

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

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    //! debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterQuips(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const filterQuips = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.quip)
    );
  };
  
  const handleTagClick = (tagValue)=>{
    setSearchText(tagValue)
    const searchResult = filterQuips(tagValue);
    setSearchedResults(searchResult);
  }

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
      {searchText ? (
        <QuipCardList data={searchedResults} handleTagClick={handleTagClick} />
      ) : (
        <QuipCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
