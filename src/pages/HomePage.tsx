import { useState, useEffect } from "react";

import PostPreviewCard from "@/components/home/PostPreviewCard";
import OptionsCard from "@/components/home/OptionsCard";

export default function HomePage() {
  type PostContent = {
    id: number;
    content: string;
  };

  type Post = {
    id: number;
    title: string;
    postType: string;
    postContentId: number;
    timelineId: number;
    postContent: PostContent;
  };

  const [posts, setPosts] = useState<Post[]>([]);

  async function getData() {
    try {
      let response = await fetch("http://localhost:8000/posts");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      <div className="h-32 w-full border-b-2">
        move home page top bar content back here
      </div>

      <div className="w-full flex flex-col items-center border-x-2 space-y-6 pt-6 bg-contentBackground">
        <OptionsCard />

        <PostPreviewCard />
        <PostPreviewCard />
        <PostPreviewCard />
      </div>
    </div>
  );
}
