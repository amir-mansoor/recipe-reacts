import RecipyCard from "@/components/Card";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const { recipies } = useSelector((state) => state.recipe);

  return (
    <div className="container mx-auto mt-10 max-h-max min-h-[80vh]">
      <h1 className="font-bold text-4xl">Latest Recepies</h1>
      <div className="grid grid-cols-4">
        {recipies?.map((recipy) => (
          <RecipyCard recipy={recipy} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
