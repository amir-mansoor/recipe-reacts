import RecipyCard from "@/components/Card";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const { recipies } = useSelector((state) => state.recipe);
  return (
    <div className="container mx-auto mt-10 max-h-max">
      <h1 className="font-bold text-4xl">Latest Recepies</h1>
      <div className="grid grid-cols-4">
        {recipies?.map((recipy) => (
          <RecipyCard recipy={recipy} />
        ))}
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
      </div>
    </div>
  );
};

export default HomeScreen;
