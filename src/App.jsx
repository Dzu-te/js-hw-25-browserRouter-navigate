import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Products from "./components/Products";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import ProductLayout from "./components/ProductLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "products",
        element: <ProductLayout />,
        children: [
          {
            path: "",
            element: <Products />,
          },
          {
            path: "product",
            element: <Product />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contacts" element={<Contacts />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="products/product" element={<Product />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// }

export default App;
