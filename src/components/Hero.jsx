import React from 'react';
import { Link } from 'react-router-dom';
import aboutUsImage from '../assets/palak.jpg';
const Hero = () => {
  return (
    // about us page
    <section>
      <section className='bg-gray-100'>
        <div className='container mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
            <div className='max-w-lg'>
              <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
                About Us
              </h2>
              <p className='mt-4 text-gray-600 text-lg'>
                Welcome To Recipe Book, Your Personal Culinary Companion! This
                Application Is Designed To Help You Organize, Discover, And
                Share Your Favorite Recipes With Ease. Whether You're A Seasoned
                Chef Or A Cooking Enthusiast, Recipe Book Offers A Range Of
                Features To Enhance Your Cooking Experience.
              </p>
              <div className='mt-8'>
                <Link
                  to='/'
                  className='uppercase inline-block  text-sm py-2 px-4 rounded font-semibold bg-slate-600 text-white'
                >
                  get start
                </Link>
              </div>
            </div>
            <div className='mt-12 md:mt-0'>
              <img
                src={aboutUsImage}
                alt='About Us Image'
                className='object-cover rounded-lg shadow-md'
              />
            </div>
          </div>
        </div>
      </section>
      <div className=' w-full bg-gray-100 flex flex-col items-center p-4'>
        <div className='w-full max-w-3xl bg-white rounded-lg shadow-md p-6'>
          <h1 className='text-4xl font-bold text-center text-gray-800 mb-6'>
            Recipe Book
          </h1>
          <p className='text-center text-gray-600 mb-8'>
            The primary purpose of Recipe Book is to provide a convenient and
            user-friendly platform for managing your recipes.
          </p>

          <div className='space-y-8'>
            {/* Feature 1 */}
            <div className='flex items-start'>
              <span className='flex-shrink-0 text-2xl font-bold text-gray-700 mr-4'>
                1.
              </span>
              <p className='text-gray-700'>
                Easily add new recipes with detailed information including
                ingredients, steps, cooking time, and images. Organize your
                recipes by categories such as Breakfast, Lunch, Dinner, and
                Desserts.
              </p>
            </div>

            {/* Feature 2 */}
            <div className='flex items-start'>
              <span className='flex-shrink-0 text-2xl font-bold text-gray-700 mr-4'>
                2.
              </span>
              <p className='text-gray-700'>
                Find recipes by searching for specific ingredients or recipe
                names. Discover new and popular recipes added by other users.
              </p>
            </div>

            {/* Feature 3 */}
            <div className='flex items-start'>
              <span className='flex-shrink-0 text-2xl font-bold text-gray-700 mr-4'>
                3.
              </span>
              <p className='text-gray-700'>
                Keep all your favorite recipes in one place for quick access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
