import { Outlet } from "react-router-dom";

import { LeftSidebar, RightSidebar } from "./index.ts";

interface LayoutProps {
  content: React.ReactNode;
}

export default function Layout({ content }: LayoutProps) {
  return (
    <div className="flex h-screen justify-center">
      <LeftSidebar />
      <div className="w-2/3">
        {content}
        <Outlet />
      </div>
      <RightSidebar />
    </div>
  );
}
