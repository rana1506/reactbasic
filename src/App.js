// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from './components/Navbar'
import NoMatch from "./components/NoMatch";
import Products from "./components/products/Products";
import FeaturedProduct from './components/products/FeaturedProduct'
import NewProduct from './components/products/NewProduct'
import Users from "./components/users/Users"
import UserDetails from "./components/users/UserDetails"

const App = () => {
  const LazyAbout = React.lazy(() => import("./components/About"));
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
          }
        />
        <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProduct />} />
            <Route path="featured" element={<FeaturedProduct />} />
            <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App 

