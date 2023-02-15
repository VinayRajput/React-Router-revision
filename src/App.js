import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import RootLayout from "./pages/Root";
import ErrorPage from './pages/error'
import ProductDetailPage from "./pages/produc-detail";

/*
const routeDefinitions = createRoutesFromElements(
    <Route>
        <Route path={"/"} element={<HomePage/>} />
        <Route path={"/products"} element={<ProductPage/>} />
    </Route>
)
const router = createBrowserRouter(routeDefinitions)

*/

const router = createBrowserRouter([
  {
  path:'/',
  element: <RootLayout/>,
  errorElement: <ErrorPage/>,
  children:[
    {index:true, element: (<HomePage/>)},
    {path:'products', element: <ProductPage/>},
    {path:'products/:productId', element: <ProductDetailPage/>}
  ]},

])

function App() {
  return <RouterProvider router={router} />
}

export default App;