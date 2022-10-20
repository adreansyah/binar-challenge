import React, { useState } from 'react'
import { Fragment } from "react";
import { Header } from 'component/header';
import AppRoutes from 'config/router';
import Footer from 'component/footer';


const App = (props) => {
  const [statusPencarian, setStatusPencarian] = useState(null)
  const closeHandler = (arg) => {
    setStatusPencarian(arg)
  }
  return (
    <Fragment>
      <Header {...props} statusPencarian={statusPencarian} />
      <AppRoutes {...props} closeHandler={closeHandler} />
      <Footer {...props} />
    </Fragment>
  );
}

export default App