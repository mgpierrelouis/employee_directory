import React, {useState} from 'react';
import EmployeeData from './EmployeeData.json';

 
function Table () {
    const [data, setdata] = useState(EmployeeData);
    const [order, setorder] = useState('ASC')
    const sorting =(col)=>{
        if (order === 'ASC'){
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
            setdata(sorted);
            setorder('DSC')
        };
        if (order === 'DSC'){
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1);
            setdata(sorted);
            setorder('ASC')
        };
    }

         
    return (
        <div className= 'container'>
            <table className= 'table table-bordered'>
            <thead>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th onClick={()=>sorting("email")}>Email</th>
                    <th onClick={()=>sorting("cell")}>Cell Phone</th>
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