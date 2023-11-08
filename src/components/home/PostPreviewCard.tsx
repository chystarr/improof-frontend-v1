import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function PostPreviewCard() {
  return (
    <Card className="w-4/5 border-2 flex flex-row">
      <Avatar className="h-16 w-16 ml-4 my-4">
        <AvatarFallback>X</AvatarFallback>
      </Avatar>

      <div>
        <CardHeader className="flex flex-row items-center">
          <div className="flex flex-col items-left">
            <div className="flex flex-row space-x-3">
              <p className="font-medium">Your Name</p>
              <p className="text-gray-300">@username</p>
              <p className="text-gray-300">-</p>
              <p className="text-gray-300">timestamp</p>
            </div>
            <div className="font-semibold text-lg text-purple">
              timeline title
            </div>
            <div>tags/categories here</div>
          </div>
        </CardHeader>

        <CardContent className="">
          <div className="flex flex-col items-center space-y-8">
            <img
              src="/smiley-face.png"
              className="h-72 w-96 border-2 rounded-lg"
            />

            <div className="flex flex-row items-center">
              <img
                src="https://media.istockphoto.com/id/1413985191/photo/bengal-cat-looking-up-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ALBZdi9lmDFiAuZjoZkT4EMEuRlRVe2_8KjtpepyF5s="
                alt="Cat (placeholder)"
                className="h-32 w-48 border-2 rounded-lg"
              />
              <hr className="w-10 border-2" />
              <img
                src="https://media.istockphoto.com/id/1413985191/photo/bengal-cat-looking-up-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ALBZdi9lmDFiAuZjoZkT4EMEuRlRVe2_8KjtpepyF5s="
                alt="Cat (placeholder)"
                className="h-32 w-48 border-2 rounded-lg"
              />
              <hr className="w-10 border-2" />
              <img
                src="https://media.istockphoto.com/id/1413985191/photo/bengal-cat-looking-up-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ALBZdi9lmDFiAuZjoZkT4EMEuRlRVe2_8KjtpepyF5s="
                alt="Cat (placeholder)"
                className="h-32 w-48 border-2 rounded-lg"
              />
            </div>
          </div>
        </CardContent>

        <CardFooter>icons here</CardFooter>
      </div>
    </Card>
  );
}
