import React, { useState } from 'react';

const AboutUs = (props) => {
    const [state, setState] = useState({
        nama: "",
        kategori: "",
        harga: "",
        status: false
    })
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
        console.log("MULAI MENCARI : ", state)
    }
    return (
        <div className='block-box-search'>
            <div className='box-card-search'>
                <div className='container-box-search'>
                    <div>
                        <span>Nama Mobil</span>
                        <input onChange={changeHandler} name='nama' type="text" />
                    </div>
                    <div>
                        <span>Kategori</span>
                        <input onChange={changeHandler} name='kategori' type="text" />
                    </div>
                    <div>
                        <span>Harga</span>
                        <input onChange={changeHandler} name='harga' type="text" />
                    </div>
                    <div>
                        <span>Status</span>
                        <input onChange={changeHandler} name="status" type="text" />
                    </div>
                    <div>
                        <button onClick={clickHandler} className='btn-default'>Cari Mobil</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs