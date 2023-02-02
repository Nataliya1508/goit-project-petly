import Header from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;