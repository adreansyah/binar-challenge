import { requestPOST } from 'ex-redux/actions/lessonAction';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Button, FormGroup, Input, Label } from 'reactstrap';

const Forms = () => {
    const dispatch = useDispatch()
    const { formState } = useSelector(state => state.userData)
    const [forms, setforms] = useState(formState)
    const { id } = useParams()
    const [image, setImage] = useState(null)
    const handleChange = (_) => {
        const { value, name } = _.target
        setforms(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (_) => {
        _.preventDefault()
        dispatch(requestPOST({ value: forms }))
    }

    useEffect(() => {
        setTimeout(() => {
            console.log(formState);
            setforms(formState)
        }, 1000)
    }, [formState])

    const fileUpload = (_) => {
        var file = _.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            setImage(reader.result)
            setforms(prev => ({
                ...prev,
                image: file
            }))
        }
        reader.readAsDataURL(file);
    }
    return (
        <div >
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
                            status: !forms.status
                        }))} type="switch" role="switch" value={forms.status} />
                        <Label check>{forms.status ? "available" : "unavailable"}</Label>
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

