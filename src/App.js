import React, { useEffect, useState } from 'react'
import { Fragment } from "react";
import { Header } from 'component/header';
import AppRoutes from 'config/router';
import Footer from 'component/footer';
import { useDispatch, useSelector } from 'react-redux';
import { requestAddNumber, requestReduceNumber } from 'ex-redux/actions';
import { requestData } from 'ex-redux/actions/action-data'


const App = (props) => {
  const [statusPencarian, setStatusPencarian] = useState(null)
  const closeHandler = (arg) => {
    setStatusPencarian(arg)
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestData())
  }, [dispatch])

  return (
    <Fragment>
      {/* <Header {...props} statusPencarian={statusPencarian} /> */}
      <AppRoutes {...props} closeHandler={closeHandler} />
      {/* <Footer {...props} /> */}
    </Fragment>
  );
}

export default App