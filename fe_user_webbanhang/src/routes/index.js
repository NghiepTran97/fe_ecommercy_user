import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layout";
import ErrorPage from "../pages/errorPage";
import Index from "../pages";
import ProductShow from "../pages/products/show";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            index: true,
            element: <Index/>,
        },
        {
          path: '/products',
          children: [
            {
              path: ":productId",
              element: <ProductShow />
            }
          ]
        }
      ]
    }
]);

export default router;