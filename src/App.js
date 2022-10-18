import React from 'react'
import { Fragment } from "react";
import { Header } from 'component/header';
import AppRoutes from 'config/router';
import Footer from 'component/footer';

const App = (props) => {
  return (
    <Fragment>
      <Header {...props} />
      <AppRoutes {...props} />
      <Footer {...props} />
    </Fragment>
  );
}

export default App