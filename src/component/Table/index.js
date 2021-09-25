import React, {useState} from 'react';
import EmployeeData from './EmployeeData.json';
import './index.css'

 
function Table () {
    const [data, setdata] = useState(EmployeeData)
    return (
        <div className= 'container'>
            <table className= 'table table-bordered'>
            <thead>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Cell Phone</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d)=> (
                    <tr key={d.name.last}>
                    <td>{d.name.last}</td>
                    <td>{d.name.first}</td>
                    <td>{d.email}</td>
                    <td>{d.cell}</td>
                </tr>

                ))}
                
            </tbody>
            </table>
        </div>
    )
}

export default Table;