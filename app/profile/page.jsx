"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@/components/Profile";
import LoadingSpinner from "@/components/LoadingSpinner";

const MyProfile = () => {
  const { data: session } = useSession();
  const router = useRouter()
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setIsLoading(false)
      setPosts(data);
    };
    if (session?.user.id) {
      fetchPosts();
    }
  }, [session]);

  const handleEdit = (post) => {
    router.push(`/update-quip?id=${post._id}`)
  };

  const handleDelete = async (post) => {
    const confirmed = confirm("Are you sure you want to delete this quip?")
    if(confirmed){
      try{
        await fetch(`/api/quip/${post._id.toString()}`,{
          method:'DELETE'
        })
        const filteredPosts = posts.filter((p)=>p._id !== post._id)
        setPosts(filteredPosts)
      }catch(error){
        console.log(error)
      }
    }
  };

  return (
    <>
    <Profile
      name="My"
      desc="Welcome back"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
    {isLoading && <LoadingSpinner />}
    </>
  );
};

export default MyProfile;
