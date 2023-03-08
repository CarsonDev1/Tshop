import { useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <ProductList />
    }
  ])
  return
}
