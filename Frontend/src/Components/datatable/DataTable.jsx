import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Image', headerName: 'Profile Image', width: 130 },
    { field: 'name', headerName: 'Student name', width: 130 },
    { field: 'courseName', headerName: 'Course name', width: 130 },
    { field: 'password', headerName: 'Password', width: 130 },
];

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];


export default function DataTable () {
    
const [rows, setRows] = useState([])
const fetchData = async () => {
    const res = await axios.get('http://localhost:8500/api/admin/getstudents');
    console.log(res)
    console.log(res.data.data)
    const filterData = res.data.data.map((item) => {
        return {
            id: item.studentId,
            // firstName: item.firstname,
            // lastName: item.lastname,
            courseName: item.course,
            password: item.password,
            Image: item.profilePicture || "😊",
            name: item.firstname + " " + item.lastname
        }
    })
    console.log(filterData)
    setRows(filterData)
}
useEffect(() => {
    console.log(rows, "====>>>>> row ")
    fetchData()
    }, [])

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}