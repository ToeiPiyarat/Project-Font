import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header'
import UserHome from '../layout/UserHome'
import NewTodoForm from '../layout/NewTodoForm'
import HOME from '../layout/HOME'
import Todo from '../layout/Todo'
// import Reseverd from '../components/Reseverd'
import ReservedDashboard from '../components/Reseverd'
import ReseverdForm from '../components/ReservedForm'

const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <LoginForm /> },
      { path: '/login', element: <LoginForm /> },
      { path: '/register', element: <RegisterForm />},
      { path: '/home', element:<HOME/> },
      { path: '/reserved', element:<ReseverdForm/> },
      { path: '/reserved/show', element:<ReservedDashboard/> },
      // { path: '/status', element:<Status/> },
      { path: '/reserved/delete/:reservedId', element:<ReservedDashboard/> },

    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children : [
      { index: true, element: <UserHome /> },
      { path: '/login', element: <LoginForm /> },
      { path: '/new', element: <NewTodoForm />},
      { path: '/home', element:<HOME/> },
      { path: '/tot', element:<Todo/> },
      { path: '/reserved', element:<ReseverdForm/> },
      { path: '/reserved/show', element:<ReservedDashboard/> },
      // { path: '/status', element:<Status/> },
      { path: '/reserved/delete/:reservedId', element:<ReservedDashboard/> },

    ]
  }
])

export default function AppRouter() {
  const {user} = useAuth()
  const finalRouter = user?.id ? userRouter : guestRouter
  return (
    <RouterProvider router={finalRouter} />
  )
}