import React from 'react';
import { css } from '@emotion/css';
import { Outlet, Link } from 'react-router-dom';

import TopBar from '../../components/TopBar/TopBar';

function Layout() {
  return (
    <div className={css`background-color: #E7E9EB; height: 100vh`}>
      <TopBar />
      <Outlet />
    </div>
  )
}

export default Layout;