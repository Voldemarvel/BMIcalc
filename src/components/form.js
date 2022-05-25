import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bmiform = props => {
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();

    const formSubmitHandler = event => {
        event.preventDefault();
        props.onCalcBmi(height, weight);
    }

    return (
        <Form className="m-2" onSubmit={formSubmitHandler}>

            <Form.Group className="m-2" controlId="formHeight">
                <Form.Label className='h4'>Pikkus CM (100-250)</Form.Label>
                <Form.Control className='w-50' type="number" min={100} max={250} step={1} value={height} onChange={(e) => setHeight(e.target.value)} />
                <Form.Range min={100} max={250} step={1} value={height} onChange={(e) => setHeight(e.target.value)} />
            </Form.Group>

            <Form.Group className="m-2" controlId="formWeight">
                <Form.Label className='h4'>Kaal KG (20-200)</Form.Label>
                <Form.Control className='w-50' type="number" min={20} max={200} step={0.1} value={weight} onChange={(e) => setWeight(e.target.value)} />
                <Form.Range min={20} max={200} step={0.1} value={weight} onChange={(e) => setWeight(e.target.value)} />
            </Form.Group>

            <Button className='m-3 rounded-pill' variant="primary" type="submit">Arvuta</Button>

        </Form>
    );
};

export default Bmiform;