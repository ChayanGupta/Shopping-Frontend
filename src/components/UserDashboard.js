import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../css/Dashboard.css";

export default function UserDashboard() {
    const navigate = useNavigate();

    return (
        <div className='dashboard-'>
            <div className='dashboard'>
                <h1> Hello User!</h1>
            </div>
        </div>
    )
}