import logo from '../components/NavBar/Logo/images/logo.svg';
import dashboard from '../components/NavBar/Navigation/images/dashboard.svg';
import support from '../components/NavBar/Navigation/images/support.svg';
import notification from '../components/NavBar/Navigation/images/notification.svg';
import logOut from '../components/NavBar/Navigation/images/ri_logout-box-fill.svg';
import logIn from '../components/NavBar/Navigation/images/support.svg';
import registration from '../components/NavBar/Navigation/images/notification.svg';

export const logoData = {text: 'Quiz Time', url: logo}

export const appMenuList = [
  { text: 'Dashboard', url: dashboard },
  { text: 'Support', url: support },
  { text: 'Notification', url: notification }
];

export const loginMenuList = [
  { text: 'Log Out', url: logOut },
  { text: 'Log In', url: logIn },
  { text: 'Registration', url: registration }
];
