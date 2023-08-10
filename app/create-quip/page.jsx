"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Form from "@/components/Form";

const CreateQuip = () => {
    const router = useRouter();
    const {data: session}= useSession()

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    quip: "",
    tag: "",
  });
  const createQuip = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    if(!session){
        return alert("Sign in required.",router.push('/'))
    }
    try{
        const response = await fetch('/api/quip/new',{
            method:'POST',
            body: JSON.stringify({
                quip:post.quip,
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
      handleSubmit={createQuip}
    />
  );
};

export default CreateQuip;
