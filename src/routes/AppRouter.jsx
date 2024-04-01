import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header'
import HOME from '../layout/HOME'
import ReservedDashboard from '../components/Reseverd'
import ReseverdForm from '../components/ReservedForm'
import Admin from '../layout/Admin'
import AdminReseverd from'../components/AdminReseverd'
import UserProfire from '../components/UserProfire'
import UserVechinumber from '../components/UserVechinumber'
import USerAddCar from '../components/USerAddCar'
import EditReseved from '../components/EditReseved'
import Homepage from '../layout/Homepage'

const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <Homepage /> },
      { path: '/homepage', element: <Homepage /> },
      { path: '/login', element: <LoginForm /> },
      { path: '/register', element: <RegisterForm />},
      // { path: '/home', element:<HOME/> },
      // { path: '/reserved', element:<ReseverdForm/> },
      // { path: '/reserved/show', element:<ReservedDashboard/> },
      // { path: '/reserved/delete/:reservedId', element:<ReservedDashboard/> },
      // { path: '*', element: <p> PAGE NOT FOUND</p>},
      // { path: '/reserved/edit', element: <AdminReseverd/> },

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
      { index: true, element: <HOME /> },
      { path: '/login', element: <LoginForm /> },
      { path: '/home', element:<HOME/> },
      { path: '/reserved', element:<ReseverdForm/> },
      { path: '/reserved/show', element:<ReservedDashboard/> },
      { path: '/reserved/delete/:reservedId', element:<ReservedDashboard/> },
      { path: '*', element: <p> PAGE NOT FOUND</p>},
      { path: '/reserved/edit', element: <AdminReseverd/> },
      { path: '/profire', element: <UserProfire/> },
      { path: '/vechinumber', element: <UserVechinumber/> },
      { path: '/add', element: <USerAddCar/> },
      { path: '/edit/*', element: <EditReseved/> },

    ]
  }
])

const adminRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children : [
      { index: true, element: <Admin /> },
      { path: '/login', element: <LoginForm /> },
      { path: '/home', element:<HOME/> },
      { path: '/reserved', element:<ReseverdForm/> },
      { path: '/reserved/show', element:<ReservedDashboard/> },
      { path: '/reserved/delete/:reservedId', element:<ReservedDashboard/> },
      { path: '/admin', element:<Admin/> },
      { path: '*', element: <p> PAGE NOT FOUND</p>},
      { path: '/reserved/edit', element: <AdminReseverd/> },
      { path: '/add', element: <USerAddCar/> },
      
    ]
  }
])

export default function AppRouter() {
  const {user} = useAuth()
  const finalRouter = user?.id ? user?.role === 'ADMIN' ? adminRouter : userRouter : guestRouter;


  return (
    <RouterProvider router={finalRouter} />
  )
}