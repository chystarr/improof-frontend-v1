import Button from "@/components/ui/button";
import { Home, Search, Heart } from "react-feather";

export default function LeftSidebar() {
  return (
    <div className="h-full w-1/6 fixed top-0 left-0 flex flex-col items-center">
      <div className="h-32 p-4">
        <img src="/improof-logo.png" />
      </div>
      <div className="flex-grow w-full pt-12 px-4 space-y-2">
        <Button variant="sidebarOption" className="w-full px-4 justify-start">
          <Home className="mr-2" />
          HOME
        </Button>
        <Button variant="sidebarOption" className="w-full px-4 justify-start">
          <Search className="mr-2" />
          EXPLORE
        </Button>
        <Button variant="sidebarOption" className="w-full px-4 justify-start">
          <Heart className="mr-2" />
          BUTTON
        </Button>
        <Button variant="sidebarOption" className="w-full px-4 justify-start">
          <Heart className="mr-2" />
          BUTTON
        </Button>
        <Button variant="sidebarOption" className="w-full px-4 justify-start">
          <Heart className="mr-2" />
          BUTTON
        </Button>
        <Button variant="sidebarOption" className="w-full px-4 justify-start">
          <Heart className="mr-2" />
          BUTTON
        </Button>
        <div className="pt-6">post button :3</div>
      </div>
      <div>user info thing</div>
    </div>
  );
}
