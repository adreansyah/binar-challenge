import axios from 'axios';
import { TOKEN, url } from 'config/authoritize';
import React, { useEffect, useState } from 'react';

const AboutUs = (props) => {
    const [state, setState] = useState({
        name: "",
        category: "",
        price: "",
        isRented: false
    })

    const fetcApi = (params) => {
        return axios.get(url + 'admin/v2/car', {
            params: {
                ...params,
            },
            headers: {
                access_token: `${TOKEN}`,
                "content-type": "application/json"
            }
        })
    }

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
    }

    useEffect(() => {
        fetcApi(state).then(r => console.log(r));
    }, [state])
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