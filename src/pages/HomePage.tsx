// import TopBar from '../components/home/TopBar'
import PostPreviewCard from "@/components/home/PostPreviewCard";

export default function HomePage() {
  return (
    <div className="h-full w-full">
      {/* TOOD: fix border "intersection" */}
      <div className="h-32 w-full">
        move home page top bar content back here
      </div>

      <div className="w-full flex flex-col items-center space-y-4 bg-contentBackground">
        <PostPreviewCard />
        <PostPreviewCard />
        <PostPreviewCard />
      </div>
    </div>
  );
}
