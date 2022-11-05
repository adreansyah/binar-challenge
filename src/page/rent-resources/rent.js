import React, { useEffect, useRef, useState } from 'react';
import { fetcApi } from 'config/fethApi';
import { Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { category, price, status } from './option-data';
import Card from 'component/card';
import { useDispatch, useSelector } from 'react-redux';
import { requestData } from 'ex-redux/actions/action-data';

const AboutUs = (props) => {
    const [state, setState] = useState({
        name: "",
        category: "",
        price: "",
        isRented: false
    })
    const [focus, setfocus] = useState(false)
    const { data } = useSelector(state => state.userData)
    const dispatch = useDispatch()
    const changeHandler = (event) => {
        const { name, value } = event.target
        setState(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const clickHandler = () => {
        props.closeHandler("success")
        setfocus(false)
        dispatch(requestData())
    }

    const wrapperRef = useRef(null);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, []);

    const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setfocus(false);
        }
    };
    return (
        <>
            {focus && <div className='opacity'></div>}
            <div className='block-box-search'>
                <div className='box-card-search'>
                    <form ref={wrapperRef} onFocus={() => setfocus(true)}>
                        <div className='container-box-search'>
                            <div>
                                <span>Nama Mobil</span>
                                <Input
                                    name='name'
                                    onChange={changeHandler}
                                    placeholder='Nama' style={{ padding: 6 }}
                                    type="text"
                                />
                            </div>
                            <div>
                                <span>Kategori</span>
                                <Input onChange={changeHandler} type="select" name="category" id="exampleSelect">
                                    <option value="">Select Category</option>
                                    {
                                        category.map((item, index) => {
                                            return (<option key={index} value={item.value}>{item.label}</option>)
                                        })
                                    }
                                </Input>
                            </div>
                            <div>
                                <span>Harga</span>
                                <Input onChange={changeHandler} type="select" name="price" id="exampleSelect">
                                    <option value="">Select Price</option>
                                    {
                                        price.map((item, index) => {
                                            return (<option key={index} value={item.value}>{item.label}</option>)
                                        })
                                    }
                                </Input>
                            </div>
                            <div>
                                <span>Status</span>
                                <Input onChange={changeHandler} type="select" name="isRented" id="exampleSelect">
                                    <option value="">Select Status</option>
                                    {
                                        status.map((item, index) => {
                                            return (<option key={index} value={item.value}>{item.label}</option>)
                                        })
                                    }
                                </Input>
                            </div>
                            <div>
                                <button type='button' onClick={clickHandler} className='btn-default'>Cari Mobil</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='block-box-search'>
                {data.length === 0 ? <div style={{ position: "relative", top: "2rem" }}>Data Not found</div> : <Card data={data} />}
            </div>
        </>
    )
}

export default AboutUs