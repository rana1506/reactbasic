// Products file
import { Link, Outlet } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <input placeholder="Search Products" type="search" />
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default Products;