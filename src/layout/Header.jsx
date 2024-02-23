import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const guestNav = [
  { to : '/', text: 'ล็อคอิน' },
  { to : '/register', text: 'สมัคร' },
]

const userNav = [
  { to : '/home', text: 'ทำการจอง' },
  { to : '/reserved/show', text: 'เช็คสถานะ' },
  
]

const adminNav = [
  { to : '/admin', text: 'หน้าหลัก' },
  { to : '/reserved/edit', text: 'เช็คสถานะ' },
]

export default function Header() {
  const {user, logout} = useAuth()

  // console.log(user?.role);
  // const finalNav = user?.id ?  userNav : guestNav
  const finalNav = user?.id ? user?.role === 'ADMIN' ? adminNav : userNav : guestNav;
  

  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (
      <div className="navbar bg-gradient-to-r from-purple-300 to-indigo-400 py-3 px-4 flex items-center justify-between">
        <div className="flex items-center">
            <img src="https://png.pngtree.com/png-clipart/20230412/ourmid/pngtree-car-handsome-silver-car-png-image_6679645.png" className="w-16 h-16 rounded-full border border-black mr-4" />
              <a className="btn btn-ghost text-xl">{user?.id ? user.username : ''}</a>
        </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex items-center">
          {finalNav.map(el => (
        <li key={el.to} className="mx-2">
          <Link to={el.to} className="text-purple-800 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-md transition-colors duration-300">{el.text}</Link>
        </li>
      ))}
      {user?.id && (
        <li><Link to='#' onClick={hdlLogout} className="text-purple-800 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-md transition-colors duration-300">ออกจากระบบ</Link></li>
      )}
    </ul>
  </div>
</div>
  );
}
