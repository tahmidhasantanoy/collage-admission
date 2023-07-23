import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from "../../Shared/NavBar/NavBar"
import Footer from "../../Shared/Footer/Footer"

const MainLayout = () => {
    return (
        <>
          <NavBar></NavBar>
          <Outlet/>
          <Footer></Footer>
        </>
    );
};

export default MainLayout;