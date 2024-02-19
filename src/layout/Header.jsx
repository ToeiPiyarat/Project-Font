import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const guestNav = [
  { to : '/', text: 'ล็อคอิน' },
  { to : '/register', text: 'สมัคร' },
]

const userNav = [
  { to : '/home', text: 'หน้าหลัก' },
  { to : '/reserved/show', text: 'เช็คสถานะ' },
  
]

export default function Header() {
  const {user, logout} = useAuth()
  const finalNav = user?.id ? userNav : guestNav

  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="navbar bg-purple-200">
      <div className="flex-1">
      <img src="car.jpg" className="w-16 h-16 rounded-full border border-black" />
        <a className="btn btn-ghost text-xl mx-auto w-1/2"> {user?.id ? user.username : ''}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          { finalNav.map( el => (
            <li key={el.to} >
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          { user?.id && (
            <li>
              <Link to='#' onClick={hdlLogout}>ออกจากระบบ</Link>
            </li>
          ) }
        </ul>
      </div>
    </div>
  );
}
