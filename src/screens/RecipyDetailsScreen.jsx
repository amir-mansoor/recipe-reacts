import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const RecipyDetailsScreen = () => {
  const { id } = useParams();
  const { recipies } = useSelector((state) => state.recipe);

  const recipy = recipies.find((recipy) => recipy.id === id);

  return (
    <div className="container mx-auto mt-10 max-h-max min-h-[80vh]">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div>
            <img
              src={recipy?.imgUrl}
              width="70%"
              className="rounded transition-all hover:scale-110 cursor-pointer "
            />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-700">{recipy?.name}</h1>
          <p className="mt-2">{recipy?.desc}</p>
          <p>Ingredients: </p>{" "}
          {recipy?.ing.map(
            (ing, idx) =>
              ing !== "" && (
                <p key={idx} className="mx-2">
                  {ing}
                </p>
              )
          )}
          <p>Level: {recipy?.level}</p>
          <p>For: {recipy?.value}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipyDetailsScreen;
