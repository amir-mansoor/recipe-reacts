import { useSelector } from "react-redux";
import RecipyCard from "@/components/Card";
import { Link } from "react-router-dom";
const FavouriteScreen = () => {
  const { recipies } = useSelector((state) => state.recipe);

  return (
    <div className="h-[80vh] overflow-x-auto container mt-10">
      <h1 className="text-4xl font-bold text-gray-600">Favourite Recipies</h1>
      <div className="grid grid-cols-4">
        {recipies.map(
          (recipy, idx) =>
            recipy.favourite && (
              <Link to={`/recipy/${recipy.id}`}>
                <RecipyCard key={idx} recipy={recipy} />
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default FavouriteScreen;
