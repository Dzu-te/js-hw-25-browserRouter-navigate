import { Outlet } from "react-router";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <p>This is the Products page.</p>
      <p>Here you can find a list of our products.</p>
      <Outlet />
    </div>
  );
};
export default Products;
