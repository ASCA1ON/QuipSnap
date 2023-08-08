"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Form from "@/components/Form";

const CreateStory = () => {
    const router = useRouter();
    const {data: session}= useSession()

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    story: "",
    tag: "",
  });
  const createStory = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    // if(!session){
    //     router.push('/si')
    // }
    try{
        const response = await fetch('/api/story/new',{
            method:'POST',
            body: JSON.stringify({
                story:post.story,
                userId: session?.user.id,
                tag: post.tag
            })
        })
        if(response.ok){
            router.push('/')
        }
    }catch(error){
        console.log(error);
    }finally{
        setSubmitting(false)
    }
  };
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createStory}
    />
  );
};

export default CreateStory;
