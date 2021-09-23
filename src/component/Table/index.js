import React from 'react';
import './index.css'

function Table (props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td id= 'lastName'></td>
                    <td id= 'firstName'></td>
                    <td id= 'email'></td>
                    <td id= 'phoneNumber'></td>
                    <td id= 'role'></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;