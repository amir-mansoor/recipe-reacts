import RecipyCard from "@/components/Card";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const { recipies } = useSelector((state) => state.recipe);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  function handleInputQuery(event){
    setSearchQuery(event.target.value);
    const filteredRecipes = recipies.filter(recipe => {
      const nameMatches = recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
  
      const ingredientsMatch = recipe.ing.some(ingredient =>
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      return nameMatches || ingredientsMatch;
    });
    setFilteredRecipes(filteredRecipes);
  }


  return (
    <div className="container mx-auto mt-10 max-h-max min-h-[80vh]">
      <h1 className="font-bold text-4xl">Latest Recepies</h1>
      <input
        className="mt-5 block w-[50%] pl-5 pr-4 py-2 border rounded-[6px] border-gray-300 bg-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        type="text"
        placeholder="Search recipes here"
        onChange={handleInputQuery} 
      />
      {(filteredRecipes == 0 && searchQuery !== '') && <h1 className="p-4 text-lg font-bold">No Recipe Found....</h1>}
      {(filteredRecipes > 0 && searchQuery !== '') && filteredRecipes.map((recipy, index) => {
        <RecipyCard key={index} recipy = {recipy} />
      })}
      <div className="grid grid-cols-4">
        {recipies?.map((recipy, idx) => (
          <Link to={`/recipy/${recipy.id}`}>
            <RecipyCard key={idx} recipy={recipy} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
