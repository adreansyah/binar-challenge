import { requestApiGETById, requestPOST, requestPUT } from 'ex-redux/actions/lessonAction';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Button, FormGroup, Input, Label } from 'reactstrap';

const Forms = () => {
    const dispatch = useDispatch()
    const { formState } = useSelector(state => state.dataList)
    const navigate = useNavigate()
    const [forms, setforms] = useState(formState)
    const { id } = useParams()
    const [image, setImage] = useState(null)
    const [updateImg, setUpdateImg] = useState(false)
    const handleChange = (_) => {
        const { value, name } = _.target
        setforms(prev => ({
            ...prev,
            [name]: value,
        }))
    }
    useEffect(() => {
        id && dispatch(requestApiGETById({ id }))
    }, [id])
    useEffect(() => {
        setTimeout(() => {
            setforms(formState)
            id && setImage(formState.image)
        }, 1000)
    }, [formState, id])
    const fileUpload = (_) => {
        var file = _.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            setImage(reader.result)
            setforms(prev => ({
                ...prev,
                image: file
            }))
            id && setUpdateImg(true)
        }
        reader.readAsDataURL(file);
    }
    const handleSubmit = (_) => {
        _.preventDefault()
        if (id) {
            if (!updateImg) {
                delete forms.image
            }
            dispatch(requestPUT({ id, value: forms, navigate }))
        } else {
            dispatch(requestPOST({ value: forms, navigate }))
        }
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}>
            <form onSubmit={handleSubmit}>
                <div style={{ paddingTop: 4, paddingBottom: 4 }}>
                    <FormGroup>
                        <Input
                            onChange={handleChange}
                            name='name'
                            placeholder='Name...'
                            type="text"
                            value={forms.name}
                        />
                    </FormGroup>
                </div>
                <div style={{ paddingTop: 4, paddingBottom: 4 }}>
                    <FormGroup>
                        <Input
                            onChange={handleChange}
                            name='category'
                            placeholder='Category..'
                            type="text"
                            value={forms.category}
                        />
                    </FormGroup>
                </div>
                <div style={{ paddingTop: 4, paddingBottom: 4 }}>
                    <FormGroup>
                        <Input
                            onChange={handleChange}
                            name='price'
                            placeholder='Price...'
                            type="text"
                            value={forms.price}
                        />
                    </FormGroup>
                </div>
                <div style={{ paddingTop: 4, paddingBottom: 4 }}>
                    <FormGroup switch>
                        <Input name='status' onChange={() => setforms(prev => ({
                            ...prev,
                            isRented: !forms.isRented
                        }))} type="switch" role="switch" checked={forms.isRented} />
                        <Label check>{forms.isRented ? "available" : "unavailable"}</Label>
                    </FormGroup>
                </div>
                <div style={{ display: "flex", paddingTop: 4, paddingBottom: 4 }}>
                    <FormGroup switch>
                        <Input name='status' type="file" onChange={fileUpload} />
                    </FormGroup>
                    {
                        image && <div>
                            <img width="100%" height={90} src={image} alt="folating-hello" />
                        </div>
                    }
                </div>
                <div style={{ padding: 20, display: "flex", justifyContent: "end" }}>
                    <Button color="primary">
                        Save
                    </Button>
                </div>
            </form >
        </div >
    )
}

export default Forms

