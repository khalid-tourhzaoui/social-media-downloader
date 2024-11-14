import { FaFacebook, FaHome, FaInstagram,FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
export const NavElements = [
  {id:1,name: 'home', path: '/', icon: <FaHome /> },
  {id:2,name: 'instagram', path: '/instagram', icon: <FaInstagram /> },
  {id:4,name: 'facebook',path: '/facebook',icon: <FaFacebook />,},
  {id:3,name: 'youtube',path: '/youtube',icon: <FaYoutube />,},
  {id:5,name: 'tik tok',path: '/tiktok',icon: <FaTiktok />,},
  {id:6,name: 'twitter',path: '/twitter',icon: <FaTwitter />,},
];
export default NavElements;