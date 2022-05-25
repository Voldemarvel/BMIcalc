import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bmitable = () => {
    return (
        <table className='table table-striped fs-6 mt-4 w-50'>
            <thead className='h4'>BMI Kategooriad</thead>
            <tbody>
                <tr>
                    <td>Alakaaluline</td>
                    <td>Alla 18.5</td>
                </tr>
                <tr>
                    <td>Normaalkaal</td>
                    <td>18.5–24.9</td>
                </tr>
                <tr>
                    <td>Ülekaaluline</td>
                    <td>25–29.9</td>
                </tr>
                <tr>
                    <td>Rasvunud</td>
                    <td>30 või suurem</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Bmitable;