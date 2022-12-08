import React, { useEffect, useState } from 'react'
import { Fragment } from "react";
import BarChart from 'page/chart/barChart';
import PieChart from 'page/chart/pieChart';
import LineChart from 'page/chart/lineChart';
import { useDispatch, useSelector } from 'react-redux';
import { BarchartData } from 'ex-redux/actions/chart-action';
import { FormGroup, Label } from 'reactstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import AppRoutes from 'config/router';
const App = (props) => {
    const [state, setState] = useState({
        from: "",
        until: ""
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(BarchartData(state))
    }, [dispatch, state])
    const { barChart } = useSelector(state => state.dataList)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    useEffect(() => {
        startDate && endDate && setState({
            from: startDate,
            until: endDate
        })
    }, [startDate, endDate])
    return (
        <Fragment>
            <FormGroup style={{ display: "flex", gap: "1rem", padding: 16, width: "50%" }}>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                {/* <FormText>Help</FormText> */}
            </FormGroup>
            <div>
                <BarChart data={barChart} />
            </div>
            <AppRoutes/>
            {/* <Header {...props} statusPencarian={statusPencarian} /> */}
            {/* <AppRoutes {...props} closeHandler={closeHandler} /> */}
            {/* <Footer {...props} /> */}
            {/* <Dropzone
        classNames="drop-zone-style"
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*,audio/*,video/*"
      /> */}
            {/* <ReactPlayer
        url={'https://www.youtube.com/watch?v=-THm9CYuXNA'}
        onPlay={(e) => console.log("play")}
        onPause={(e) => console.log("pause")}
        playing={true}
        controls
      />

      <ModalImage
        hideZoom={true}

      /> */}
            {/* <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js'>
        <div style={{ margin: 20 }}>
          <Viewer fileUrl={pdfFile} />
        </div>
      </Worker> */}
        </Fragment>
    );
}

export default App