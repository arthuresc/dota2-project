import { Navigate } from 'react-router-dom'
import { RouteObject } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Pizza from '../pages/Pizza/Pizza'
// import Dashboard from './pages/Dashboard'
// import Login from './pages/Login'
import ErrorPage from '../pages/ErrorPage'
import RequireAuth from '../components/RequiredAuth'

const routes: RouteObject[] = [
  {
    path: '/',
    element: Home(),
    errorElement: ErrorPage,
  },
  {
    path: '/pizza',
    element: Pizza(),
    errorElement: ErrorPage,
  },
  // {
  //   path: '/dashboard',
  //   element: (
  //     <RequireAuth>
  //       <Dashboard />
  //     </RequireAuth>
  //   ),
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: '/404',
  //   element: <ErrorPage />,
  // },
  // {
  //   path: '*',
  //   element: <Navigate to="/404" replace />,
  // },
]

export default routes