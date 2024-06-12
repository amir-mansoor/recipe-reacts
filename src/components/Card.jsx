import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gauge } from "lucide-react";
import { Link } from "react-router-dom";

const RecipyCard = ({ recipy }) => {
  return (
    <Link to={`recipy/${recipy?.id}`}>
      <Card>
        <CardHeader>
          <img
            src={recipy?.imgUrl}
            className="w-40 h-40 object-cover rounded cursor-pointer transition-all hover:scale-125 "
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl">{recipy?.name}</CardTitle>
        </CardContent>
        <CardFooter>
          <Gauge /> <span className="ml-2">{recipy?.level}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RecipyCard;
