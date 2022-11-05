import { requestCreateCar, requestListCar } from 'ex-redux/actions/action-create-car';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, FormGroup, Input, Label } from 'reactstrap';

const Forms = () => {
    const dispatch = useDispatch()
    const [forms, setforms] = useState({
        "name": "",
        "category": "",
        "price": 0,
        "status": false,
    })
    const handleChange = (_) => {
        const { value, name } = _.target
        setforms(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (_) => {
        _.preventDefault()
        dispatch(requestCreateCar({ value: forms }))
    }

    useEffect(() => {
        dispatch(requestListCar())
    }, [dispatch])

    return (
        <div style={{ width: "50%", padding: 20 }}>
            <form onSubmit={handleSubmit}>
                <div>
                    <Input
                        onChange={handleChange}
                        name='name'
                        placeholder='Name...'
                        type="text"
                    />
                </div>
                <div>
                    <Input
                        onChange={handleChange}
                        name='category'
                        placeholder='Category..'
                        type="text"
                    />
                </div>
                <div>
                    <Input
                        onChange={handleChange}
                        name='price'
                        placeholder='Price...'
                        type="text"
                    />
                </div>
                <div>
                    <FormGroup switch>
                        <Input name='status' onChange={() => setforms(prev => ({
                            ...prev,
                            status: !forms.status
                        }))} type="switch" role="switch" />
                        <Label check>{forms.status ? "available" : "unavailable"}</Label>
                    </FormGroup>
                </div>
                <div>
                    <Button type='submit'>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default Forms