import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <nav className="shadow">
          <div className="flex justify-between items-center py-10 px-10 container mx-auto">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
                Recipy
              </h1>
            </div>

            <div>
              <div className="flex items-center">
                <ul className="sm:flex space-x-4 hidden items-center">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-700 hover:text-indigo-600 text-md "
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-700 hover:text-indigo-600 text-md "
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/add"
                      className="text-gray-700 hover:text-indigo-600 text-md "
                    >
                      Add Recipe
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="liked"
                      className="text-gray-700 hover:text-indigo-600 text-md "
                    >
                      Favourites
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
