"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@/components/Profile";
import LoadingSpinner from "@/components/LoadingSpinner";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [isLoading, setIsLoading] = useState(false);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setIsLoading(false)
      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <>
    <Profile
      name={`${userName}'s`}
      desc={`Welcome to ${userName}'s profile page. Explore ${userName}'s amazing quips and inspired by the power of their imagination`}
      data={userPosts}
    />
    {isLoading && <LoadingSpinner />}
    </>
  );
};

export default UserProfile;
