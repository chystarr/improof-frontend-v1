// import { Search } from "react-feather";
import { Input } from "@/components/ui/input";

export default function RightSidebar() {
  return (
    <div className="h-full w-1/6 fixed top-0 right-0 flex flex-col items-center">
      <div className="h-32 px-2 pb-4 flex flex-col justify-end">
        {/* Add icon to search input component */}
        <Input className="rounded-[25px] h-8 outline outline-2 outline-black"></Input>
      </div>
      <div className="flex-grow w-full">make right sidebar widget things</div>
    </div>
  );
}
