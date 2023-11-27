import Button from "@/components/ui/button";
import {
  Home,
  Bell,
  Send,
  Heart,
  Bookmark,
  Flag,
  Clock,
  Settings,
} from "react-feather";

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
          <Bell className="mr-2" />
          NOTIFICATIONS
        </Button>
        <Button variant="sidebarOption" className="w-full px-4 justify-start">
          <Send className="mr-2" />
          MESSAGES
        </Button>
        <Button variant="sidebarOption" className="w-full px-4 justify-start">
          <Heart className="mr-2" />
          INSPIRATION
        </Button>
        <Button variant="sidebarOption" className="w-full px-4 justify-start">
          <Bookmark className="mr-2" />
          COLLECTIONS
        </Button>
        <Button variant="sidebarOption" className="w-full px-4 justify-start">
          <Flag className="mr-2" />
          GOALPOSTS
        </Button>
        <Button variant="sidebarOption" className="w-full px-4 justify-start">
          <Clock className="mr-2" />
          TIMELINES
        </Button>
        <Button variant="sidebarOption" className="w-full px-4 justify-start">
          <Settings className="mr-2" />
          SETTINGS
        </Button>
        <div className="pt-6 flex justify-center">
          <Button className="rounded-[30px] py-4 px-16 bg-[#DD1F3A] font-bold">
            POST
          </Button>
        </div>
      </div>
      <div>user info thing</div>
    </div>
  );
}
