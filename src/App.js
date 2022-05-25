import React, { useState } from 'react';
import './App.css';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BmiForm from './components/form';
import BmiTable from './components/table';

function App() {
  const [bmi, setBmi] = useState();
  const [bmiDesc, setBmiDesc] = useState();

  const calcBmi = (enteredHeight, enteredWeight) => {

    let curBmi = (Math.round(((enteredWeight / (enteredHeight / 100) ** 2) * 10)) / 10);

    setBmi('Sinu BMI on: ' + curBmi);

    if (curBmi < 18.5) {
      setBmiDesc('alakaaluline')
    } else if (curBmi >= 18.5 && curBmi < 25) {
      setBmiDesc('normaalkaal')
    } else if (curBmi >= 25 && curBmi < 30) {
      setBmiDesc('ülekaaluline')
    } else {
      setBmiDesc('rasvumine')
    }
  };


  return (
    <div className='App-header'>
      <Container className='col-6'>
        <Card className='bg-light text-dark'>
          <Card.Body>
            <Card.Title className='text-center'><h1>Arvuta oma BMI</h1></Card.Title>
            <Card.Text>
              <BmiForm onCalcBmi={calcBmi} />

              {bmi}
              <br />
              {bmiDesc}

              <BmiTable/>

            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default App;