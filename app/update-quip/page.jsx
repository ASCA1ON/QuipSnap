"use client";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import Form from "@/components/Form";

const EditQuip = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const quipId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    quip: "",
    tag: "",
  });

  useEffect(() => {
    const getQuip = async () => {
      const response = await fetch(`/api/quip/${quipId}`);
      const data = await response.json();
      setPost({
        quip: data.quip,
        tag: data.tag
      });
    };
    if(quipId) getQuip()
  }, [quipId]);

  const updateQuip = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if(!quipId){
        return alert("Invalid quip id.",router.push('/'))
    }
    //   userId: session?.user.id,
    try {
      const response = await fetch(`/api/quip/${quipId}`, {
        method: "PATCH",
        body: JSON.stringify({
          quip: post.quip,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push("/profile");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      type="Update"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateQuip}
    />
  );
};

export default EditQuip;
