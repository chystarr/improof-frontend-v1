import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function PostPreviewCard() {
  return (
    <Card className="w-4/5">
      <CardHeader className="flex flex-row items-center">
        <Avatar className="h-14 w-14 mr-4">
          <AvatarFallback>X</AvatarFallback>
        </Avatar>

        <div className="flex flex-col items-left">
          <div className="flex flex-row space-x-3">
            <div>name</div>
            <div>username</div>
            <div>timestamp</div>
          </div>
          <div>timeline title</div>
          <div>tags/categories here</div>
        </div>
      </CardHeader>

      <CardContent className="w-2">
        <img src="/smiley-face.png" className="h-24 w-32" />
      </CardContent>

      <CardFooter>icons here</CardFooter>
    </Card>
  );
}
