import { Outlet } from "react-router-dom";

import { LeftSidebar, RightSidebar } from "./index.ts";

interface LayoutProps {
  content: React.ReactNode;
}

export default function Layout({ content }: LayoutProps) {
  return (
    <div className="flex h-screen w-screen justify-between bg-slate-200">
      <LeftSidebar />
      <div>
        {content}
        <Outlet />
      </div>
      <RightSidebar />
    </div>
  );
}
