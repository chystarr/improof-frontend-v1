import PostPreviewCard from "@/components/home/PostPreviewCard";
import OptionsCard from "@/components/home/OptionsCard";

export default function HomePage() {
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
