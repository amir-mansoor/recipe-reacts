import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Hero from "./components/Hero.jsx";
import { store } from "./store.js";
import { Provider } from "react-redux";
import AddScreen from "./screens/AddScreen.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import RecipyDetailsScreen from "./screens/RecipyDetailsScreen.jsx";
import FavouriteScreen from "./screens/FavouriteScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<Hero />} />
      <Route path="/add" element={<AddScreen />} />
      <Route path="/recipy/:id" element={<RecipyDetailsScreen />} />
      <Route path="/liked" element={<FavouriteScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
