import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gauge } from "lucide-react";

const RecipyCard = ({ recipy }) => {
  return (
    <Card>
      <CardHeader>
        <img
          src={recipy?.imgUrl}
          className="w-40 h-40 object-cover rounded cursor-pointer transition-all hover:scale-125 "
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl">{recipy?.name}</CardTitle>
        <p>{recipy?.desc}</p>
      </CardContent>
      <CardFooter>
        <Gauge /> <span className="ml-2">{recipy?.level}</span>
      </CardFooter>
    </Card>
  );
};

export default RecipyCard;
