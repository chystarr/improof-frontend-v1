import { Card, CardContent } from "@/components/ui/card";

export default function OptionsCard() {
  return (
    <Card className="w-4/5 border-2">
      <CardContent className="flex items-center justify-around">
        <p className="font-medium">CREATE NEW TIMELINE</p>
        <p className="font-medium">UPDATE A TIMELINE</p>
      </CardContent>
    </Card>
  );
}
