import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { getIsRefreshing } from 'redux/auth/auth-selectors';
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
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isLoading && (
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

            <Route path="news" element={<News />} />
            <Route path="notices" element={<Notices />} />
            <Route path="notices/:categoryName" element={<Notices />}>
              <Route path="sell" element={<Navigate to="sell" />} />
              <Route path="lost-found" element={<p>lost-found</p>} />
              <Route path="free" element={<p>in good hands</p>} />
              <Route
                path="own"
                element={
                  <PrivateRoute redirectTo="/login" component={<p>own</p>} />
                }
              />
              <Route
                path="favorite"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<p>favorite</p>}
                  />
                }
              />
            </Route>

            <Route path="friends" element={<OurFriends />} />
            <Route path="user" element={<UserAccount />} />
            <Route path="*" element={<h1>Page Not Found 🥶</h1>} />
          </Route>
        </Routes>
      )}
    </>
  );
};
