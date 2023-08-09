"use client";

import Image from "next/image";
import { useState } from "react";

const QuipCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState("");

  const handleCopy=()=>{
    setCopied(post.quip)
    console.log(post.quip);
    navigator.clipboard.writeText(post.quip)
    setTimeout(() => setCopied(""), 4000);
  }

  return (
    <div className="quip_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-start gap-3 cursor-pointer">
          <Image
            className="rounded-full object-contain"
            src={post.creator.image}
            alt="user_img"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <h3 className=" font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.quip
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt="copy logo"
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.quip}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>
    </div>
  );
};

export default QuipCard;
