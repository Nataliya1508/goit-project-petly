import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { SharedLayout } from './SharedLayout';

const Home = lazy(() =>
  import('pages/Home').then(module => ({ default: module.Home }))
);
const Login = lazy(() =>
  import('pages/Auth').then(module => ({ default: module.Login }))
);
const Register = lazy(() =>
  import('pages/Auth').then(module => ({ default: module.Register }))
);
const News = lazy(() =>
  import('pages/News').then(module => ({ default: module.News }))
);
const Notices = lazy(() =>
  import('pages/Notices').then(module => ({ default: module.Notices }))
);
const OurFriends = lazy(() =>
  import('pages/OurFriends').then(module => ({ default: module.OurFriends }))
);
const UserAccount = lazy(() =>
  import('pages/UserAccount').then(module => ({ default: module.UserAccount }))
);

export const App = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route path="login" element={isLoggedIn ? <Navigate to='/user'/> : <Login />} />
        <Route path="register" element={isLoggedIn ? <Navigate to='/user'/> : <Register />} />

        <Route path="news" element={<News />} />
        <Route path="notices" element={<Notices />} />
        <Route path="notices/:categoryName" element={<Notices />} />
          <Route path="sell" element={<p>sell</p>}/>
          <Route path="lost-found" element={<p>lost-found</p>}/>
          <Route path="free" element={<p>in good hands</p>}/>
        <Route path="friends" element={<OurFriends />} />

        <Route path="user" element={<UserAccount />} />
        <Route path="*" element={<h1>Page Not Found 🥶</h1>} />
      </Route>
    </Routes>
  );
};
