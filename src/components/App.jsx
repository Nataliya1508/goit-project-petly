import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { addGoogleToken } from 'redux/auth/auth-slice';
// import { getIsRefreshing } from 'redux/auth/auth-selectors';
import { PrivateRoute } from './SecureRoutes/PrivatRoute';
import { RedirectedRoute } from './SecureRoutes/RedirectedRoute';
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
const Reset = lazy(() =>
  import('pages/Auth').then(module => ({ default: module.Reset }))
);
const ResetPassword = lazy(() =>
  import('pages/Auth').then(module => ({ default: module.ResetPassword }))
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
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const googleToken = searchParams.get('token');

  useEffect(() => {
    if (googleToken) {
      dispatch(addGoogleToken(googleToken));
      setSearchParams({});
    }
    dispatch(getCurrentUser());
  }, [dispatch, googleToken, setSearchParams]);

  return (
    <>
      {/* {!isLoading && ( */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route
            path="login"
            element={
              <RedirectedRoute redirectTo="/user" component={<Login />} />
            }
          />
          <Route
            path="register"
            element={
              <RedirectedRoute redirectTo="/user" component={<Register />} />
            }
          />
          <Route path="recovery" element={<Reset />} />
          <Route path="recovery/:recoveryToken" element={<ResetPassword />} />

          <Route path="news" element={<News />} />
          <Route path="notices/:categoryName" element={<Notices />} />

          <Route path="friends" element={<OurFriends />} />
          <Route
            path="user"
            element={
              <PrivateRoute redirectTo="/login" component={<UserAccount />} />
            }
          />
          <Route path="*" element={<h1>Page Not Found 🥶</h1>} />
        </Route>
      </Routes>
      {/* )} */}
    </>
  );
};
