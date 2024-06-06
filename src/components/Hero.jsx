import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div className="px-4 py-6  space-y-6 sm:space-y-0 sm:gap-4">
        <div className="flex items-center">
          <div className=" text-black">
            <h2 className="text-4xl">Recipy</h2>
            <p className="mt-4 capitalize   leading-7">
              Welcome to Recipe Book, your personal culinary companion! This
              application is designed to help you organize, discover, and share
              your favorite recipes with ease. Whether you're a seasoned chef or
              a cooking enthusiast, Recipe Book offers a range of features to
              enhance your cooking experience.
            </p>

            <Link
              to="/"
              className="uppercase inline-block mt-8 text-sm py-2 px-4 rounded font-semibold bg-slate-600 text-white"
            >
              get start
            </Link>
          </div>
        </div>
        {/* Purpose */}
        <div>
          <h2 className="text-4xl mt-10">Purpose</h2>
          <p className="leading-7 mt-4">
            The primary purpose of Recipe Book is to provide a convenient and
            user-friendly platform for managing your recipes. With Recipe Book,
            you can:
          </p>

          <ul className="ml-6 list-disc space-y-2">
            <li>
              <span className="font-bold">Add and Organize Recipes:</span>{" "}
              Easily add new recipes with detailed information including
              ingredients, steps, cooking time, and images. Organize your
              recipes by categories such as Breakfast, Lunch, Dinner, and
              Desserts.
            </li>
            <li>
              <span className="font-bold">Search And Discover: </span>Quickly
              find recipes by searching for specific ingredients or recipe
              names. Discover new and popular recipes added by other users.
            </li>
            <li>
              <span className="font-bold">Favourites:</span> Mark recipes as
              favorites for quick access. Keep all your favorite recipes in one
              place.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
