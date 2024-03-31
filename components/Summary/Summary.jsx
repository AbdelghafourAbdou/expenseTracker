/* eslint-disable react/prop-types */
import { } from 'react';
import './summary.css';

export default function Summary({ total }) {
    let whole = Math.floor(total);
    let decimal = total - whole;

    return (
        <div className='summaryContainer'>
            <h1>You have spent so far: </h1>
            <span className='whole'>${whole}</span>
            <span className='decimal'> .{(Math.round((decimal + Number.EPSILON) * 100) / 100).toString().substring(2, 4)}</span>
        </div>
    )
}